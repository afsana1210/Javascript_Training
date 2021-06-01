var str="Please locate where 'locate' occurs!";
var len=str.length;

var firstoccurence=str.indexOf("locate");//return position number or index number
console.log(firstoccurence);

var lastoccurence=str.lastIndexOf("locate");//index number
console.log(lastoccurence);

var txtnotfound=str.indexOf("world");//string not found then return -1;both indexof and lastindexof
console.log(txtnotfound);

//The indexOf() method accepts a second parameter as the starting position for the search:
var s=str.indexOf("locate",15);
console.log(s);

//Remember that the lastIndexOf() method searches backwards, so position 15 means start the search at position 15, and search to the beginning.
var l=str.lastIndexOf("locate",15);
console.log(l);

var sr=str.search("locate");//return position  umber
console.log(sr);//7

var reg=str.search(/locate/g)