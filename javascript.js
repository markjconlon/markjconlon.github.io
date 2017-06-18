$( document ).ready(function() {

  $('#p1').click(function (e){
    $('body').css('background-color', 'black');
    $('main').css('background-color', 'black');
    $('nav').css('background-color', 'black');
    let x = (window.innerWidth - e.clientX - 141);
    let y = e.clientY;
    $('#lightning').removeClass('display_none');
    $('#lightning').animate({left: ("-=" + x), bottom: "-=" + y}, 200);
    setTimeout(function(){
      $('#P2').css('display', 'none');
      $('#P3').css('display', 'none');
      $('#P4').css('display', 'none');
      $('#P1').css('display', 'block');
      $('#p1').addClass('small-view-active');
      $('#p2').removeClass('small-view-active');
      $('#p3').removeClass('small-view-active');
      $('#p4').removeClass('small-view-active');
      $('#lightning').addClass('display_none');
      $('#lightning').removeAttr('style');
      $('body').css('background-color', 'whitesmoke');
      $('main').css('background-color', 'whitesmoke');
      $('nav').css('background-color', 'steelblue');
  }, 250 );
  });
  $('#p2').click(function (e){
    $('body').css('background-color', 'black');
    $('main').css('background-color', 'black');
    $('nav').css('background-color', 'black');
    let x = (window.innerWidth - e.clientX - 141);
    let y = e.clientY;
    $('#lightning').removeClass('display_none');
    $('#lightning').animate({left: ("-=" + x), bottom: "-=" + y}, 500);
    setTimeout(function(){
      $('#P1').css('display', 'none');
      $('#P3').css('display', 'none');
      $('#P4').css('display', 'none');
      $('#P2').css('display', 'block');
      $('#p2').addClass('small-view-active');
      $('#p1').removeClass('small-view-active');
      $('#p3').removeClass('small-view-active');
      $('#p4').removeClass('small-view-active');
      $('#lightning').addClass('display_none');
      $('#lightning').removeAttr('style');
      $('body').css('background-color', 'whitesmoke');
      $('main').css('background-color', 'whitesmoke');
      $('nav').css('background-color', 'steelblue');
  }, 550 );
  });
  $('#p3').click(function (e){
    $('body').css('background-color', 'black');
    $('main').css('background-color', 'black');
    $('nav').css('background-color', 'black');
    let x = (window.innerWidth - e.clientX - 141);
    let y = e.clientY;
    $('#lightning').removeClass('display_none');
    $('#lightning').animate({left: ("-=" + x), bottom: "-=" + y}, 500);
    setTimeout(function(){
      $('#P2').css('display', 'none');
      $('#P1').css('display', 'none');
      $('#P4').css('display', 'none');
      $('#P3').css('display', 'block');
      $('#p3').addClass('small-view-active');
      $('#p2').removeClass('small-view-active');
      $('#p1').removeClass('small-view-active');
      $('#p4').removeClass('small-view-active');
      $('#lightning').addClass('display_none');
      $('#lightning').removeAttr('style');
      $('body').css('background-color', 'whitesmoke');
      $('main').css('background-color', 'whitesmoke');
      $('nav').css('background-color', 'steelblue');
  }, 550 );
  });
  $('#p4').click(function (e){
    $('body').css('background-color', 'black');
    $('main').css('background-color', 'black');
    $('nav').css('background-color', 'black');
    let x = (window.innerWidth - e.clientX - 141);
    let y = e.clientY;
    $('#lightning').removeClass('display_none');
    $('#lightning').animate({left: ("-=" + x), bottom: "-=" + y}, 500);
    setTimeout(function(){
      $('#P2').css('display', 'none');
      $('#P3').css('display', 'none');
      $('#P1').css('display', 'none');
      $('#P4').css('display', 'block');
      $('#p4').addClass('small-view-active');
      $('#p2').removeClass('small-view-active');
      $('#p3').removeClass('small-view-active');
      $('#p1').removeClass('small-view-active');
      $('#lightning').addClass('display_none');
      $('#lightning').removeAttr('style');
      $('body').css('background-color', 'whitesmoke');
      $('main').css('background-color', 'whitesmoke');
      $('nav').css('background-color', 'steelblue');
  }, 550 );
  });

var count = 0;
var xWin = false;
var oWin = false;
var xCount = 0;
var oCount = 0;
var draw = 0;
var gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var gameBoardId = [["tl","tm","tr"], ["ml","mm","mr"], ["bl","bm","br"]]

$('#outside > div').click(function(){
  if (count % 2 === 0 && !($(this).hasClass('x') || $(this).hasClass('o'))){
    $(this).addClass('x');
    gameBoard[$(this).attr('value')[0]][$(this).attr('value')[1]] = 1;
    count += 1;
    computerMove(gameBoard, gameBoardId);
  } else if (!($(this).hasClass('x') || $(this).hasClass('o'))){
      $(this).addClass('o');
      gameBoard[$(this).attr('value')[0]][$(this).attr('value')[1]] = -1;
      count += 1;
  }

  for (var i = 0; i < gameBoard.length; i++) {
    var rowSum = 0;
    for (var j = 0; j < gameBoard.length; j++) {
      rowSum += gameBoard[i][j];
    }
    if (rowSum === 3) {
      $('#gameResult').html("Player Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      xWin = true;
    } else if (rowSum === -3) {
      $('#gameResult').html("Mark Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      oWin = true;
    }
  }

  for (var k = 0; k < gameBoard.length; k++) {
    var colSum = 0;
    for (var l = 0; l < gameBoard.length; l++) {
      colSum += gameBoard[l][k];
    }
    if (colSum === 3) {
      $('#gameResult').html("Player Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      xWin = true;
    } else if (colSum === -3) {
      $('#gameResult').html("Mark Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      oWin = true;
    }
  }
  if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3 || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === -3) {
    if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3) {
      $('#gameResult').html("Player Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      xWin = true;
    } else {
      $('#gameResult').html("Mark Wins");
      $('#gameResult').removeClass("display_none");
      setTimeout(function(){
        $('#gameResult').html("");
        $('#gameResult').addClass("display_none");
      }, 2000);
      oWin = true;
    }
  } else if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 3 || (gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === -3){
      if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 3) {
        $('#gameResult').html("Player Wins");
        $('#gameResult').removeClass("display_none");
        setTimeout(function(){
          $('#gameResult').html("");
          $('#gameResult').addClass("display_none");
        }, 2000);
        xWin = true;
      } else {
        $('#gameResult').html("Mark Wins");
        $('#gameResult').removeClass("display_none");
        setTimeout(function(){
          $('#gameResult').html("");
          $('#gameResult').addClass("display_none");
        }, 2000);
        oWin = true;
      }
  } else if (count === 9){
    $('#gameResult').html("DRAW");
    $('#gameResult').removeClass("display_none");
    setTimeout(function(){
      $('#gameResult').html("");
      $('#gameResult').addClass("display_none");
    }, 2000);
  }

  if (xWin) {
    xCount += 1;
    $('#numXWins').html(' ' + xCount);
    $('#outside > div').removeClass();
    count = 0;
    xWin = false;
    gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  } else if (oWin){
    oCount += 1;
    $('#numOWins').html(' ' + oCount);
    $('#outside > div').removeClass();
    count = 0;
    oWin = false;
    gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  } else if (count === 9) {
    draw += 1;
    $('#draw').html(' ' + draw);
    $('#outside > div').removeClass();
    count = 0;
    gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }
});

function computerMove(gameBoard, gameBoardId, count){
  let coords = []
  for (var i = 0; i < gameBoard.length; i++) {
    var rowSum = 0;
    for (var j = 0; j < gameBoard.length; j++) {
      rowSum += gameBoard[i][j];
    }
    if (rowSum === 2 || rowSum === -2 ) {
      coords.push(i);
      if (gameBoard[i][0] === gameBoard[i][1]) {
        coords.push(2);
      } else if (gameBoard[i][0] === gameBoard[i][2]) {
        coords.push(1);
      } else if (gameBoard[i][1] === gameBoard[i][2]) {
        coords.push(0);
      }
    }
  }
  for (var k = 0; k < gameBoard.length; k++) {
    var colSum = 0;
    for (var l = 0; l < gameBoard.length; l++) {
      colSum += gameBoard[l][k];
    }
    if (colSum === 2 || colSum === -2) {
      if (gameBoard[0][k] === gameBoard[1][k]) {
        coords.push(2);
      } else if (gameBoard[0][k] === gameBoard[2][k]) {
        coords.push(1);
      } else if (gameBoard[1][k] === gameBoard[2][k]) {
        coords.push(0);
      }
      coords.push(k)
    }
  }
  if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 2 || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === -2) {
    if (gameBoard[0][0] === gameBoard[1][1]) {
      coords.push(2,2);
    } else if (gameBoard[0][0] === gameBoard[2][2]) {
      coords.push(1,1);
    } else if (gameBoard[1][1] === gameBoard[2][2]) {
      coords.push(0,0);
    }
  } else if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 2 || (gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === -2){
    if (gameBoard[2][0] === gameBoard[1][1]) {
      coords.push(0,2);
    } else if (gameBoard[0][2] === gameBoard[1][1]) {
      coords.push(2,0);
    } else if (gameBoard[0][2] === gameBoard[2][0]) {
      coords.push(1,1);
    }
  }
  if (coords[0] != undefined) {
    $('#' + gameBoardId[coords[(coords.length - 2)]][coords[(coords.length - 1)]]).trigger("click");
  }else {
    if (gameBoard[1][1] === 0) {
      $('#mm').trigger("click");
    } else if ((gameBoard[0][0] + gameBoard[2][2] === 2) && gameBoard [0][1] === 0) {
      $('#tm').trigger("click");
    } else if ((gameBoard[0][2] + gameBoard[2][0] === 2) && gameBoard [2][1] === 0) {
      $('#bm').trigger("click");
    } else if (gameBoard[1][1] != 0) {
      if (gameBoard[0][0] === 0 && (gameBoard[0][1]=== 1 || gameBoard[1][0] === 1) && (gameBoard[0][0] === 0)) {
        $('#tl').trigger("click");
      }else if ((gameBoard[0][2] === 0) && (gameBoard[1][2]=== 1 || gameBoard[2][1] === 1) && (gameBoard[2][2] === 0)) {
        $('#br').trigger("click");
      }else if ((gameBoard[2][2] === 0) && (gameBoard[0][2] === 0)) {
        $('#tr').trigger("click");
      }else if ((gameBoard[2][0] === 0) && (gameBoard[2][0] === 0)) {
        $('#bl').trigger("click");
      }else {
        var firstLetter = ["t", "m", "b"]
        for (var s = 0; s < gameBoard.length; s++) {
          if (gameBoard[s][0] === 0 ) {
            $('#' + firstLetter[s] + 'l').trigger("click");
            break;
          }else if (gameBoard[s][1] === 0) {
            $('#' + firstLetter[s] + 'm').trigger("click");
            break;
          }else if (gameBoard[s][2] === 0) {
            $('#' + firstLetter[s] + 'r').trigger("click");
            break;
          }
        }
      }
    }
  }
}
});
