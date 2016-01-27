var header = function(){
  this.tmp = `
  <header class="header g__header">
      <div class="col-md-3 logo text-center">logo</div>
      <div class="col-md-6 search-area text-center">
          <input type="text" class="form-control m-input" id="search_input"/>
          <span for="search_input" class="col btn btn-primary cn">搜索</span>
      </div>
      <div class="col-md-3 h__user text-right">
          <div class="head"></div>
          <a class="username">我</a>
          <a class="btn_login">登录</a>
          <a class="btn_logout">登出</a>
      </div>
  </header>
  `;

}
header.prototype = {
  render(){
    if($('header').length == 0){

    }
  },
  bind(){

  }
  search(){
    var str = $('#search_input').val();
    window.location = `/search?search=${str}`;
  },
  login(){

  }
}
module.exports = new header();
