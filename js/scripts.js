$(document).ready(function(){



var userInput = 25
var userNums = []
var userNum = [];
var newTest = []
var test =[]
var res = []
var separateNums =[]
for (i =0 ; i < userInput ; i++){
  userNums.push(i);
}


    userNums.forEach(function(num){
      
      
        
        test.push(num);
        stringNums = test.toString();
      
        
        
     
    
     
      
      });
      
      console.log(stringNums)
      //var res = stringNums.replace(/1/g, "Beep!");
    
      var mapObj = {
        1:"beep",
        2:"boop",
        3:"sry"
     };
     res = stringNums.replace(/1|2|3/gi, function(matched){
       return mapObj[matched];
     });
     
     
     
     
      //console.log(res)

   
  // var i = 5;
  // var x = 6
  //  var result = 0 
   
  //      result = Math.max(5, 6);
     
  //      console.log(result)
      











});
