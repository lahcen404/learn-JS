// let players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
// players.push("lahcen");
// players.pop(); // remove the last element
// players.shift(); // remove the first element
// players.unshift("Messi"); // add an element to the beginning
// players.splice(1, 2); // remove 1 element from index 2
// players.splice(1, 0, "Ronaldo", "Neymar"); // add 2 elements from index 1
// let at = players.at(1);
// console.log(players); 
// console.log(at); 
// document.getElementById("myP").textContent=("Hello this is the Paragraph");
// // let age = window.prompt("What's ur age !!!")
// // console.log(age)
// let inpt;
// let input = document.getElementById("myInput");
// let btn=document.getElementById("myBtn");
// btn.onclick = function(){
// inpt=input.value;
// console.log(inpt)
// document.getElementById("myP").textContent=(` Hello ${inpt}`);


// }
let H1 = document.getElementById("myH1");
let btnReset = document.getElementById("btnReset");
let btnPlus = document.getElementById("btn+");
let btnMoins = document.getElementById("btn-");
let count =0;

btnReset.onclick=function(){
    
count=0;
myH1.textContent=count;
}
btnPlus.onclick=function(){
    myH1.style.color="Red";
    count++;
    myH1.textContent=count;
}
btnMoins.onclick=function(){
    myH1.style.color="Green";
    count--;
    myH1.textContent=count;
}
