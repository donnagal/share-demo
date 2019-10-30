// ?1a=2&1b=3&1c=3&2a=3&2b=3&2c=3&3a=3&3b=3&3c=3&4a=3&4b=3&4c=3&5a=3&5b=3&5c=3&6a=3&6b=3&6c=3&timestamp=2019-oct-

var url_string = window.location.href
var url = new URL(url_string);

var a1 = url.searchParams.get("1a");
document.getElementById("text1a").innerHTML = a1;

var b1 = url.searchParams.get("1b");
document.getElementById("text1b").innerHTML = b1;

var c1 = url.searchParams.get("1c");
document.getElementById("text1c").innerHTML = c1;


var a2 = url.searchParams.get("2a");
document.getElementById("text2a").innerHTML = a2;

var b2 = url.searchParams.get("2b");
document.getElementById("text2b").innerHTML = b2;

var c2 = url.searchParams.get("2c");
document.getElementById("text2c").innerHTML = c2;

var a3 = url.searchParams.get("3a");
document.getElementById("text3a").innerHTML = a3;

var b3 = url.searchParams.get("3b");
document.getElementById("text3b").innerHTML = b3;

var c3 = url.searchParams.get("3c");
document.getElementById("text3c").innerHTML = c3;


var a4 = url.searchParams.get("4a");
document.getElementById("text4a").innerHTML = a4;

var b4 = url.searchParams.get("4b");
document.getElementById("text4b").innerHTML = b4;

var c4 = url.searchParams.get("4c");
document.getElementById("text4c").innerHTML = c4;


var a5 = url.searchParams.get("5a");
document.getElementById("text5a").innerHTML = a5;

var b5 = url.searchParams.get("5b");
document.getElementById("text5b").innerHTML = b5;

var c5 = url.searchParams.get("5c");
document.getElementById("text5c").innerHTML = c5;


var a6 = url.searchParams.get("6a");
document.getElementById("text6a").innerHTML = a6;

var b6 = url.searchParams.get("6b");
document.getElementById("text6b").innerHTML = b6;

var c6 = url.searchParams.get("6c");
document.getElementById("text6c").innerHTML = c6;


var dt = url.searchParams.get("timestamp");
document.getElementById("datetime").innerHTML = dt;



