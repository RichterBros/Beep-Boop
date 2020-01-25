$(document).ready(function(){
var finalNumber =[]
var result =[]
var numberGreater = []
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
var userNumsClone = []
//this grabs the user inputted number and count up to the user number from 10
var stringNumSolid =[]
for (i =10; i < userInput ; i++){
  
  userNums.push(i);
}

console.log(userNums)
    

//this takes the numbers and converts them to a string:

userNums.forEach(function(num){
      
     test.push(num);
        
     
     stringNums = test.toString()
      
        
    stringNumSolid = stringNums.split(',').join("");
        
    });
    
    
    //this is cloning stringNumSolid array to work with two numbers at a time:
    
    console.log(stringNumSolid)
    var strTest = []  
    var numOne = [] 
    var wordArr = []
    var ifTest = "no"
    var testSliced = []
    
    numOne= test.shift();
    testSliced= numOne.toString()
    console.log(test)
    console.log(numOne)
    console.log(testSliced)
    
    //console.log(stringNumSolid)
    if (testSliced[0] ==="3" && testSliced[1]!=="3"){
      ifTest = "im sry"
    } else if(testSliced[0] ==="2" && testSliced[1]!=="3"){
      ifTest = "boop"
    } else if (testSliced[0] ==="1"){
      ifTest = "beep"
    } else {

    }
    
    console.log(ifTest)
    //for (i = 0 ; i < 3 ; i++){

           //strTest[i] = stringClone.shift();
    
    
          
    
    
    
 


    
 
      



   
   











});
