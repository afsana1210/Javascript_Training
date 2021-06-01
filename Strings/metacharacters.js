var s1="Is this all there is 100 1 10 210 Where";

//\d for digits and \D non-digit character
var pt=/\d/g;
var r2=s1.match(pt);
console.log(r2);//100 1 10 210

var p7=/\bth/g;
var beg_match=s1.search(p7);//search method give the position number 
console.log(beg_match);//3

var p6=/re\b/g;
var end_match=s1.search(p6);
console.log(end_match);//15

//\B return the first position where it is present, but NOT in the beginning of a word
var p1=/\Bhe/g;
var ends_match=s1.search(p1);
console.log(ends_match);//13



//unicode 
var p8= /\u0057/g;
var ch=s1.match(p8);
console.log(ch);//W

var p11=/10?/g;//? zero or more corrence of 1 and 0
var quantifier1=s1.match(p11);
console.log(quantifier1);//[ '10', '1', '10', '10' ]

var p12=/[^a-s]/gi;//characters not from a-s
var brackets=s1.match(p12);
console.log(brackets);

//Find a single character, except newline or line terminator(.)
var p13=/h.r/g;
var metacharacter=s1.match(p13);
console.log(metacharacter);//her her

//A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
var p14=/\w/gi;
var r=s1.match(p14);
console.log(r);

//non word character
var str="Give 100%!";
var p15=/\W/g;
var r1=str.match(p15);
console.log(r1);//[ ' ', '%', '!' ]

/*The \s metacharacter is used to find a whitespace character.

A whitespace character can be:

A space character
A tab character
A carriage return character
A new line character
A vertical tab character
A form feed character*/

//Do a global search for non-whitespace characters in a string:\S
var p6=/\s+/g;
var whitespace=s1.match(p6);
console.log(whitespace);

//Search for a NULL character in a string:
var s2="Search for a NULL.\0 character in a string:"
var p2=/\0/;
var null_char=s2.search(p2);
console.log(null_char);//18

//Search for a newline character in a string:
var s3="Search for a newline \n character in a string:";
var p4=/\n/;
var newline_char=s3.search(p4);
console.log(newline_char);//21

// do a global search for octal number 127 (W) in a string.
var p5=/\127/g;
var n=s1.match(p5);
console.log(n);//W

//global search for the hexadecimal number 57 (W) in a string
var p9=/\x57/g;
var oct_num=s1.match(p9);
console.log(oct_num);//W