//$(document).ready(function() {
//    $("form#enter-number").unbind('submit').submit(function(event) {
//      event.preventDefault();
//      $("div#output").empty();
//      var userInput = parseInt($("input#user-number").val());
//      var count = 0
//
//      if (userInput < 0) {
//        $("div#output").append("<p>" + "enter a number great than zero" + "</p>");
//        } else {
//          while (userInput > count) {
//            count += 1
//          if ((count % 3 === 0 ) && (count % 5 === 0)) {
//            $("div#output").append("<p>" + "ping-pong" + "</p>");
//          } else if (count % 3 === 0) {
//            $("div#output").append("<p>" + "ping" + "</p>");
//          } else if (count % 5 === 0) {
//            $("div#output").append("<p>" + "pong" + "</p>");
//          } else {
//            $("div#output").append("<p>" + count + "</p>");
//          }
//        }
//      }
//  });
//});


// front end logic
$(document).ready(function() {
    $("form#enter-number").unbind('submit').submit(function(event) {
      event.preventDefault();
      $("div#output").empty();
      var userInput = parseInt($("input#user-number").val());
      var resultData = answer(userInput);
    $("div#output").text(resultData);
  });
});


// business logic
var answer = function(userInput) {
  var result = [];
  if (userInput < 0) {
      result.push("enter a number great than zero");
  } else {
    for (var i = 1; i <= userInput; i += 1) {
      if ((i % 3 === 0 ) && (i % 5 === 0)) {
        result.push(" ping-pong");
      } else if (i % 3 === 0) {
        result.push(" ping");
      } else if (i % 5 === 0) {
        result.push(" pong");
      } else {
        result.push(" " + i);
      }
    }
      return result;
    }
  }
