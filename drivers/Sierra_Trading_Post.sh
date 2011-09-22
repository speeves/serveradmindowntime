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

DRIVERNAME="Sierra_Trading_Post"
HOMEPAGEPIC="sierra2.jpg"
ERRORMSG="     We're sorry, we couldn't find any matches for your item, but we'd love to keep trying."
ERRORPIC="sierra_error_dog.jpg"
APIURL="http://apps.sierratradingpost.com/api/1.0/products/search"
SIERRAAPIKEY="MYAPIKEY"

performsearch()
{
    if [ "${I}" != "" ]; then
        ENCODEDITEMSEARCH=${I}
    else
        ENCODEDITEMSEARCH=$(echo $ITEMSEARCH | sed 's/ /-/g')        
    fi

    SEARCH=$(${WGETME} "${APIURL}~${ENCODEDITEMSEARCH}/?page=1&perpage=10&sort=Brand&api_key=${SIERRAAPIKEY}" ) 
    SEARCHJSON=$(echo $SEARCH | ${JSAWKME} 'return this')
}

printitemid()
{
    echo "Name:        ${ITEMNAME}"
    echo "OUR PRICE:   \$${ITEMFINALPRICE} | MSRP: \$${ITEMLISTPRICE}"
    echo "Item #:      ${ITEMID}"
    echo "Url:         ${ITEMWEBURL}"
}

printimage()
{
    ${WGETME} ${ITEMIMAGESMALL} | convert - jpg:- | jp2a --colors -
}

printdescription()
{
    echo "${ITEMDESCRIPTIONHTMLSIMPLE}" | html2text
}

saygoodbye()
{
    echo 
    echo "Thanks for visiting Sierra Trading Post at http://www.sierratradingpost.com!"
    echo 
    echo "Goodbye!"
    echo 
    exit
}

setsearchresultcount()
{
    RESULTCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Count")
}

unsetsearchresultcount()
{
    unset RESULTCOUNT
}

setitemvariables()
{
    ITEMID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Id")
    ITEMNAME=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Name")
    ITEMURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Url")
    ITEMWEBURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].WebUrl")

    # REVIEWS
    ITEMREVIEWSURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Reviews.ReviewsUrl")
    ITEMREVIEWSCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Reviews.ReviewCount")
    ITEMREVIEWSAVERAGERATING=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Reviews.AverageRating")

    # SIZES
    ITEMSIZES=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].SizesAvailable.SIZE")

    # IMAGE
    ITEMIMAGEMEDIUM=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Images.PrimaryMedium")
    ITEMIMAGESMALL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].Images.PrimarySmall")
    
    #DESCRIPTION
    ITEMDESCRIPTIONHTMLSIMPLE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].DescriptionHtmlSimple")

    # PRICING
    ITEMLISTPRICE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].ListPrice")
    ITEMFINALPRICE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.Result[${ITER}].FinalPrice")
}

unsetitemvariables()
{
    unset ITEMID
    unset ITEMNAME
    unset ITEMURL
    unset ITEMWEBURL

    # REVIEWS
    unset ITEMREVIEWSURL
    unset ITEMREVIEWSCOUNT
    unset ITEMREVIEWSAVERAGERATING

    # SIZES
    unset ITEMSIZES

    # IMAGE
    unset ITEMIMAGE
    
    #DESCRIPTION
    unset ITEMDESCRIPTIONHTMLSIMPLE

    # PRICING
    unset ITEMLISTPRICE
    unset ITEMFINALPRICE
}
