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
let curRotate = 0;
let style = '';

let playStatus = {
  curIndex: 0,
  state: 0 //0为停止播放  1为正在播放
};
let curSong = playList[playStatus.curIndex];

playerInit();

let mediaControl = {
  prev: function() {
    playStatus.curIndex = Math.min(0, playStatus.curIndex - 1);
    playStatus.state = 1;
  },
  next: function() {
    playStatus.curIndex = Math.max(
      playList.length - 1,
      playStatus.curIndex + 1
    );
    playStatus.state = 1;
  },
  __play__: function() {
    playStatus.state = 1;
    $playBtn.find('img').attr('src', './images/pause.png');
  },
  __pause__: function() {
    playStatus.state = 0;
    $playBtn.find('img').attr('src', './images/play.png');
  }
};

function playerInit() {
  setPlayStatus(
    curSong.albumPic,
    curSong.songTitle,
    curSong.singer,
    curSong.url
  );
}

function setPlayStatus(pic, title, singer, url) {
  $albumPic.attr('src', pic);
  $songTitle.html(title);
  $singer.html(singer);
  $musicLink.attr('src', url);
}

$playBtn.click(function() {
  if (!playStatus.state) {
    mediaControl.__play__();
    // $musicLink[0].play();
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
  } else {
    mediaControl.__pause__();
    // $musicLink[0].pause();
    curRotate = eval('get' + $albumPic.css('transform'));
    $albumPic
      .removeClass('spinning')
      .css('transform', `rotate(${curRotate}deg)`);
  }
});

$nextBtn.click(function() {
  if (playList.length > playStatus.curIndex + 1) {
    playStatus.curIndex = playStatus.curIndex + 1;
    curSong = playList[playStatus.curIndex];
    setPlayStatus(
      curSong.albumPic,
      curSong.songTitle,
      curSong.singer,
      curSong.url
    );
  }
});

function getmatrix(a, b, c, d, e, f) {
  var aa = Math.round((180 * Math.asin(a)) / Math.PI);
  var bb = Math.round((180 * Math.acos(b)) / Math.PI);
  var cc = Math.round((180 * Math.asin(c)) / Math.PI);
  var dd = Math.round((180 * Math.acos(d)) / Math.PI);
  var deg = 0;
  if (aa == bb || -aa == bb) {
    deg = dd;
  } else if (-aa + bb == 180) {
    deg = 180 + cc;
  } else if (aa + bb == 180) {
    deg = 360 - cc || 360 - dd;
  }
  return deg >= 360 ? 0 : deg;
  //return (aa+','+bb+','+cc+','+dd);
}
