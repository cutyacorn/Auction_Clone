<template>
  <div id="login">
    <h1>Login</h1>
    <div class="container">
      <table class="login-table" align="center">
        <tr>
            <td align="right" style="width: 33%">
                <label for="id" class="login-font">
                  <img src="../assets/txt_id.gif" alt="로그인">
                </label>
            </td>
            <td align="center" style="width: 33%">
                <input type="text" class="login-text">
            </td>
            <td style="width: 33%">
              <input type="checkbox" class="rememberId-chk">
              <span class="rememberId-span">ID기억하기</span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label for="id" class="login-font">
                  <img src="../assets/txt_pw.gif" alt="비밀번호">
                </label>
            </td>
            <td align="center">
                <input type="text" class="login-text">
            </td>
            <td></td>
        </tr>
        <tr>
          <td></td>
          <td align="center">
            <button class="login-btn">로그인</button>
          </td>
          <td></td>
        </tr>
        <tr>
            <td align="center" colspan="3">
                <button class="join-btn">회원가입</button>
                <button class="srchId-btn">아이디찾기</button>
                <button class="srchPw-btn">비밀번호찾기</button>
            </td>
        </tr>
        <tr>
            <td align="center" colspan="3">
              <div class="disabled-access">
                <a href="">
                  <img src="../assets/txt_loginerror.gif" alt="로그인이 안될때">
                </a>
              </div>
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
   
  }
}
</script>
<style>
input {
    text-rendering: auto;
    color: -internal-light-dark-color(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: -internal-light-dark-color(white, black);
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
} 
.login-font {
    float: right;
    height: 1.35em;
    line-height: 1.35em;
    vertical-align: middle;
    padding: 2px 4px 0;
}
.login-text {
    float: left;
    width: 120px;
    height: 23px;
    margin: 0 5px 0 0;
    padding: 3px 5px;
    border: 1px solid #999;
    font-size: 100%;
    line-height: 1.35em;
    vertical-align: middle;
}
.rememberId-span {
    margin-top: 5px;
    padding: 0;
    font: 11px Tahoma,'Malgun Gothic','맑은고딕';
    color: #8A8A8A;
    letter-spacing: -1px;
    text-align: left;
    white-space: nowrap;
}
.login-table {
    outline: saddlebrown;
    border: 2.5px solid #eb0009;
}
.login-btn {
    float: left;
    width: 120px;
    height: 34px;
    border: 0;
    background-color: #eb0009;
    font-family: 'Malgun Gothic','맑은고딕';
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    letter-spacing: -1px;
}
.join-btn {
    display: inline-block;
    width: 74px;
    height: 18px;
    margin: 0 1px;
    border: 1px solid #444;
    background-color: #444;
    line-height: 1.5;
    font-family: 'Malgun Gothic','맑은고딕';
    font-size: 11px;
    color: #fff;
    letter-spacing: -1px;
    text-decoration: none;
}
.srchId-btn, .srchPw-btn {
    display: inline-block;
    width: 74px;
    height: 18px;
    margin: 0 1px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    line-height: 1.5;
    font-family: 'Malgun Gothic','맑은고딕';
    font-size: 11px;
    color: #333;
    letter-spacing: -1px;
    text-decoration: none;
}
.disabled-access {
    line-height: 1.3;
    height: 27px;
    border-top: 1px solid #ededed;
}
</style>
