console.log(playList)
let curIndex = 1;
let curSong = playList[curIndex];

const $albumPic = $('.album_pic>img');
const $songTitle = $('.song_title');
const $singer = $('.singer');
const $musicLink = $('#music');
$albumPic.attr('src',curSong.albumPic)
$songTitle.html(curSong.songTitle)
$singer.html(curSong.singer)
$musicLink.attr('src',curSong.url);
$('.icon-play').click(function() {
  console.log('play')
  $musicLink[0].play();
})