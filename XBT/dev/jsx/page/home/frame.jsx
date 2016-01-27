/**
 * Created by wungcq on 15/11/2.
 */

  var G = {};
  G.isMini = false;
  function bind(){
    var leftMenu =  $('#g_left_menu');
    var hideAndShowLeftMenu = $('#hide_and_show_left_menu');
    var leftMenuSubMenu = $('#g_left_menu .has-menu');


    leftMenuSubMenu.on('click', function (ev) {
      var tar = $(ev.target);
      while (!tar.hasClass('has-menu')) {
        tar = tar.parent();
      }
      var isActive = tar.hasClass('active');
      leftMenuSubMenu.removeClass('active');
      $("body").removeClass('g-mini');
      if(!isActive){
        tar.addClass('active');
      }

    });

    hideAndShowLeftMenu.on('click',(ev)=>{
      if(G.isMini){
        hideAndShowLeftMenu.text('收起')
      }else{
        hideAndShowLeftMenu.text('展开')
      }
      setGlobalMini();
    });
  }

  function setGlobalMini(){
    G.isMini = !G.isMini;
    $("body").toggleClass('g-mini');
  }
  bind();

  module.exports = G;
