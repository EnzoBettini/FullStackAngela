//class 85
var userName = prompt("What's your name?");
var firstLetter = userName.slice(0, 1);
var completeName = userName.slice(1);
alert("Hello, " + firstLetter.toUpperCase() + completeName.toLowerCase());

//simplified version
var userName = prompt("What's your name?");
alert("Hello, " + userName[0].toUpperCase() + userName.slice(1).toLowerCase());
