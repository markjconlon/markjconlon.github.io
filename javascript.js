$( document ).ready(function() {
  $('#p1').click(function (){
    $('#placeholder').css('display', 'none');
    $('#P2').css('display', 'none');
    $('#P3').css('display', 'none');
    $('#P4').css('display', 'none');
    $('#P1').css('display', 'block');
  });
  $('#p2').click(function (){
    $('#placeholder').css('display', 'none');
    $('#P1').css('display', 'none');
    $('#P3').css('display', 'none');
    $('#P4').css('display', 'none');
    $('#P2').css('display', 'block');
  });
  $('#p3').click(function (){
    $('#placeholder').css('display', 'none');
    $('#P2').css('display', 'none');
    $('#P1').css('display', 'none');
    $('#P4').css('display', 'none');
    $('#P3').css('display', 'block');
  });
  $('#p4').click(function (){
    $('#placeholder').css('display', 'none');
    $('#P2').css('display', 'none');
    $('#P3').css('display', 'none');
    $('#P1').css('display', 'none');
    $('#P4').css('display', 'block');
  });


});
