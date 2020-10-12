"use strict";

var restart= document.addEventListener('DOMContentLoaded', () =>{ 
    
var winning_combinations = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
 ]
const player_x = 'X';
const player_o = 'O';
let turn= 0;
let lastClicked;

var s = document.getElementById("board").children;
var i;
for(i = 0; i < s.length; i++)
  {
     s[i].setAttribute("class", "square");
     s[i].addEventListener('click', clickOutcome, {once:true});
     s[i].addEventListener('mouseover', hoverTask)
     s[i].addEventListener('mouseout', noHover);
     s[i].addEventListener('click', getWinner)
    
     }
     
     const winnersBoard= ['','','','','','','','','']

   
     const squareArray = Array.from(s)
    
     function clickOutcome(e){
      
    
    const index = squareArray.indexOf(e.target)
    
      const currentPlayer= turn ? player_o : player_x
     
     if (turn == 0){
        e.target.innerHTML= player_x;
        e.target.classList.add ("X");
        lastClicked= player_x;
       
       
      } else{
        if (lastClicked==player_x){
          e.target.innerHTML= player_o;
          e.target.classList.add("O");
          lastClicked= player_o;
         
        }else{
          e.target.innerHTML= player_x;
          e.target.classList.add("X");
          lastClicked= player_x;
         
        }
      }
     
      turn +=1;
      getWinner()
      
      } 
      function hoverTask(e){
        e.target.classList.add("hover");
            
          } 
      function noHover(e){
         e.target.classList.remove("hover");
         }
 
         const status= document.getElementById("status")     
 
         function getWinner(){
  for(i=0; i < winning_combinations.length; i++) {
     if (squareArray[winning_combinations[i][0]].innerHTML=="X" && squareArray[winning_combinations[i][1]].innerHTML=="X" && 
     squareArray[winning_combinations[i][2]].innerHTML=="X") {
       status.innerHTML= "Congratulations! X is the Winner!"
       status.setAttribute("class","you-won")
       }else if (squareArray[winning_combinations[i][0]].innerHTML=="O" && squareArray[winning_combinations[i][1]].innerHTML=="O" && 
       squareArray[winning_combinations[i][2]].innerHTML=="O"){
          status.innerHTML= "Congratulations! O is the Winner!"
          status.setAttribute("class","you-won")
       }

    }}
  var button= document.getElementsByClassName("btn")[0];
  button.addEventListener('click', game);
    function game(){
      for (i=0; i<squareArray.length; i++){
        squareArray[i].innerHTML="";
        status.classList.remove("you-won");
        status.innerHTML="Move your mouse over a square and click to play an X or an O."
        restart;
        
       }
     
      }
      
      })
