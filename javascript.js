$( document ).ready(function() {
  var current = 0;
  var activeSkillDes = "RoR";
  var pastProjectsIndex = ["pp1", "pp2"];

  $("a h2").on("click", function(e){
    if (this.textContent.includes("Projects")) {
      $("html").animate({scrollTop: $("#pastProjects").offset().top}, 500);
    }
  });

  function checkScrollPosition() {
    $(window).scrollTop() > 450 ? $('#scrollToTop').fadeIn('slow') : $('#scrollToTop').fadeOut('slow');
  };
  $(window).scroll(checkScrollPosition); // check on scroll
  checkScrollPosition(); // check on load

  $("#scrollToTop").on("click", function(){
    $("html").animate({scrollTop: $(".iLinks").offset().top},500);
  });

  $("#lArrow").on("click", function(){
    $("#" + pastProjectsIndex[current]).addClass('displayNone');
    if (current <= 0) {
      let newIndex = (pastProjectsIndex.length) - 1;
      $("#" + pastProjectsIndex[newIndex]).removeClass('displayNone');
      current = newIndex;
    } else {
      $("#" + pastProjectsIndex[current - 1]).removeClass('displayNone');
      current -= 1;
    }
  });
  $("#rArrow").on("click", function(){
    $("#" + pastProjectsIndex[current]).addClass('displayNone');
    if (current >= pastProjectsIndex.length - 1 ) {
      $("#" + pastProjectsIndex[0]).removeClass('displayNone');
      current = 0;
    } else {
      $("#" + pastProjectsIndex[current + 1]).removeClass('displayNone');
      current += 1;
    }
  });
});
