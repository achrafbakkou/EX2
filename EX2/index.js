// Write the script that displays today's date in the form: It is 02/02/2024
function today(){
    let day = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    alert(`it is: ${day}/${month}/${year}`)
}
today()

// Write a script to calculate the perimeter and area of a square.
function area(){
    let A = prompt("Enter side value = ");
    let ara = A*A;
    let per = 4 * A;
    alert(`area of this square is ${ara} and the parametre is = ${per}`);

}
area()
// Write a script to convert values given in Euros into Dirhams
function currency(){
    let mad= prompt("Money value in MAD : ");
    let R = mad/ 10.87;
    alert(mad+ " MAD to EUR is " +R.toFixed(2));
}
currency()

// Write the script to calculate in seconds a duration expressed in hours, minutes and second
let hours = +prompt("Hours : ");
let minutes = +prompt("Minutes : ");
let seond = +prompt("Seconds : ");
let Res = hours*3600 + minutes*60 + seond;
alert("the result is " + Res)

// Write a script that enters the number of a month (number between 1 and 12). Then 
// displays the number of days in this month. Leap years will not be taken into account.
const arr = ["Jan", "Feb", "March", "Apr", "May", "June", "July","Aug", "Sep", "Oct", "Nov", "Dec"];
let i = prompt("What month");
let m = i - 1;
if(i == 2){
    alert("this month is only 28days")
}
else if(i >12)
{
    alert("Month not found 404");
}
else if(i == 4 || i == 6 || i == 9 || i == 11){
    alert(`the month ${arr[m]} has 30days`);
}
else{
    alert(`the month ${arr[m]} has 31days`);
}

// Write a script that enters the average of a candidate and then displays whether this candidate is:
// failed (average less than 10)
// received (average between 10 and 12)
// received with honors (average greater than or equal to 12)
let av = prompt("Enter your Average");
if (av < 10)
{
    alert("FAILED");
}
else if(av >= 10 && av < 12)
{
    alert("Received");
}
else{
    alert("Received With Honor");
}
// Create a recommendation system that recommends the right movie based on the user's age
// If the user is under 13 years old (13 years old included) they will be shown “Lilo &Stitch" 
// If the user is over 13 years old and under 18 years old (strictly) they arewill display "Matrix" (I know it's a bit young)
// If the user is over 18 years old they will be shown “Evil Dead”

let age = prompt("Enter your Age");
if (age < 13)
{
    alert("Lilo &Stitch");
}
else if(age >= 13 && age < 18)
{
    alert("Matrix");
}
else{
    alert("Evil Dead");
}

// We want to know the sign of the product of two numbers without necessarily calculate their product.
let nmb = prompt("First number : ");
let nbr = prompt("Second number : ");
let T = nbr*nmb;
if(T > 0)
{
    alert(`the product of ${nmb} and ${nbr} is positive`);
}
else{
    alert(`the product of ${nmb} and ${nbr} is negative`);    
}

// Write the script which allows you to simulate a small calculator to carry out arithmetic calculation operations

let first = document.querySelector("#inp1");
let second = document.querySelector("#inp2");
let com = document.querySelector("span");
let result = document.querySelector("#inp3");
let add = document.getElementsByTagName("button")[0];
let min = document.getElementsByTagName("button")[1];
let pro = document.getElementsByTagName("button")[2];
let div = document.getElementsByTagName("button")[3];
function addi(){
    let n1 = first.value
    let n2 =second.value;
    let n3 = parseInt(n2);
    let n4 = parseInt(n1);
    result.value = n3+n4;
}
function mini(){
    let n1 = first.value
    let n2 =second.value;
    let n3 = parseInt(n2);
    let n4 = parseInt(n1);
    result.value = n3-n4;
}

function prod(){
    let n1 = first.value
    let n2 =second.value;
    let n3 = parseInt(n2);
    let n4 = parseInt(n1);
    result.value = n3*n4;
}

function divi(){
    let n1 = first.value
    let n2 =second.value;
    let n3 = parseInt(n2);
    let n4 = parseInt(n1);
    if(n2 == 0)
    {
        com.innerHTML = "Number B cant be 0";
    }
    else{
        result.value = (n3/n4).toFixed(2);
    }
}