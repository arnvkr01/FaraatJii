
// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//       var hart = document.getElementById("hart");
//       var letter = document.getElementById("letter");
  
      
//       hart.style.display = "none";
  
     
//       letter.style.display = "block";
//       letter.classList.add("visible"); 
//     }, 4000); 
  
    
//     $(document).ready(function(){
//       $(".container").mouseenter(function(){
//         $(".card").stop().animate({ top: "-90px" }, "slow");
//       }).mouseleave(function(){
//         $(".card").stop().animate({ top: 0 }, "slow");
//       });
//     });
//   });
// $(document).ready(function() {
//   setTimeout(function() {
//     $("#hart").hide();
//     $("#letter").show().addClass("visible");
//   }, 4000);

//   $(".container").mouseenter(function(){
//     $(".card").stop().animate({ top: "-90px" }, "slow");
//     $(".envelop").addClass("rotate");
//   }).mouseleave(function(){
//     $(".card").stop().animate({ top: 0 }, "slow");
//     $(".envelop").removeClass("rotate");
//   });
// });
$(document).ready(function() {
  setTimeout(function() {
    $("#hart").hide();
    $("#letter").show().addClass("visible");
  }, 4000);

  $(".container").mouseenter(function(){
    $(".envelop").addClass("rotate");
    $(".envelop").one("transitionend", function() {
      $(".card").stop().animate({ top: "-90px" }, "slow");
    });
  }).mouseleave(function(){
    $(".card").stop().animate({ top: 0 }, "slow", function() {
      $(".envelop").removeClass("rotate");
    });
  });
});




