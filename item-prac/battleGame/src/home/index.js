!(function() {
  const $showCardBtn = $('.showCardBtn');
  const $heroMenu = $('.heroMenu');
  const $heroDetail = $('.heroDetail');

  // click event
  const clickEvent = {
    // show card list
    showCardBtnClick: function() {
      $showCardBtn.click(function() {
        $heroMenu.toggleClass('show');
        $heroDetail.toggleClass('show');
      });
    },
    // focus
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

  // render event
  const renderPage = {
    // page init
    pageInit: function() {
      this.showHeroMenu();
      clickEvent.showCardBtnClick();
      clickEvent.focusClick('heroItem');
    },
    // render card catalog
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
    // render heros' detail
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

  // init
  renderPage.pageInit();
})();


console.log(123)