$(document).ready(function() {
  let buttons_1 = $('.btn-group > button');
  let buttons_2 = $('.btn-group-2 > button');
  //console.log(buttons_1);

  for(i=0; i<buttons_1.length; i++){
    $(buttons_1[i]).click(function(){
      $(this).toggleClass("active");
    });
  }

  for(i=0; i<buttons_2.length; i++){
    $(buttons_2[i]).click(function(){

      if($(this).hasClass("active")){
        $(this).removeClass("active");
        return
      } else {
        for(j=0; j<buttons_2.length; j++){
          $(buttons_2[j]).removeClass("active");
        }

        $(this).addClass("active");
      }
    });
  }

  window.onload = function () {
  }
});

function buttonrightarm(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  $('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    $('video.miniVideo.video_rightarm').removeClass('invisible');
    $('video.miniVideo.video_rightarm')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo.video_rightarm')[0].play();
  } else {
    $('video.miniVideo.video_rightarm').addClass('invisible');
    $('video.miniVideo.video_rightarm')[0].pause();
  }
}

function buttonleftarm(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  $('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    $('video.miniVideo.video_leftarm').removeClass('invisible');
    $('video.miniVideo.video_leftarm')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo.video_leftarm')[0].play();
  } else {
    $('video.miniVideo.video_leftarm').addClass('invisible');
    $('video.miniVideo.video_leftarm')[0].pause();
  }
}

function buttonfront(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  $('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    $('video.miniVideo.video_frontale').removeClass('invisible');
    $('video.miniVideo.video_frontale')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo.video_frontale')[0].play();
  } else {
    $('video.miniVideo.video_frontale').addClass('invisible');
    $('video.miniVideo.video_frontale')[0].pause();
  }
}

function buttonfeet(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  $('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    $('video.miniVideo.video_feet').removeClass('invisible');
    $('video.miniVideo.video_feet')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo.video_feet')[0].play();
  } else {
    $('video.miniVideo.video_feet').addClass('invisible');
    $('video.miniVideo.video_feet')[0].pause();
  }
}

function buttonsteps(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  //$('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    /*$('video.miniVideo').removeClass('invisible');
    $('video.miniVideo')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo')[0].play();*/
    $('audio.stepsAudio')[0].currentTime = currentBigVideoTime;
    $('audio.stepsAudio')[0].play();
  } else {
    $('audio.stepsAudio')[0].pause();
  }
}

function buttonheartbeat(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  //$('video.miniVideo').addClass('invisible');


  if(!$(target).hasClass('active')){
    /*$('video.miniVideo').removeClass('invisible');
    $('video.miniVideo')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo')[0].play();*/
    $('audio.heartbeatAudio')[0].currentTime = currentBigVideoTime;
    $('audio.heartbeatAudio')[0].play();
  } else {
    $('audio.heartbeatAudio')[0].pause();
  }
}

function buttonoutdoor(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  //$('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    /*$('video.miniVideo').removeClass('invisible');
    $('video.miniVideo')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo')[0].play();*/
    $('audio.outdoorAudio')[0].currentTime = currentBigVideoTime;
    $('audio.outdoorAudio')[0].play();
  } else {
    $('audio.outdoorAudio')[0].pause();
  }
}

function buttonbreath(target) {
  let bigVideo = document.getElementById("bigVideo");
  let currentBigVideoTime = bigVideo.currentTime;

  //$('video.miniVideo').addClass('invisible');

  if(!$(target).hasClass('active')){
    /*$('video.miniVideo').removeClass('invisible');
    $('video.miniVideo')[0].currentTime = currentBigVideoTime;
    $('video.miniVideo')[0].play();*/
    $('audio.breathAudio')[0].currentTime = currentBigVideoTime;
    $('audio.breathAudio')[0].play();
  } else {
    $('audio.breathAudio')[0].pause();
  }
}

