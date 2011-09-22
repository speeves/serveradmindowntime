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
# REcommerce Hack Day - Zappos api site search
# 
####################

DRIVERNAME="Zappos"
HOMEPAGEPIC="zappos2.jpg"
APIURL="http://api.zappos.com/Search"
APIPRODUCTURL="http://api.zappos.com/Product/id/"
ZAPPOSAPIKEY="MYAPIKEY"

performsearch()
{
    if [ "${I}" != "" ]; then
        ENCODEDITEMSEARCH=${I}
    else
        ENCODEDITEMSEARCH=$(echo $ITEMSEARCH | sed 's/ /-/g')        
    fi

    SEARCH=$(${WGETME} "${APIURL}?term=${ENCODEDITEMSEARCH}&key=${ZAPPOSAPIKEY}" ) 
    SEARCHJSON=$(echo $SEARCH | ${JSAWKME} 'return this')
}

printitemid()
{
    echo "Name:        ${ITEMPRODUCTNAME}"
    echo "OUR PRICE:   \$${ITEMPRICE} | MSRP: \$${ITEMORIGINALPRICE}"
    echo "Item #:      ${ITEMPRODUCTID}"
    echo "Url:         ${ITEMPRODUCTURL}"
}

printimage()
{
    ${WGETME} ${ITEMTHUMBNAILIMAGEURL} | convert - jpg:- | jp2a --colors -
}

printdescription()
{
    PRODUCTSEARCH=$( ${WGETME} "${APIPRODUCTURL}${ITEMPRODUCTID}?includes=[\"description\"]&key=${ZAPPOSAPIKEY}" )
    PRODUCTDESCR=$(echo $PRODUCTSEARCH | ${JSAWKME} 'return this.product[0].description')
    echo "${PRODUCTDESCR}" | html2text
}

saygoodbye()
{
    echo 
    echo "Thanks for visiting Zappos.com at http://www.zappos.com!"
    echo 
    echo "Goodbye!"
    echo 
    exit
}

setsearchresultcount()
{
    RESULTCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.totalResultCount")
}

setitemvariables()
{
    ITEMSTATUSCODE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.statusCode")

    ITEMSTYLEID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].styleId")
    ITEMPRICE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].price")
    ITEMORIGINALPRICE=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].originalPrice")
    ITEMPRODUCTURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].productUrl")
    ITEMCOLORID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].colorId")
    ITEMPRODUCTNAME=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].productName")
    ITEMBRANDNAME=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].brandName")
    ITEMTHUMBNAILIMAGEURL=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].thumbnailImageUrl")
    ITEMPERCENTOFF=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].percentOff")
    ITEMPRODUCTID=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.results[${ITER}].productId")

    ITEMTERM=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.term")
    ITEMCURRENTRESULTCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.currentResultCount")
    ITEMTOTALRESULTCOUNT=$(echo ${SEARCHJSON} | ${JSAWKME} "return this.totalResultCount")
}

unsetitemvariables()
{
    unset ITEMSTATUSCODE

    unset ITEMSTYLEID
    unset ITEMPRICE
    unset ITEMORIGINALPRICE
    unset ITEMPRODUCTURL
    unset ITEMCOLORID
    unset ITEMPRODUCTNAME
    unset ITEMBRANDNAME
    unset ITEMTHUMBNAILIMAGEURL
    unset ITEMPERCENTOFF
    unset ITEMPRODUCTID

    unset ITEMTERM
    unset ITEMCURRENTRESULTCOUNT
    unset ITEMTOTALRESULTCOUNT
}
