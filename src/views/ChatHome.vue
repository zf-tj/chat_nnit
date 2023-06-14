<template>
    <html lang="zh-CN" data-dpr="1" class=" " style="font-size: 54px">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="all" />
        <meta name="renderer" content="webkit" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>ChatGLM</title>
        <meta name="theme-color" content="#4DBA87" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ChatGLM" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body style="font-size: 12px">
        <div id="app" class="pr" style="background: rgb(255, 255, 255)">
          <!-- 58,62,213 -->
          <div class="home-container pc">
            <div class="layout-container">
              <div class="content-wrap">
                <div class="content">
                  <div class="title-wrap">
                    <div class="title">千亿对话模型</div>
                  </div>
                  <div class="desc">
                    旨在推动大模型的科学研究，面向行业内部交流合作的试用申请<br />
                  </div>
                  <!---->
                  <div class="btn">
                    <a @click="toNew">
                    <router-link to="/about">内测申请</router-link>
                    <router-view />
                    <div class="logo2 arrow_logo"></div>
                  </div>
                </div>
              </div>
              <div class="footer-container">
                <div class="content">
                  <div class="left">
                    <div class="title">联系我们</div>
                    <div class="desc">服务邮箱：talu@***.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </template>
  <style>
  .home-container.pc {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#3632cd),
      to(#4a6ef2)
    );
    background: -webkit-linear-gradient(top, #3632cd, #4a6ef2);
    background: -moz-linear-gradient(top, #3632cd 0, #4a6ef2 100%);
    background: -o-linear-gradient(top, #3632cd 0, #4a6ef2 100%);
    background: linear-gradient(180deg, #3632cd, #4a6ef2);
  }
  .home-container.pc .content-wrap {
    min-height: 100vh;
    padding: 24px 30px 0 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: 50%;
    -moz-background-size: cover;
    background-size: cover;
  }
  .home-container.pc .content-wrap,
  .home-container.pc .content {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -moz-box-flex: 1;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
  }
  .home-container.pc .content {
    color: #fff;
    padding-top: 24vh;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    justify-content: flex-start;
  }
  .home-container.pc .content .title-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
  }
  .home-container.pc .content .title-wrap .logo {
    width: 272px;
    height: 70px;
  }
  .home-container.pc .content .title-wrap .title {
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
  }
  .home-container.pc .content .desc {
    pointer-events: none;
    width: 600px;
    padding-top: 25px;
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
  }
  .home-container.pc .content .applyed {
    width: 513px;
    height: 47px;
    margin-top: 53px;
    background: #000;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 47px;
    text-align: center;
    color: #fff;
  }
  .home-container.pc .content .btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin-top: 50px;
    font-weight: 400;
    font-size: 18px;
    width: 219px;
    height: 54px;
    background: #3fbaff;
    cursor: pointer;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
  }
  .home-container.pc .content .btn:hover {
    background: #6ccaff;
  }
  .home-container.pc .content .btn .arrow_logo {
    width: 18px;
    height: 7px;
    margin-left: 10px;
  }
  .home-container.pc .content .login_btn {
    padding-top: 30px;
    font-weight: 350;
    font-size: 15px;
    line-height: 21px;
    color: #fff;
  }
  .home-container.pc .content .login_btn .login_text,
  .home-container.pc .content .login_btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
  }
  .home-container.pc .content .login_btn .login_text .home_arrow_logo {
    margin-left: 4px;
    width: 7px;
    height: 10px;
    background-position: 50%;
    -moz-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    -moz-background-origin: border-box;
    background-origin: border-box;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeBAMAAADePCNYAAAAGFBMVEVHcExAu/8/uv9Auf8/vP9Auf8+u/8/uv8aTnchAAAAB3RSTlMAoJ+gn4B/XzNZWQAAAD9JREFUGNNjYEAGSXAWW7kCjJleXgQXLIcJMwOZMGFz+gi7A5kCYBYLkFVIO0FWuCADQzhMECQsAA+eQAYMAAAbCCtNjKRMxAAAAABJRU5ErkJggg==);
  }
  .home-container.pc .content .login_btn .login_text:hover .home_arrow_logo {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAMAAAD0DqVnAAAAUVBMVEVHcExk/7Vk/7Vl/7Zl/7Vk/7Nk/7Zg/7dg/69k/7dl/7Rj/7Rj/7Nm/7dk/7Rj/7Vk/7Nl/7Vk/7Zl/7Vg/7Vk/7dl/7hj/7Nl/7Vl/7Zk/7V2+b0AAAAAGnRSTlMA78/f34C/IBB/0KCQX3CfQGCPMDBAb1Cfr6AkkZkAAACISURBVCjPhdLbDoIwEATQUqUs5SYqqPP/HwomsFvbSdzHk94mU+f2mVpXjASgYIlAwc0FKDngmDdbCwRJ2Z/sm/Q65WvKruPcc66VH5SrG2UMKc/KPzFfFeNFtTYc9ITRcFWcDVv2MsOn4Z0lnghKYBhPjPKnId3esTb77Jf4LPrBH4LfNscMNpAIF7XfGqfhAAAAAElFTkSuQmCC);
  }
  .home-container.pc .content .login_btn .login {
    font-weight: 400;
    padding-left: 8px;
    color: #65c8ff;
    cursor: pointer;
  }
  .home-container.pc .content .login_btn .login:hover {
    color: #64ffb5;
  }
  .home-container.pc .content .home_emo_icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    align-items: center;
    margin-top: 0.5333333333333333rem;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
  }
  .home-container.pc .content .home_emo_icon .icon {
    margin-right: 8px;
    width: 20px;
    height: 13px;
  }
  .layout-container {
    min-height: 100vh;
    overflow: auto;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -moz-box-flex: 0;
    flex: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
  }
  .footer-container {
    background: #1a2029;
    padding: 50px 0 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    color: #fff;
  }
  .footer-container .content {
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    flex-direction: row;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .footer-container .content .left,
  .footer-container .content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-direction: normal;
    -moz-box-direction: normal;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    align-items: flex-start;
  }
  .footer-container .content .left {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    flex-direction: column;
  }
  .footer-container .content .left .title {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
  }
  .footer-container .content .left .desc {
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: hsla(0, 0%, 100%, 0.7);
    padding-top: 16px;
  }
  .footer-container .content .left .logo-wrap {
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    flex-direction: row;
  }
  .footer-container .content .left .logo-wrap,
  .footer-container .content .left .logo-wrap div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-direction: normal;
    -moz-box-direction: normal;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -moz-box-align: start;
    align-items: flex-start;
  }
  .footer-container .content .left .logo-wrap div {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    flex-direction: column;
  }
  .footer-container .content .left .logo-wrap div:last-child {
    padding-left: 0.5333333333333333rem;
  }
  .footer-container .content .left .logo-wrap .logo {
    padding-top: 10px;
    width: 100px;
    height: 100px;
  }
  .footer-container .content .right {
    width: 372px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -moz-box-flex: 0;
    flex: none;
  }
  .footer-container .content .right .list {
    text-align: start;
  }
  .footer-container .content .right .list .title {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
    padding-bottom: 17px;
  }
  .footer-container .content .right .list .desc {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 28px;
  }
  .footer-container .content .right .list .desc div {
    color: hsla(0, 0%, 100%, 0.7);
  }
  .footer-container .content .right .list .desc div:hover {
    color: #fff;
  }
  .footer-container .badge {
    padding-top: 0.8666666666666667rem;
    font-weight: 400;
    font-size: 0.17333333333333334rem;
    line-height: 0.4rem;
    color: hsla(0, 0%, 100%, 0.4);
  }
  .logo2 {
    background-position: 50%;
    -moz-background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    -moz-background-origin: border-box;
    background-origin: border-box;
  }
</style>
  