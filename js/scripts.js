$(document).ready(function(){
var counter = 0
var userNums = []
var userStr=""
var x=0
var s=0
var userInput = 25
 var strList = []
//this grabs the user inputted number and count up to the user number from 0

for (i =0; i < userInput ; i++){
  
  userNums.push(i);
  userStr = userNums[i].toString();
  strList.push(userStr)

}

for(c=0; c<userInput; c++ ){
  x=strList[c]
  for(c2=0; c2<x.length; c2++ )
    if(x[c2]==='3'){
      strList[c]="imsry"
    }
    else if(x[c2]==='2'){
      strList[c]="boop"
    }
    else if(x[c2]==='1'){
      strList[c]="beep"
    }
}
  
console.log(strList)

    
   


    
    
 


    
 
      



   
   

});
