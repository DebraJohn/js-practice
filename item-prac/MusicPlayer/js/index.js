console.log(playList);
const styleSheet = $('#indexStyleSheet');
const $albumPic = $('.album_pic>img');
const $songTitle = $('.song_title');
const $singer = $('.singer');
const $musicLink = $('#music');
const $prevBtn = $('.icon-prev');
const $nextBtn = $('.icon-next');
const $playBtn = $('.icon-play');
const $dynamic = $('#dynamic');
const $totalTime = $('.total-time');
const $curTime = $('.cur-time');
const $progressing = $('.progressing');
let curRotate = 0;
let style = '';
let currentTime = 0;
let playTimer = null;
let progressRate = 0;

let playStatus = {
  curIndex: 0,
  state: 0 //0为停止播放  1为正在播放
};
let curSong = playList[playStatus.curIndex];

playerInit();

let mediaControl = {
  switchSong: function(state) {
    // 0为上一首, 1为下一首
    if (state) {
      if (playStatus.curIndex < playList.length) {
        playStatus.curIndex++;
      }
    } else {
      if (playStatus.curIndex > 0) {
        playStatus.curIndex--;
        this.switchSong();
      }
    }
    curSong = playList[playStatus.curIndex];
    setPlayStatus(
      curSong.albumPic,
      curSong.songTitle,
      curSong.singer,
      curSong.url,
      formatDurtion(curSong.duration)
    );
    this.resetPlayStatus();
    setTimeout(() => {
      this.__play__();
    }, 500);
  },
  __play__: function() {
    playStatus.state = 1;
    $playBtn.find('img').attr('src', './images/pause.png');
    progressBar(1);
    styles = `
      @-webkit-keyframes spin {
      from {
        transform: ${curRotate};
      }
      to {
        transform: rotate(${360 + curRotate}deg);
      }
    }`;
    $dynamic.html(styles);
    $albumPic.addClass('spinning');
  },
  __pause__: function() {
    playStatus.state = 0;
    $playBtn.find('img').attr('src', './images/play.png');
    progressBar(0);
    curRotate = eval('get' + $albumPic.css('transform'));
    $albumPic
      .removeClass('spinning')
      .css('transform', `rotate(${curRotate}deg)`);
  },
  resetPlayStatus: function() {
    currentTime = 0;
    $curTime.html('00:00');
    progressRate = 0;
    $progressing.css('width', '0');
    curRotate = 0;
    $albumPic
      .removeClass('spinning')
      .css('transform', `rotate(${curRotate}deg)`);
    clearInterval(playTimer);
  }
};

function playerInit() {
  setPlayStatus(
    curSong.albumPic,
    curSong.songTitle,
    curSong.singer,
    curSong.url,
    formatDurtion(curSong.duration)
  );
}

function progressBar(state) {
  if (state) {
    playTimer = setInterval(() => {
      currentTime += 1000;
      $curTime.html(formatDurtion(currentTime));
      progressRate = (currentTime / curSong.duration) * 100;
      $progressing.css('width', `${progressRate}%`);
      currentTime >= Math.floor(curSong.duration / 1000) * 1000 &&
        mediaControl.__pause__();
    }, 1000);
  } else {
    clearInterval(playTimer);
  }
}
function formatDurtion(time) {
  function addZero(t) {
    return (t = t < 10 ? `0${t}` : `${t}`);
  }
  const min = addZero(Math.floor(time / 1000 / 60));
  const sec = addZero(Math.floor(time / 1000) - min * 60);
  return `${min}:${sec}`;
}

function setPlayStatus(pic, title, singer, url, time) {
  $albumPic.attr('src', pic);
  $songTitle.html(title);
  $singer.html(singer);
  $musicLink.attr('src', url);
  $totalTime.html(time);
}

$playBtn.click(function() {
  if (!playStatus.state) {
    mediaControl.__play__();
  } else {
    mediaControl.__pause__();
  }
});

$nextBtn.click(function() {
  mediaControl.switchSong(1);
});

$prevBtn.click(function() {
  mediaControl.switchSong(0);
});
