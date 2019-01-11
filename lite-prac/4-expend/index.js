let timeOut = null;
let clickTime = 0;

$('.item').click(function() {
  animatePic($('.item'), 'show');
  // console.log($(this));
  // $(this)
  //   .removeClass('expending')
  //   .css('z-index', '0')
  //   .siblings()
  //   .addClass('expending')
  //   .css('z-index', '1');
});

function animatePic(item, type) {
  item.removeClass('expending').removeClass('reverse');
  let $upperItem;
  if (!clickTime) {
    $upperItem = item.eq(0);
    clickTime = 1;
  } else {
    $upperItem = item.eq(1);
    clickTime = 0;
  }
  console.log($upperItem);
  if (type === 'show') {
    $upperItem
      .css('z-index', '0')
      .siblings()
      .addClass('expending')
      .css('z-index', '1');
  } else if (type === 'hide') {
    clearTimeout(timeOut);
    $upperItem.addClass('reverse');
    timeOut = setTimeout(function() {
      $upperItem
        .css('z-index', '0')
        .siblings()
        .css('z-index', '1');
    }, 800);
  }
}
