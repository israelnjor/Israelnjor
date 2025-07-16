let name =prompt("Hello custormer Please what is your name?");
name = String(name)

let age = prompt("Hello " + name + " and Welcome: \n\nPlease how old are you:");
age = Number(age);

if (age <= 12 | age >= 65) {
    alert(name + " You are qualified for a Discounted ticket");
} 
    else alert( "Masa pay Full price");
