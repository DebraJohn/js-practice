console.log(playList);
const styleSheet = $('#indexStyleSheet');
const $albumPic = $('.album_pic>img');
const $songTitle = $('.song_title');
const $singer = $('.singer');
const $musicLink = $('#music');
const $prevBtn = $('.icon-prev');
const $nextBtn = $('.icon-next');
const $playBtn = $('.icon-play');
let curRotate;

let playStatus = {
  curIndex: 1,
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
    playStatus.curIndex = Math.max(playList.length - 1, playStatus.curIndex + 1);
    playStatus.state = 1;
  },
  __play__: function() {
    playStatus.state = 1;
  },
  __pause__: function() {
    playStatus.state = 0;
  },
}

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
  if(!playStatus.state) {
    mediaControl.__play__();
    // $musicLink[0].play();
    $albumPic.css('transform', curRotate).addClass('spinning');
  } else {
    mediaControl.__pause__();
    // $musicLink[0].pause();
    curRotate = $albumPic.css('transform')
    $albumPic.removeClass('spinning').css('transform', curRotate);
  }
});
