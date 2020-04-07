<template>
  <div id="app">
    <header>
      <div class="main_title">
        <div class="title_menu">
          <ul>
            <li><router-link to="/login">로그인</router-link></li>
            <li><router-link to="/join">회원가입</router-link></li>
          </ul>
        </div>
        <div class ="title_auction">
          <div class="title_item">
            <router-link to="/"><img alt="auction_logo" class="img_size" src="./assets/auction_logo.png"></router-link>
          </div>
          <div class="search_inner">
            <input type="submit" value="검색" class="search_btn_ok">
          </div>
        </div>
      </div>
      <div class="gnb_bar">
        <nav class="gnb">
          <ul class="gnb_list">
            <li><a href=""><strong>☰</strong> 전체 카테고리</a></li>
            <li> | </li>
            <li><a href="">쿠폰포인트</a></li>
            <li> | </li>
            <li><a href="">옥션베스트</a></li>
            <li> | </li>
            <li><a href="">스마일배송</a></li>
            <li> | </li>
            <li><a href="">스마일클럽</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer id="footer" class="footer" role="contentinfo">
      <div class="footer-block">
        <div class="footer-container">
          <p>이베이코리아 유한책임회사 사이트의 상품/판매자/쇼핑 정보, 콘텐츠, UI 등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등에 의하여 엄격히 금지됩니다.</p>
          <p><em>옥션은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 옥션은 상품 · 거래정보 및 거래에 대하여 책임을 지지 않습니다.</em></p>
          <p>Copyright © <strong>eBay Korea LLC</strong> All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body{
  margin: 0;
}
a{
  text-decoration: none;
  color:gray
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main_title{
  min-width: 1000px;
}
.title_menu{
  position: relative;
  height: 20px;
  margin: 0 auto;
  width: 1000px;
}
.title_menu > ul {
  margin: 0;
  padding: 0;
  float: right;
}
.title_menu > ul > li{
  list-style-type: none;
  display: inline;
  margin-left: 5px;
  font-size: 12px;
}
.title_auction{
  width: 930px;
  height: 80px;
  margin: 0 auto;
}
.img_size{
  width: 200px;
}
.title_item{
  /*display: inline-block;*/
  float:left;
}
.search_inner {
    /*display: inline-block;*/
    float:left;
    position: relative;
    width: 400px;
    height: 44px;
    border-bottom: 4px solid #e63740;
}
.search_btn_ok {
    position: absolute;
    right: 0;
    top: 12px;
    display: block;
    width: 22px;
    height: 29px;
    border: none;
    background: url(//pics.auction.co.kr/pc/common/header/header.png) -212px -90px no-repeat;
    text-indent: -10000em;
    overflow: hidden;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    box-sizing: border-box;
}
.gnb_bar {
    min-width: 1000px;
    border-top: 1px solid #ededed;
    border-bottom: 2px solid #242424;
}
.gnb {
    width: 1000px;
    height: 48px;
    margin: 0 auto;
}
.gnb_list {
    float: left;
    width: 750px;
    zoom: 1;
}
.gnb_list li:first-child {
    margin-left: 0;
    top: -5px;
}
.gnb_list > li {
    top: -2px;
    list-style-type: none;
    position: relative;
    float: left;
    margin-left: 20px;
}
.gnb_list li a {
    color: black;
    font-size: 16px;
    font-weight: bold;
}
.gnb_list li strong{
    font-size: 18px;
    font-weight: bold;
}
.footer {
    width: 100% !important;
    border-top: 1px solid #ddd;
    color: #333;
    font-size: 11px;
    line-height: 18px;
    font-family: Dotum, '돋움', sans-serif;
    letter-spacing: -1px;
    text-align: left;
}
.footer .footer-block-cs {
    border-top: 0;
    background: #f7f7f7;
    letter-spacing: 0;
}
.footer .footer-container {
    width: 980px;
    margin: 0 auto;
}
</style>