!(function() {
  const $showCardBtn = $('.showCardBtn');
  const $heroMenu = $('.heroMenu');

  // 点击事件
  const clickEvent = {
    // 显示卡牌列表
    showCardBtnClick: function() {
      $showCardBtn.click(function() {
        $heroMenu.toggleClass('slide');
      });
    },
    // 焦点
    focusClick: function(target) {
      $(`.${target}`).click(function() {
        $(this)
          .addClass('focus')
          .siblings()
          .removeClass('focus');
      });
    }
  };

  // 渲染事件
  const renderPage = {
    // 页面初始化
    pageInit: function() {
      this.showHeroMenu();
      clickEvent.showCardBtnClick();
      clickEvent.focusClick('heroItem');
    },
    // 卡牌目录渲染
    showHeroMenu: function() {
      let str = '';
      allheroData.map(i => {
        str += `<div class="heroItem">${i.raceName}</div>`;
      });
      $heroMenu.html(str);
      $('.heroItem')
        .eq(0)
        .addClass('focus');
    }
  };
  renderPage.pageInit();
})();
