#!/bin/sh
####################
#
#     Copyright 2011 Shannon Eric Peevey <speeves@erikin.com>
#
#     This program is free software; you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation; either version 2 of the License, or
#     (at your option) any later version.
#
#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.
#
#     You should have received a copy of the GNU General Public License
#     along with this program; if not, write to the Free Software
#     Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#
#####################
#
# REcommerce Hack Day - Sierra Trading Post site search
# 
####################


startpage()
{
    #we set our ITER in runme.sh
    clear
    # we start with the start page
    showstartpage
    driverlist
    choosedriver
    
    homepage
}

homepage()
{	
    showhomepage
    searchprompt
    if [ "${ITEMSEARCH}" == "-1" ]; then
        saygoodbye
    fi
    # now we perform our search
    performsearch

    performbrowse
}

performbrowse()
{
    setsearchresultcount
    if  [ ${RESULTCOUNT} -gt 0 ]; then
        while [ ${RESULTCOUNT} -gt 0 ] || [ ${ITER} -le ${RESULTCOUNT} ]
        do
            # now we iterate through the results
            setitemvariables
        
            printimage 
            echo
            printitemid
            echo
            echo "Description: "
            echo "------------ "
            printdescription
            echo "------------ "
            unsetitemvariables        
        
            # prompt for next action
            menulist
            interactiveprompt
            if [ "${ACTION}" == "" ]; then
                ACTION=${OLDACTION}
            fi
            if [ "${ACTION}" == "1" ]; then
                let ITER=${ITER}+1
                performbrowse
            elif [ "${ACTION}" == "3" ]; then
                ITER=0
                unsetdrivervars
                unsetsearchresultcount
                startpage
            elif [ "${ACTION}" == "-1" ]; then
                saygoodbye
            else
                ITER=0
                unsetsearchresultcount
                homepage
            fi
        done
    else
        clear
        jp2a  ${IMAGESDIR}${CURRDRIVER}/${ERRORPIC}       
        echo "${ERRORMSG}"
        sleep 5
        clear
        ITER=0
        unsetsearchresultcount
        homepage
    fi
}

showstartpage()
{
    jp2a --colors ${IMAGESDIR}/${STARTPAGEPIC}
}

showhomepage()
{
    jp2a --colors ${IMAGESDIR}${CURRDRIVER}/${HOMEPAGEPIC}
}

searchprompt()
{
    echo -n "Search [-1 to quit]: "
    read -e ITEMSEARCH
}

interactiveprompt()
{
    if [ "${ACTION}" == "" ]; then
        ACTION=2
    fi

    echo -n "What do you want to do next? [${ACTION}] "
    OLDACTION=${ACTION}
    read -e ACTION
}

menulist()
{
    echo " (1)  Next item"
    echo " (2)  New search"
    echo " (3)  New api"
    echo "(-1) Quit"
}

driverlist()
{
    i=1
    DRIVER=""
    for d in $( ls ${DRIVERSDIR}| sed 's/,/ /; s/.sh//')
    do
	echo "(${i}) $(echo ${d} | sed 's/_/ /g')"
        if [ ${i} -eq 1 ];then 
            DRIVER="${d}"
        else
            DRIVER="${DRIVER},${d}"
        fi
	let  i=$i+1 
    done
    echo "(-1) Quit"
    echo -n "Choose the company you wish to search: "
    read -e CURRDRIVERNUM
}

choosedriver()
{
    if [ "${CURRDRIVERNUM}" = "-1" ] || [ "${CURRDRIVERNUM}" = "" ]; then
	saygoodbye
    else
	#HOW DO I DO THIS NOW TODO
        CURRDRIVER=$(echo ${DRIVER} | cut -d, -f${CURRDRIVERNUM})
    fi
    . ${DRIVERSDIR}${CURRDRIVER}.sh
}

unsetdrivervars()
{
    unset DRIVERNAME
    unset HOMEPAGEPIC
    unset ERRORMSG
    unset ERRORMSG
    unset APIURL
}

unsetsearchresultcount()
{
    unset RESULTCOUNT
}

saygoodbye()
{
    echo 
    echo "Thanks for using ServerAdmin Downtime!"
    echo
    echo "Have a nice day!"
    echo
    exit
}
