!(function() {
  const $showCardBtn = $('.showCardBtn');
  const $heroMenu = $('.heroMenu');
  const $heroDetail = $('.heroDetail');

  // 点击事件
  const clickEvent = {
    // 显示卡牌列表
    showCardBtnClick: function() {
      $showCardBtn.click(function() {
        $heroMenu.toggleClass('show');
        $heroDetail.toggleClass('show');
      });
    },
    // 焦点
    focusClick: function(target) {
      $(`.${target}`).click(function() {
        $(this)
          .addClass('focus')
          .siblings()
          .removeClass('focus');
        const index = $(this).index();
        renderPage.showHeroDetail(allheroData[index].heroList);
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
        str += `<div class="heroItem" data-index="${i}">${i.raceName}</div>`;
      });
      $heroMenu.html(str);
      $('.heroItem')
        .eq(0)
        .addClass('focus');
      this.showHeroDetail(woodsList.heroList);
    },
    showHeroDetail: function(list) {
      let str = '';
      list.map(i=> {
        str += `<div class="heroInfo">
        <div class="heroName">${i.heroName}</div>
        <div>血量${i.hp}</div>
        <div>防御${i.defend}</div>
        <div>攻击${i.attck}</div>
        </div>`;
      })
      $heroDetail.html(str);
    }
  };
  renderPage.pageInit();
})();
