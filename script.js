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

// Random Numbers
const btnRoll = document.getElementById("btnRoll");
const lblRoll = document.getElementById("lblRandom");
let max = 10;
let min = 1;
let randomNumbers;

btnRoll.onclick=function(){
    randomNumbers= Math.floor(Math.random() * max)+min;
    lblRoll.textContent=randomNumbers;
}

// if statement

const myH3 = document.getElementById("myH3");
const myH2 = document.getElementById("myH2");
const btnIf = document.getElementById("btnIf");
const maleCheck = document.getElementById("maleCheck")
const femaleCheck = document.getElementById("femaleCheck")

const age = 19;
btnIf.onclick= function(){
    // if (age<18){
    //     myH3.style.color="Red";
    //     myH3.textContent="You are not older to visit this site web";
    //  } else {
    //     myH3.style.color="green";
    //     myH3.textContent="You can visit this web site !! Welcome !!"
    //  }
     if(maleCheck.checked){
        myH2.textContent="you're male"
     } else if (femaleCheck.checked){
        myH2.textContent="you're female"
     }else{
        myH2.textContent="hahaha i don't know"

     }
  age <= 18 ? myH3.textContent="You are not older to visit this site web" :   myH3.textContent="You can visit this web site !! Welcome !!";



    }
