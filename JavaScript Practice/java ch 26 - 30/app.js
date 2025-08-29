// alert("helooooooooooooo")


// first Assgnment

let user = +prompt("Put a Positive integer")

document.writeln(` number: ${user} <br>`)



// console.log(Math.round(user))

document.writeln( `round off value is:   ${Math.round(user)} <br> `)
document.writeln(` floor value is:   ${Math.floor(user)} <br> `)
document.writeln( `ceil value is:   ${Math.ceil(user)} <br> `)


// Second Assgnment 

let number = +prompt("Put a Negitve Value");

document.writeln(`number: ${number}<br>`);

document.writeln(` round of value : ${Math.round(number)} <br>`)

document.writeln(` floor value is:   ${Math.floor(number)} <br> `)

document.writeln( `ceil value is:   ${Math.ceil(number)} <br> `)

// Third Assignment 

let a = -4

document.writeln(`The absolute value of ${a} is ${Math.abs(a)} <br> `)


// Fourth Assignment 

let dice = Math.random()*10
let dice2 = Math.random()*10

document.writeln(`Value of the dice is :  ${dice.toFixed(0)} <br>`)
document.writeln(`Value of the dice is :  ${dice2.toFixed(0)} <br> `)

// Fifth Assgignment 

var new2 = Math.random()*10

if (Math.round(new2) > 5 ){
       document.writeln(`heads <br>`)
} 

var new3 = Math.random()*10

 if (Math.round(new3) < 5 ) {
    document.writeln(`Tails <br> `)
}



// Sixth Assgignment 

let randomnumber = Math.random()*100

document.writeln("random number between 1 and 100 :" , randomnumber.toFixed(0))



// Seven Assignment 


let userweight = +prompt("Enter your weight in killograms")

document.writeln("The weight of user is : " , userweight , " killograms")


// Eight Assignment 

var secretNumber = Math.random()*10

var userNumber = +prompt("Enter Number between 1 and 10 ")

if (secretNumber.toFixed(0) == userNumber){
    alert("Congratulations")
} else{
    alert("Try again!")
}