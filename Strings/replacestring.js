//The replace() method does not change the string it is called on. It returns a new string.
var str="Please visit Microsoft! Microsoft";
var replacedstring=str.replace("Microsoft","windows");
console.log(replacedstring);

//By default, the replace() method replaces only the first match:
var reg=str.replace(/Microsoft/i,"windows");//i is used for case insensitive.
console.log(reg);

//To replace all matches, use a regular expression with a /g flag (global match):
var globalmatch=str.replace(/Microsoft/g,"windows");
console.log(globalmatch);

//global match and case insensitve
var globalInsensitivematch=str.replace(/microsoft/gi,"facebook");
console.log(globalInsensitivematch)

