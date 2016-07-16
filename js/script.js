$(document).ready(function() {
    $("form#enter-number").unbind('submit').submit(function(event) {
      event.preventDefault();
      $("div#output").empty();
      var userInput = parseInt($("input#user-number").val());
      var count = 0

      if (userInput < 0) {
        $("div#output").append("<p>" + "enter a number great than zero" + "</p>");
        } else {
          while (userInput > count) {
            count += 1
          if ((count % 3 === 0 ) && (count % 5 === 0)) {
            $("div#output").append("<p>" + "ping-pong" + "</p>");
          } else if (count % 3 === 0) {
            $("div#output").append("<p>" + "ping" + "</p>");
          } else if (count % 5 === 0) {
            $("div#output").append("<p>" + "pong" + "</p>");
          } else {
            $("div#output").append("<p>" + count + "</p>");
          }
        }
      }
  });
});
//      var result = [];
//      for (var index = 0; index > userInput; index += 1) {
//        if ((index % 3 === 0 ) && (index % 5 === 0)) {
//          result.push("ping-pong");
//        } else if (index % 3 === 0) {
//          result.push("ping");
//        } else if (index % 5 === 0) {
//          result.push("pong");
//        } else {
//          result.push(index);
//          }
//        }
//      }
//      $("div#output").text(result);
