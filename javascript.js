$( document ).ready(function() {
  var current = 0;
  var activeSkillDes = "RoR";
  var pastProjectsIndex = ["pp1", "pp2", "pp3"];

  $("#skill_images > img").on("click", skillDescription);

  function checkScrollPosition() {
    $(window).scrollTop() > 450 ? $('#scrollToTop').fadeIn('slow') : $('#scrollToTop').fadeOut('slow');
  };
  $(window).scroll(checkScrollPosition); // check on scroll
  checkScrollPosition(); // check on load

  $("#scrollToTop").on("click", function(){
    window.scrollTo(0,0)
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

  function skillDescription(){
    var icon = this.id;
    if (icon === "html5_img" || icon === "css3_img") {
        $("#" + activeSkillDes).addClass("displayNone");
        $("#htmlCss").removeClass("displayNone");
        activeSkillDes = "htmlCss";
    } else if (icon === "ruby_img" || icon === "rails_img") {
        $("#" + activeSkillDes).addClass("displayNone");
        $("#RoR").removeClass("displayNone");
        activeSkillDes = "RoR";
    } else if (icon === "js_img") {
        $("#" + activeSkillDes).addClass("displayNone");
        $("#javascript").removeClass("displayNone");
        activeSkillDes = "javascript";
    } else if (icon === "python_img") {
        $("#" + activeSkillDes).addClass("displayNone");
        $("#python").removeClass("displayNone");
        activeSkillDes = "python";
    } else if (icon === "git_img" || icon === "sql_img") {
        $("#" + activeSkillDes).addClass("displayNone");
        $("#gitSQL").removeClass("displayNone");
        activeSkillDes = "gitSQL";
    }
  }
});
