console.log(playList);
const styleSheet = $('#indexStyleSheet');
const $albumPic = $('.album_pic>img');//歌曲图片
const $songTitle = $('.song_title');//歌名
const $singer = $('.singer');//歌手
const $musicLink = $('#music');//音乐链接
//获取按钮
const $prevBtn = $('.icon-prev');
const $nextBtn = $('.icon-next');
const $playBtn = $('.icon-play');

const $dynamic = $('#dynamic');
const $totalTime = $('.total-time');//歌曲总时间
const $curTime = $('.cur-time');
const $progressing = $('.progressing');

let curRotate = 0;
let style = '';
let currentTime = 0;
let playTimer = null;
let progressRate = 0;

//播放状态对象，里面包含curIndex（记录当前的歌曲下标），state（播放状态）
let playStatus = {
  curIndex: 0,
  state: 0 //0为停止播放  1为正在播放
};
//表示当前歌曲
let curSong = playList[playStatus.curIndex];

playerInit();

//媒体控制对象它下面有四个属性，
//分别是switchSong(切换歌曲) ，play(播放) ，pause(暂停) ，resetPlayStatus（重置播放状态）
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
    $musicLink.play();
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
  //重置播放状态
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

//控制进度条方法
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

//格式化时间，把毫秒单位的时间，转化为00：00
function formatDurtion(time) {
  function addZero(t) {
    return (t = t < 10 ? `0${t}` : `${t}`);
  }
  const min = addZero(Math.floor(time / 1000 / 60));//math.floor(x)返回小于等于x的最大整数
  const sec = addZero(Math.floor(time / 1000) - min * 60);
  return `${min}:${sec}`;
}

//设置播放器状态
function setPlayStatus(pic, title, singer, url, time) {
  $albumPic.attr('src', pic); //attr() 方法设置或返回被选元素的属性值。
  $songTitle.html(title);
  $singer.html(singer);
  $musicLink.attr('src', url);
  $totalTime.html(time);
}

//添加播放按钮点击的监听
$playBtn.click(function() {
  if (!playStatus.state) {
    mediaControl.__play__();
  } else {
    mediaControl.__pause__();
  }
});

//添加下一首按钮点击的监听
$nextBtn.click(function() {
  mediaControl.switchSong(1);
});

//添加上一首按钮点击的监听
$prevBtn.click(function() {
  mediaControl.switchSong(0);
});
