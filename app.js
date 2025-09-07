// Answer No. 1

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var fullName = [firstName + " " + lastName];

// alert("Hi, " + fullName + " Welcome");


// Answer No. 2

// var phoneModel = prompt("Enter your favourite phone full name with model");

// var modelLenght = phoneModel.length;


// document.write("My favourite phone is: " + phoneModel + "<br>");
// document.write("Length of String: " + modelLenght + "<br>");
// document.write("<br>");
// document.write("<br>");



// Answer No. 3

var word = "Pakistani";

document.write("<br>");

document.write("String: " + word + "<br>");
document.write("Index of 'n '" + word.indexOf("n") + "<br>");

document.write("<br>");

// Answer No. 4

var string = "Hello World"

document.write("String " + string + "<br>");
document.write("Last index of 'l': " + string.lastIndexOf("l"));

document.write("<br>");


// Answer No. 5

document.write("<br><br>");

var pak = "Pakistan"

document.write("String " + pak + "<br>");
document.write("Chart at index 3: " + pak.charAt(3));

document.write("<br><br>");

// Answer No. 7

var city = "Hyderabad"

document.write("City: " + city + "<br>");

var cityRep = city.replace("Hyder", "Islam");
document.write("After replacement: " + cityRep);
document.write("<br><br>");

// Answer No. 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Original message: " + message + "<br>");
document.write("<br><br>");
var messReplaced = message.replace(/and/g, "&");
document.write("Replaced message: " + messReplaced + "<br>");

document.write("<br><br>");

// Answer No. 9

var str = "472";

document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");


var str = "472";
var num = +str;

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

document.write("<br><br>");

// Answer No. 10

var userInput = prompt("Enter your input");

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + userInput.toUpperCase(userInput) + "<br>");
document.write("<br><br>");
document.write("<br><br>");

// Answer No. 11

var userInp = prompt("Enter your input");

document.write("User input: " + userInp + "<br>");

var titleCase = userInp.charAt(0).toUpperCase() + userInp.slice(1).toLowerCase();

document.write("title Case: " + titleCase + "<br>");

document.write("<br><br>");


// Answer No. 12

var num = 35.36;

document.write("Number: " + num + "<br>");

var result = num.toString().replace(".", "");

document.write("Result: " + result);


document.write("<br><br>");
document.write("<br><br>");


// Answer No. 13

var inputUser = prompt("Enter Your User Name");
var isValid = true;


for (var i = 0; i < inputUser.length; i++) {
    if (inputUser.charAt(i) === "@" || inputUser.charAt(i) === "!" || inputUser.charAt(i) === "," || inputUser.charAt(i) === ".") {
        alert("Enter valid username")
        isValid = false;
        break;
    }
}

if (isValid) {
    alert("Your username is valid")
}

// Answer No. 14

var a = ["cake", "apple pie", "cookie", "chips", "patties"]

var inputUsr = prompt("Welcome to ABC Bakery, What do you want to order Sir/Madam?");
inputUsr = inputUsr.toLowerCase();
var found = false;
var index = -1;

for (var i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() === inputUsr) {
        found = true;
        index = i;
        break;
    }
}
    if (found) {
        alert(inputUsr + " is available at index " + index + " in our bakery.");
    } else {
        alert("We are sorry. " + inputUsr + " is not available in our bakery.");
    }


// Answer No. 15



// Answer No. 16

var university = "University of Karachi";

var uniArray = university.split("")

for (var i = 0; i < uniArray.length; i++){
    document.write(uniArray[i] + "<br>");
}

document.write("<br><br>");


// Answer No. 17

var usersInput = prompt("Enter your input");

var lastChar = usersInput.charAt(usersInput.length -1);
document.write(lastChar);

