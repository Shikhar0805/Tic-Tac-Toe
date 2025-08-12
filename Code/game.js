// For Dark and Light Modes
let mode=document.querySelector("#mode button");
let nav = document.querySelector("#nav");
let text=document.querySelectorAll(".text1");
let reset=document.querySelector("#reset");
let border=document.querySelectorAll(".bb,.br,.bl,.bt");
let start=document.querySelector(".start");
let score1=document.querySelector("#s1");
let score2=document.querySelector("#s2");
mode.addEventListener("click",()=>
{
let current=mode.innerText;
if(current=="Dark")
{
 text.forEach((element)=>
{
element.style.color="White";
}); 
    border.forEach((element)=>
    {
       element.style.borderColor="White";
    })  
    nav.style.backgroundColor="Black";
    nav.style.borderColor="White";
    document.body.style.backgroundColor="Black";
    document.body.style.color="White";
    mode.innerText="Light";
    mode.style.backgroundColor="White";
    mode.style.color="Black";
    document.body.style.borderColor="White";
    reset.style.backgroundColor="White";
    reset.style.color="Black";
    start.style.backgroundColor="White";
    start.style.color="Black";
}
else{
    text.forEach((element)=>
        {
        element.style.color="Black";
        });
        border.forEach((element)=>
            {
               element.style.borderColor="Black";
            })  
    nav.style.backgroundColor="White";
    nav.style.borderColor="Black";
    document.body.style.backgroundColor="White";
    document.body.style.color="Black";
    mode.innerText="Dark";
    mode.style.backgroundColor="Black";
    mode.style.color="White";
    document.body.style.borderColor="Black";
    reset.style.backgroundColor="Black";
    reset.style.color="White";
    start.style.backgroundColor="Black";
    start.style.color="White";
}
}
);
// Logical Part
const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let a=0;
let b=0;
let s1 =document.querySelector("#s1");
let s2 =document.querySelector("#s2");
let player=document.querySelector("#player1");
let boxes=document.querySelectorAll(".box");
let turn="X";
boxes.forEach((box)=>
{
box.addEventListener(("click"),()=>
{
if(turn==="X")
{
    player.innerText="Player 2's Turn!!";
    box.innerText="X";
    turn="O"; 
}
else{
    player.innerText="Player 1's Turn!!";
box.innerText="O";
turn="X";
}
   box.style.pointerEvents="none";
   winner();
});
});

// Function to check winner
const winner=()=>{
for(i of wins)
 {
    let val1=boxes[i[0]].innerText; 
    let val2=boxes[i[1]].innerText;
    let val3=boxes[i[2]].innerText;
    if(val1!="" && val2!="" && val3!="")
  {
        if(val1==val2&& val2==val3)
   {
            if(val1=="X")
{
            player.innerText="Player 1 is Winner!!";
            s1.innerText= ++a;
            boxes.forEach((element)=>
    {
element.style.pointerEvents="none";
    });
}
        else
    {
    player.innerText="Player 2 is Winner!!";
    s2.innerText=++b;
    }
   }
  }
 }
}
start.addEventListener(("click"),()=>{
boxes.forEach((element)=>
{
element.innerText="";
turn="X";
let current=mode.innerText;
boxes.forEach((element)=>
    {
element.style.pointerEvents="initial";
});
});
});
reset.addEventListener("click",()=>
{
 score1.innerText="0";
 score2.innerText="0";
 a=0;
 b=0;
});