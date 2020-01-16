//Here is a collection of my scripts as I learn with no particular meaning//
document.write("Hello, World!<br>");
var X = "Learning how to use variables, sweet!<br>";
document.write(X);
var windowAlert = "This is my windows alert!";
alert(windowAlert);
document.write("\"Learning Javascript is fun\" he exclaimed.<br>");
document.write("Life is about taking chances," + " and the constant pursuit of knowledge.<br>");
var newString = "Life is good";
var anotherNewString = " when you\'re learning new things!<br>";
document.write(newString + anotherNewString);
var house = "House Mates:", first = "Greg", second = "Sarah", third = "Taylor", fourth = "Sammi";
var house = house.fontcolor("green");
var first = first.fontcolor("purple");
var second = second.fontcolor("blue");
var third = third.fontcolor("orange");
document.write(house);
document.write("<br>");
document.write(third);
document.write("<br>");
document.write(first);
document.write("<br>");
document.write(second);
document.write("<br>");
var family = "The Hartjens:", Dad = "Gary", Mom = "Julie", Sister = "Megan", Me = "Greg";
var family = family.fontcolor("green");
var Dad = Dad.fontcolor("blue");
var Mom = Mom.fontcolor("red");
var Sister = Sister.fontcolor("purple");
var Me = Me.fontcolor("green");
document.write(family);
document.write("<br>");
document.write(Dad);
document.write("<br>");
document.write(Mom);
document.write("<br>");
document.write(Sister);
document.write("<br>");
document.write(Me);
var reds = "The sunset was red."
var reds = reds.fontcolor("red");
document.write("<br>");
document.write(reds);
document.write("<br>");
document.write(3 + 3);
document.write("<br>");
var x = 3;
var y = 4;
document.write(x + y);
document.write("<br>");
document.write(x + 6);
document.write("<br>");
document.write(y + 89);

function practiceFunction() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("greenbutton").innerHTML = result;
}

function dateFunction() {
    document.getElementById("dateButton").innerHTML=Date();
}