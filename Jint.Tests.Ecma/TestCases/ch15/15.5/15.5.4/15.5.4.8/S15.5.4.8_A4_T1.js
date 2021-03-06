// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument.
 * Then Call ToString(searchString) and Call ToNumber(position)
 *
 * @path ch15/15.5/15.5.4/15.5.4.8/S15.5.4.8_A4_T1.js
 * @description Override toString and valueOf functions, valueOf throw exception
 */

var __obj = {toString:function(){return "\u0041B";}}
var __obj2 = {valueOf:function(){throw "intointeger";}}
var __str = {str__:"ABB\u0041BABAB"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    with(str__){
        try {
          var x = lastIndexOf(__obj, __obj2);
          $FAIL('#1: var x = lastIndexOf(__obj, __obj2) lead to throwing exception');
        } catch (e) {
          if (e!=="intointeger") {
            $ERROR('#1.1: Exception === "intointeger". Actual: '+e);
          }
        }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

