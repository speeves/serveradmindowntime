
window    = this;     // the global object
window.IS = [];       // the input set
window.RS = [];       // the result set
window.$_ = {};       // the current element index
window.$$ = {};       // the current element

// Underscore.js 1.1.6
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.6";var h=b.each=b.forEach=function(a,c,d){if(a!=null)if(s&&a.forEach===s)a.forEach(c,d);else if(b.isNumber(a.length))for(var e=
0,k=a.length;e<k;e++){if(c.call(d,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(d,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){!k&&b===0?(d=a,k=!0):d=c.call(e,d,a,b,f)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e=c.call(d,a,b,f))return m});return e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=
function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return a;if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));
a[a.length]=d;return a},[])};b.without=function(a){var c=f.call(arguments,1);return b.filter(a,function(a){return!b.include(c,a)})};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),
e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/
d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};
b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,
b.identity)};b.functions=b.methods=function(a){return b.filter(b.keys(a),function(c){return b.isFunction(a[c])}).sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=
typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;
for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};
b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=
0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||
null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort",
"splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();

(function() {

/*
Copyright Jason E. Smith 2008 Licensed under the Apache License, Version 2.0 (the "License");
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
 
 
/*
* CREDITS:
* Thanks to Kris Zyp from SitePen for contributing his source for
* a standalone port of JSONQuery (from the dojox.json.query module).
*
* OVERVIEW:
* JSONQuery.js is a standalone port of the dojox.json.query module. It is intended as
* a dropin solution with zero dependencies. JSONQuery is intended to succeed and improve upon
* the JSONPath api (http://goessner.net/articles/JsonPath/) which offers rich powerful
* querying capabilities similar to those of XQuery.
*
* EXAMPLES / USAGE:
* see http://www.sitepen.com/blog/2008/07/16/jsonquery-data-querying-beyond-jsonpath/
*
*     *Ripped from original source.
*         JSONQuery(queryString,object)
        and
        JSONQuery(queryString)(object)
        always return identical results. The first one immediately evaluates, the second one returns a
        function that then evaluates the object.
      
      example:
        JSONQuery("foo",{foo:"bar"})
        This will return "bar".
    
      example:
        evaluator = JSONQuery("?foo='bar'&rating>3");
        This creates a function that finds all the objects in an array with a property
        foo that is equals to "bar" and with a rating property with a value greater
        than 3.
        evaluator([{foo:"bar",rating:4},{foo:"baz",rating:2}])
        This returns:
        {foo:"bar",rating:4}
      
      example:
        evaluator = JSONQuery("$[?price<15.00][\rating][0:10]");
        This finds objects in array with a price less than 15.00 and sorts then
        by rating, highest rated first, and returns the first ten items in from this
        filtered and sorted list.
        
        
	example:      
		var data = {customers:[
			{name:"Susan", purchases:29},
			{name:"Kim", purchases:150}, 
			{name:"Jake", purchases:27}
		]};
		
		var results = json.JSONQuery("$.customers[?purchases > 21 & name='Jake'][\\purchases]",data);
		results 
		
		returns customers sorted by higest number of purchases to lowest.

*/



    function map(arr, fun /*, thisp*/){
        var len = arr.length;
        if (typeof fun != "function")
            throw new TypeError();
        
        var res = new Array(len);
        var thisp = arguments[2];
        for (var i = 0; i < len; i++) {
            if (i in arr)
                res[i] = fun.call(thisp, arr[i], i, arr);
        }
        
        return res;
    }
 
   function filter(arr, fun /*, thisp*/){
        var len = arr.length;
        if (typeof fun != "function")
            throw new TypeError();
        
        var res = new Array();
        var thisp = arguments[2];
        for (var i = 0; i < len; i++) {
            if (i in arr) {
                var val = arr[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, arr))
                    res.push(val);
            }
        }
        
        return res;
    };
 
 
  function slice(obj,start,end,step){
    // handles slice operations: [3:6:2]
    var len=obj.length,results = [];
    end = end || len;
    start = (start < 0) ? Math.max(0,start+len) : Math.min(len,start);
    end = (end < 0) ? Math.max(0,end+len) : Math.min(len,end);
     for(var i=start; i<end; i+=step){
       results.push(obj[i]);
     }
    return results;
  }
  function expand(obj,name){
    // handles ..name, .*, [*], [val1,val2], [val]
    // name can be a property to search for, undefined for full recursive, or an array for picking by index
    var results = [];
    function walk(obj){
      if(name){
        if(name===true && !(obj instanceof Array)){
          //recursive object search
          results.push(obj);
        }else if(obj[name]){
          // found the name, add to our results
          results.push(obj[name]);
        }
      }
      for(var i in obj){
        var val = obj[i];
        if(!name){
          // if we don't have a name we are just getting all the properties values (.* or [*])
          results.push(val);
        }else if(val && typeof val == 'object'){
          
          walk(val);
        }
      }
    }
    if(name instanceof Array){
      // this is called when multiple items are in the brackets: [3,4,5]
      if(name.length==1){
        // this can happen as a result of the parser becoming confused about commas
        // in the brackets like [@.func(4,2)]. Fixing the parser would require recursive
        // analsys, very expensive, but this fixes the problem nicely.
        return obj[name[0]];
      }
      for(var i = 0; i < name.length; i++){
        results.push(obj[name[i]]);
      }
    }else{
      // otherwise we expanding
      walk(obj);
    }
    return results;
  }
  
  function distinctFilter(array, callback){
    // does the filter with removal of duplicates in O(n)
    var outArr = [];
    var primitives = {};
    for(var i=0,l=array.length; i<l; ++i){
      var value = array[i];
      if(callback(value, i, array)){
        if(!primitives[JSON.stringify(value)]){
          // with primitives we prevent duplicates by putting it in a map
          primitives[JSON.stringify(value)] = true;
          outArr.push(value);
        }
      }
    }
    for(i=0,l=outArr.length; i<l; ++i){
      // cleanup the marker properties
      if(outArr[i]){
        delete outArr[i].__included;
      }
    }
    return outArr;
  }
  window.uniq = function(array) {
    return distinctFilter(array, function() { return true; });
  };
  var JSONQuery = function(/*String*/query,/*Object?*/obj){
    // summary:
    //     Performs a JSONQuery on the provided object and returns the results.
    //     If no object is provided (just a query), it returns a "compiled" function that evaluates objects
    //     according to the provided query.
    // query:
    //     Query string
    //   obj:
    //     Target of the JSONQuery
    //
    //  description:
    //    JSONQuery provides a comprehensive set of data querying tools including filtering,
    //    recursive search, sorting, mapping, range selection, and powerful expressions with
    //    wildcard string comparisons and various operators. JSONQuery generally supersets
    //     JSONPath and provides syntax that matches and behaves like JavaScript where
    //     possible.
    //
    //    JSONQuery evaluations begin with the provided object, which can referenced with
    //     $. From
    //     the starting object, various operators can be successively applied, each operating
    //     on the result of the last operation.
    //
    //     Supported Operators:
    //     --------------------
    //    * .property - This will return the provided property of the object, behaving exactly
    //     like JavaScript.
    //     * [expression] - This returns the property name/index defined by the evaluation of
    //     the provided expression, behaving exactly like JavaScript.
    //    * [?expression] - This will perform a filter operation on an array, returning all the
    //     items in an array that match the provided expression. This operator does not
    //    need to be in brackets, you can simply use ?expression, but since it does not
    //    have any containment, no operators can be used afterwards when used
    //     without brackets.
    //    * [^?expression] - This will perform a distinct filter operation on an array. This behaves
    //    as [?expression] except that it will remove any duplicate values/objects from the
    //    result set.
    //     * [/expression], [\expression], [/expression, /expression] - This performs a sort
    //     operation on an array, with sort based on the provide expression. Multiple comma delimited sort
    //     expressions can be provided for multiple sort orders (first being highest priority). /
    //    indicates ascending order and \ indicates descending order
    //     * [=expression] - This performs a map operation on an array, creating a new array
    //    with each item being the evaluation of the expression for each item in the source array.
    //    * [start:end:step] - This performs an array slice/range operation, returning the elements
    //    from the optional start index to the optional end index, stepping by the optional step number.
    //     * [expr,expr] - This a union operator, returning an array of all the property/index values from
    //     the evaluation of the comma delimited expressions.
    //     * .* or [*] - This returns the values of all the properties of the current object.
    //     * $ - This is the root object, If a JSONQuery expression does not being with a $,
    //     it will be auto-inserted at the beginning.
    //     * @ - This is the current object in filter, sort, and map expressions. This is generally
    //     not necessary, names are auto-converted to property references of the current object
    //     in expressions.
    //     *  ..property - Performs a recursive search for the given property name, returning
    //     an array of all values with such a property name in the current object and any subobjects
    //     * expr = expr - Performs a comparison (like JS's ==). When comparing to
    //     a string, the comparison string may contain wildcards * (matches any number of
    //     characters) and ? (matches any single character).
    //     * expr ~ expr - Performs a string comparison with case insensitivity.
    //    * ..[?expression] - This will perform a deep search filter operation on all the objects and
    //     subobjects of the current data. Rather than only searching an array, this will search
    //     property values, arrays, and their children.
    //    * $1,$2,$3, etc. - These are references to extra parameters passed to the query
    //    function or the evaluator function.
    //    * +, -, /, *, &, |, %, (, ), <, >, <=, >=, != - These operators behave just as they do
    //     in JavaScript.
    //    
    //  
    //  
    //   |  dojox.json.query(queryString,object)
    //     and
    //   |  dojox.json.query(queryString)(object)
    //     always return identical results. The first one immediately evaluates, the second one returns a
    //     function that then evaluates the object.
    //
    //   example:
    //   |  dojox.json.query("foo",{foo:"bar"})
    //     This will return "bar".
    //
    //  example:
    //  |  evaluator = dojox.json.query("?foo='bar'&rating>3");
    //    This creates a function that finds all the objects in an array with a property
    //    foo that is equals to "bar" and with a rating property with a value greater
    //    than 3.
    //  |  evaluator([{foo:"bar",rating:4},{foo:"baz",rating:2}])
    //     This returns:
    //   |  {foo:"bar",rating:4}
    //
    //  example:
    //   |  evaluator = dojox.json.query("$[?price<15.00][\rating][0:10]");
    //      This finds objects in array with a price less than 15.00 and sorts then
    //     by rating, highest rated first, and returns the first ten items in from this
    //     filtered and sorted list.
    tokens = [];
    var depth = 0;  
    var str = [];
    query = query.replace(/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'|[\[\]]/g,function(t){
      depth += t == '[' ? 1 : t == ']' ? -1 : 0; // keep track of bracket depth
      return (t == ']' && depth > 0) ? '`]' : // we mark all the inner brackets as skippable
          (t.charAt(0) == '"' || t.charAt(0) == "'") ? "`" + (str.push(t) - 1) :// and replace all the strings
            t;
    });
    var prefix = '';
    function call(name){
      // creates a function call and puts the expression so far in a parameter for a call
      prefix = name + "(" + prefix;
    }
    function makeRegex(t,a,b,c,d){
      // creates a regular expression matcher for when wildcards and ignore case is used
      return str[d].match(/[\*\?]/) || c == '~' ?
          "/^" + str[d].substring(1,str[d].length-1).replace(/\\([btnfr\\"'])|([^\w\*\?])/g,"\\$1$2").replace(/([\*\?])/g,".$1") + (c == '~' ? '$/i' : '$/') + ".test(" + a + ")" :
          t;
    }
    query.replace(/(\]|\)|push|pop|shift|splice|sort|reverse)\s*\(/,function(){
      throw new Error("Unsafe function call");
    });
    
    query = query.replace(/([^=]=)([^=])/g,"$1=$2"). // change the equals to comparisons
      replace(/@|(\.\s*)?[a-zA-Z\$_]+(\s*:)?/g,function(t){
        return t.charAt(0) == '.' ? t : // leave .prop alone
          t == '@' ? "$obj" :// the reference to the current object
          (t.match(/:|^(\$|Math|true|false|null)$/) ? "" : "$obj.") + t; // plain names should be properties of root... unless they are a label in object initializer
      }).
      replace(/\.?\.?\[(`\]|[^\]])*\]|\?.*|\.\.([\w\$_]+)|\.\*/g,function(t,a,b){
        var oper = t.match(/^\.?\.?(\[\s*\^?\?|\^?\?|\[\s*==)(.*?)\]?$/); // [?expr] and ?expr and [=expr and =expr
        if(oper){
          var prefix = '';
          if(t.match(/^\./)){
            // recursive object search
            call("expand");
            prefix = ",true)";
          }
          call(oper[1].match(/\=/) ? "map" : oper[1].match(/\^/) ? "distinctFilter" : "filter");
          return prefix + ",function($obj){return " + oper[2] + "})";
        }
        oper = t.match(/^\[\s*([\/\\].*)\]/); // [/sortexpr,\sortexpr]
        if(oper){
          // make a copy of the array and then sort it using the sorting expression
          return ".concat().sort(function(a,b){" + oper[1].replace(/\s*,?\s*([\/\\])\s*([^,\\\/]+)/g,function(t,a,b){
              return "var av= " + b.replace(/\$obj/,"a") + ",bv= " + b.replace(/\$obj/,"b") + // FIXME: Should check to make sure the $obj token isn't followed by characters
                  ";if(av>bv||bv==null){return " + (a== "/" ? 1 : -1) +";}\n" +
                  "if(bv>av||av==null){return " + (a== "/" ? -1 : 1) +";}\n";
          }) + "})";
        }
        oper = t.match(/^\[(-?[0-9]*):(-?[0-9]*):?(-?[0-9]*)\]/); // slice [0:3]
        if(oper){
          call("slice");
          return "," + (oper[1] || 0) + "," + (oper[2] || 0) + "," + (oper[3] || 1) + ")";
        }
        if(t.match(/^\.\.|\.\*|\[\s*\*\s*\]|,/)){ // ..prop and [*]
          call("expand");
          return (t.charAt(1) == '.' ?
              ",'" + b + "'" : // ..prop
                t.match(/,/) ?
                  "," + t : // [prop1,prop2]
                  "") + ")"; // [*]
        }
        return t;
      }).
      replace(/(\$obj\s*(\.\s*[\w_$]+\s*)*)(==|~)\s*`([0-9]+)/g,makeRegex). // create regex matching
      replace(/`([0-9]+)\s*(==|~)\s*(\$obj(\s*\.\s*[\w_$]+)*)/g,function(t,a,b,c,d){ // and do it for reverse =
        return makeRegex(t,c,d,b,a);
      });
    query = prefix + (query.charAt(0) == '$' ? "" : "$") + query.replace(/`([0-9]+|\])/g,function(t,a){
      //restore the strings
      return a == ']' ? ']' : str[a];
    });
    // create a function within this scope (so it can use expand and slice)
    
    var executor = eval("1&&function($,$1,$2,$3,$4,$5,$6,$7,$8,$9){var $obj=$;return " + query + "}");
    for(var i = 0;i<arguments.length-1;i++){
      arguments[i] = arguments[i+1];
    }
    return obj ? executor.apply(this,arguments) : executor;
  };
  
  
  if(typeof namespace == "function"){
  	namespace("json::JSONQuery", JSONQuery);
  }
  else {
  	window["JSONQuery"] = JSONQuery;
  }
})();

/*
    http://www.JSON.org/json2.js
    2009-04-16

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html

    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the object holding the key.

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*jslint evil: true */

/*global JSON */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/

// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    JSON = {};
}
(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z';
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

(function(p) {
  var doPrint = function() {
    var args  = Array.prototype.slice.call(arguments);
    var type  = args.shift();
    var input = args.join(" ");
    var lines = input.split("\n");
    for (var i in lines)
      p(type, lines[i]);
  };
  var doJsonPrint = function() {
    var args  = Array.prototype.slice.call(arguments);
    var type  = args.shift();
    if (args.length > 0) {
      args = args.length > 1 ? args : args[0];
      var ret  = typeof(args) == "string" ? args : json(args);
      doPrint(type, ret);
    }
  };
  window.Q = function() {
    try {
      var ret = JSONQuery.apply(window, arguments);
      ret.length;
      return ret;
    } catch (e) {
      err("jsawk: JSONQuery parse error: '"+arguments[0]+"'");
      quit(4);
    }
  };
  window.out = function() {
    var args  = Array.prototype.slice.call(arguments);
    args.unshift("OUT:");
    doJsonPrint.apply(window, args);
  };
  window.err = function() {
    var args  = Array.prototype.slice.call(arguments);
    args.unshift("ERR:");
    doJsonPrint.apply(window, args);
  };
  window.alert = p;
  window.doJson = function(input) {
    if (typeof input !== "string") {
      return input;
    } else {
      input = input.replace(/\s*$/,"");
      if (!input.length) {
        return {};
      } else {
        try {
          return eval("("+input+")");
        } catch (e) {
          err("jsawk: JSON parse error: '"+input+"'");
          quit(2);
        }
      }
    }
  };
  window.doCall = function(fun, obj) {
    try {
      return fun.call(obj);
    } catch (e) {
      err("jsawk: js error: "+e);
      quit(3);
    }
  };
  window.makeFilter = function(fun) {
    try {
      return eval("(function() { "+fun+"; return this })");
    } catch (e) {
      err("jsawk: script parse error: '"+fun+"'");
      quit(3);
    }
  };
  window.json = function() {
    try {
      return JSON.stringify.apply(window, arguments);
    } catch (e) {
      err("jsawk: JSON stringify error: "+e);
      quit(5);
    }
  };
  window.get = function() {
    return $$ = IS[++$_];
  };
  window.put = function(record) {
    IS = IS.slice(0, $_+1).concat([record]).concat(IS.slice($_+1));
  };
  window.forEach = function(ary, fun) {
    fun = eval("function(index,item) { "+fun+"; }");
    for (var i=0; i<ary.length; i++) {
      try {
        fun.call(ary[i], i, ary[i]);
      } catch (e) {
        err("jsawk: js error: "+e);
        quit(3);
      }
    }
  };
})(window.print);

(function(argv) {
  argv = Array.prototype.slice.call(argv);

  var inputLines = argv.shift();

  var usage = function() {
    err("Usage: jsq [-n] [-f jsfile1.js]* [-q jsonquery] "+
        "[-b script] \\\n"+
        "           [-a script] [-v NAME=VALUE] [script]");
    quit(1);
  };

  var fun = "";
  var noprint = false;
  var libs    = [];
  var befores = [];
  var afters  = [];
  var queries = [];
  var i,j,k,l,m,n;

  var arg;

  while (arg = argv.shift()) {
    switch(arg) {
      case "-h":
        usage();
        break;
      case "-n":
        noprint = true;
        break;
      case "-q":
        if (argv.length < 1) usage();
        queries.push(argv.shift());
        break;
      case "-f":
        if (argv.length < 1) usage();
        libs.push(argv.shift());
        break;
      case "-b":
        if (argv.length < 1) usage();
        befores.push(makeFilter(argv.shift()));
        break;
      case "-a":
        if (argv.length < 1) usage();
        afters.push(makeFilter(argv.shift()));
        break;
      case "-v":
        if (argv.length < 1) usage();
        var tmp = argv.shift();
        var key = tmp.replace(/=.*$/, "");
        var val = tmp.replace(/^[^=]+=/, "");
        window[key] = val;
        break;
      default:
        fun = arg;
    }
  }

  var input="";

  for (var i=0; i<inputLines; i++) {
    var line=readline();  
    input += (line ? line : "");  
    input += "\n";  
  }  

  var wrapped;

  IS      = doJson(input);
  wrapped = !(IS instanceof Array);

  if (wrapped)
    IS = [ IS ];

  for (i in libs)
    load(libs[i]);

  var f = makeFilter(fun);

  for (i in queries)
    IS = Q(queries[i], IS);

  $_ = -1;
  $$ = IS;

  for (i in befores)
    IS = doCall(befores[i], IS);

  RS = [];

  for ($_=0; $_<IS.length; $_++) {
    $$ = IS[$_]
    var tmp = doCall(f, $$);
    if (tmp != null) RS.push(tmp);
  }

  $_ = -1;
  $$ = RS;

  for (i in afters)
    RS = doCall(afters[i], RS);

  if (wrapped)
    RS = RS.pop();

  if (!noprint)
    out(RS);
})(arguments);

