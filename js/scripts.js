$(document).ready(function(){

$(".btn").click(function() {
    
event.preventDefault();  
    
var text = "";
var userNums = []
var strList = []
var userStr=""
var x=0

var userInput = parseInt($("input#number").val()) +1;
console.log(userInput)
//counts up to the user input, pushes the counter to the number list each time through the loop, and converts each number into a string, then adds it to a list of string "numbers"

for (i =0; i < userInput ; i++){
  userNums.push(i);
  userStr = userNums[i].toString();
  strList.push(userStr)
}
console.log(strList)
//This first part of the loop checks which "number", or string you are currently on in the list and records that as the x variable.

for(c=0; c<userInput; c++ ){
  x=strList[c]

 // the second part of the loop is another loop that checks each position in x, or which individual digit you are on in the x string or "number". For example, if the x number has a three in it, it changes that number in the list of strings (numbers) to the string "I'm sorry, Dave. I'm afraid I can't do that.". (c2 goes through each digit inside the number until it is finished with the full length of the number.)

for(c2=0; c2<x.length ; c2++ ){
  if(x[c2].includes("3") ){
  strList[c]="I'm sorry, Dave. I'm afraid I can't do that."
    }
    else if(x[c2]==='2'){
    strList[c]="boop"
    }
    else if(x[c2]==='1'){
    strList[c]="beep"
    }
  }
} 
$("#output").text(strList);
  });
});