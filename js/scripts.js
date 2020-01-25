$(document).ready(function(){



var userInput = 25
var userNums = []
var userNum = [];
var newTest = []
var test =[]
var res = []
var separateNums =[]
var output = []
var numPair1 =[]
var numPair2 =[]
//this grabs the user inputted number and count up to the user number from 10
var stringNumSolid =[]
for (i =10; i < userInput ; i++){
  
  
  
  
  userNums.push(i);
}

console.log(userNums)
    

//this takes the numbers and converts them to one string:

userNums.forEach(function(num){
      
     test.push(num);
        stringNums = test.toString()
      
        stringNumSolid = stringNums.split(',').join('');
        //result = Math.max([i], [i]);
     
    });
      
      console.log(stringNumSolid)
      //this takes the string and separates the numbers:
      var number = stringNumSolid,
      outputs = [],
      sNumber = number.toString();
  
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }
  
     //here are the individual numbers separated: 
  console.log(output)
      

//here is where we get the first two numbers:

  numPair1 = output.shift();

console.log(numPair1)
 
numPair2 = output.shift();

console.log(numPair2)
result = Math.max(numPair1, numPair2);
      console.log(result)
   //this will be used to replace the numbers with words: 
      var mapObj = {
        1:"beep",
        2:"boop",
        3:"sry"
     };
     res = stringNums.replace(/1|2|3/gi, function(matched){
       return mapObj[matched];
     });
     
     
     
     
      console.log(res)

   

   //this will be used to find the greater of the two numbers once isolated
  //result = Math.max(5, 6);











});
