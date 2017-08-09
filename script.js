//What does the line $(document).ready(function(){ do? Write your answer as a comment below
//
$(document).ready(function(){
// your code goes below
  $("#word-1").click(function(){
  // $("word-1").hide(1000)
    console.log("word-1");
    $(".word").hide();
})

  $("h1").click(function(){
    $("#word-2,#word-6,#word-7,#word-8,#word-11").show();
  })
});
