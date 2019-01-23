
$(document).ready(function() {
  $("#formOne").submit(function(event){
  /*var counts = ["countTo", "countBy"];
  var userInputes = [];

  console.log("formOne ", counts);*/
  var countTo = parseInt($("#countTo").val());
  var countBy = parseInt($("#countBy").val());
  var results = [];

  for (var index = countBy; index <= countTo; index += countBy) {
    results.push(index);
    $("#answer").text(results).val();
  }

  /*var  userInpute = $("#" + counts).val();
  $("." + counts).text(userInpute).val();
  UserInputes.push(userInput);*/

  event.preventDefault();
});
});
