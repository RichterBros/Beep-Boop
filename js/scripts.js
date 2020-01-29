$(document).ready(function () {
  $(".btn").click(function (event) {
    event.preventDefault();
    var printString = test()
    $("#output").text(printString);

  });
});

function test() {
  var userNums = []
  var strList = []

  var userInput = parseInt($("input#number").val()) + 1;

  for (i = 0; i < userInput; i++) {
    userNums.push(i);
    userStr = userNums[i].toString();
    strList.push(userStr)
  }
  for (c = 0; c < userInput; c++) {
    x = strList[c]
    if (x.includes("3")) {
      strList[c] = "I'm sorry, Dave. I'm afraid I can't do that."
    }
    else if (x.includes("2")) {
      strList[c] = "boop"
    }
    else if (x.includes("1")) {
      strList[c] = "beep"
    }
  }
  return strList;
}