// alert("hello World")


//First Assignment


var fullName = prompt("First Name") +prompt("Last Name");


var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");


var fullName = firstName + " " + lastName 

document.writeln("Wellcome to ", fullName)

alert("Wellcome to",fullName)

console.log(fullName)


//Second Assignment

var phone = prompt("Tell me Your Favorite Mobile phone")
var model = prompt("Tell me Your Mobile phone Model")

var fullNameOfPhone = phone + " " + model 

document.writeln("My Favorite phone is ", fullNameOfPhone, "Length Of the String is :",fullNameOfPhone.length)


// Third Assignment

var nationality = "Pakistani"

document.writeln("String:",nationality)

console.log(nationality.indexOf("n"))

document.writeln(nationality.indexOf("n"))


// Fourth Assignment


var letter = "Hello World"

document.writeln("String:",letter)
document.writeln( "Last Index oF ", "I:" , letter.lastIndexOf("l"))


// Fifth Assignment 

document.writeln("String:",nationality)
document.writeln("Character at index ",nationality.indexOf("i"),": i")



// Sixth Assgnment 




// Seventh Assgnment


var city = "Hyderabad"

document.writeln("City:",city)

document.writeln("After replacement:",city.replace("Hyder","Islam"))


// Eight Assignment 


var message = "Ali and Sami are best friends They play cricket and football togehter"


document.writeln(message.replaceAll("and","&"))


// Ninth Assignment

var value = "472"
var valuereslut = value.toString()

document.writeln("Value ",valuereslut)
document.writeln("Type : String")
document.writeln("Value :",value)
document.writeln("Type:number")

document.writeln("Value")


// Tenth Assignment


let user = prompt("Enter Your Name")

document.writeln("User input:",user)
document.writeln("Upper Case:",user.toUpperCase())


// Eleventh Assignment


let userInput2 = prompt("Enter A string")

let titleCase = userInput2.charAt("0").toUpperCase() + userInput2.slice(1).toLowerCase()

document.writeln("Title Case:",titleCase)


// twelve Assignment

let num = 35.56;

let result = num.toString().replace(".","");


document.writeln("Number is :",num)
document.writeln("Result:",result)

// thirteen Assignment

let menu = [ "cake","apple pie","cookie","chips","patties"]

let usermunu = prompt("Welcome to ABS Bakery What do you want to order sir/ma'm?")

let found = false    //flag

for (let i=0; i < menu.length; i++){
    if (menu[i] === usermunu.toLowerCase() ) {
        document.writeln(usermunu," is available at index " + i + " in our bakery")
        found=true
        break;
        
    } 
}   if(!found){
    document.writeln("We are Really sorry for this " + usermunu + " is not available")
}



/// Sixteen Asssignment 

var university = "University of Karachi";

var universityArray = university.split("");

for(var i = 0 ; i < universityArray.length; i++){
    document.writeln(universityArray[i] + "<br>");
}


// Seventeen Assignment

var userInput = prompt("write a string")

var newuser = userInput[userInput.length-1]

document.weitein(newuser)


// Eighteen Assignment

var text = "the quick brown fox jumps over the lazy dog"
var text2 = text.split("the")

document.writeln(`Text : ${text} <br>`)
document.writeln(`There are ${text2.length-1} occurrence(s) of the word "the`)
