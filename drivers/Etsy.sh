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
# REcommerce Hack Day - Etsy site search
# 
####################

DRIVERNAME="Etsy"
HOMEPAGEPIC="etsy.jpg"
APIURL="http://openapi.etsy.com/v2/listings"
ETSYAPIKEY="MYAPIKEY"

performsearch()
{
    if [ "${I}" != "" ]; then
        ENCODEDITEMSEARCH=${I}
    else
        ENCODEDITEMSEARCH=$(echo $ITEMSEARCH | sed 's/ /-/g')        
    fi

    SEARCH=$(${WGETME} "${APIURL}/active?keywords=${ENCODEDITEMSEARCH}&limit=10&offset=0&includes=Images&api_key=${ETSYAPIKEY}" ) 
    SEARCHJSON=$(echo $SEARCH | ${JSAWKME} 'return this')
}

printitemid()
{
    echo "Name:        ${ITEMTITLE}"
    echo "Price:     \$${ITEMPRICE}
    echo "Item #:      ${ITEMLISTINGID}"
    echo "Url:         ${ITEMURL}"
}

printimage()
{
    ${WGETME} ${ITEMIMAGE} | convert - jpg:- | jp2a --colors -
}

printdescription()
{
    echo "${ITEMDESCRIPTION}" | html2text
}

saygoodbye()
{
    echo 
    echo "Thanks for visiting Etsy at http://www.etsy.com!"
    echo 
    echo "Goodbye!"
    echo 
    exit
}

setsearchresultcount()
{
    RESULTCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.count")
}

unsetsearchresultcount()
{
    unset RESULTCOUNT
}

setitemvariables()
{
    ITEMLISTINGID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].listing_id")
    ITEMSTATE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].state")
    ITEMUSERID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].user_id")
    ITEMTITLE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].title")
    ITEMDESCRIPTION=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].description")
    ITEMCREATIONTSZ=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].creation_tsz")
    ITEMENDINGTSZ=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].ending_tsz")    
    ITEMORIGINALCREATIONTSZ=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].original_creation_tsz")
    ITEMPRICE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].price")
    ITEMCURRENCYCODE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].currency_code")
    ITEMQUANTITY=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].quantity")
    ITEMTAGS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].tags")
    ITEMMATERIALS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].materials")
    ITEMSHOPSECTIONID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].shop_section_id")
    ITEMFEATUREDRANK=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].featured_rank")
    ITEMSTATETSZ=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].state_tsz")
    ITEMHUE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].hue")
    ITEMSATURATION=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].saturation")
    ITEMBRIGHTNESS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].brightness")
    ITEMISBLACKANDWHITE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].is_black_and_white")
    ITEMURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].url")
    ITEMVIEWS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].views")
    ITEMNUMFAVORERS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].favorers")
    ITEMCATEGORYPATH=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].category_path")
    ITEMIMAGE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].Images[0].url_fullxfull")

    ITEMPARAMS=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].params")
    ITEMTYPE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].type")
}

unsetitemvariables()
{
    unset ITEMLISTINGID
    unset ITEMSTATE
    unset ITEMUSERID
    unset ITEMTITLE
    unset ITEMDESCRIPTION
    unset ITEMCREATIONTSZ
    unset ITEMENDINGTSZ
    unset ITEMORIGINALCREATIONTSZ
    unset ITEMPRICE
    unset ITEMCURRENCYCODE
    unset ITEMQUANTITY
    unset ITEMTAGS
    unset ITEMMATERIALS
    unset ITEMSHOPSECTIONID
    unset ITEMFEATUREDRANK
    unset ITEMSTATETSZ
    unset ITEMHUE
    unset ITEMSATURATION
    unset ITEMBRIGHTNESS
    unset ITEMISBLACKANDWHITE
    unset ITEMURL
    unset ITEMVIEWS
    unset ITEMNUMFAVORERS
    unset ITEMCATEGORYPATH

    unset ITEMPARAMS
    unset ITEMTYPE
}
