<!-- eslint-disable prettier/prettier -->
<template>
  <html lang="zh-CN" data-dpr="1" class=" " style="font-size: 54px">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content=" " />
      <meta name="robots" content="all" />
      <meta name="renderer" content="webkit" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
      />
      <meta name="theme-color" content="#ffffff" />
      <title>Chat-NNIT</title>
      <meta name="theme-color" content="#4DBA87" />
      <meta name="apple-mobile-web-app-capable" content="no" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Chat" />
      <meta name="msapplication-TileColor" content="#000000" />
    </head>

    <body style="font-size: 12px" class="">
      <div id="app" class="pr" style="background: rgb(243, 245, 250)">
        <div>
          <div class="header-container">
            <div
              id="sessionlist"
              class="session-list animate__animated exist hideHeader"
              style="height: 100%"
            >
              <div class="left-header-block flex flex-x-center">
                <div class="left-header-block-up">
                  <el-image
                    :src="require('@/assets/svg/logo_alpha.svg')"
                    class="block logo"
                  />
                </div>
              </div>
              <div class="new-session-button left-header-block">
                <el-button type="primary" icon="Plus" @click="addSession">
                  启动新对话
                </el-button>
              </div>
              <div class="sessionList pointer" v-for="item in sessionList" :key="item.sid" @click="changeChat(item.sid)">
                <div>
                  <span>{{ item.title }}</span>
                  <span> &nbsp; </span>
                  <span>{{ item.time }}</span>
                </div>
              </div>
            </div>
          </div>
          <div id="session-container" class="detail flex flex-x-center flex-y-start">
            <div
              class="session-block scroll-display-none animate__animated"
              style="height: 516px"
            >
              <div class="item">
                <div id="row-answer-0" class="answer">
                  <div class="panel">
                    <div class="flex flex-x-between flex-y-start">
                      <div class="robot-img">
                        <el-image
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAkFBMVEVHcEwjU/8kVP8gUP8kVP8kVP8lVf8lVf8kVP8oWP8kVP8lVf8kVP8kVf8lVP8kVP8kVP8jU/8lVf8kVP////8kVP8yX/9bf/92lP+tv//I1P/k6v+Rqf+ftP9Aav/j6f8/af/x9f9NdP+En//x9P+7yv/W3/+Sqv+Dnv9oif9piv93lf+6yf/V3v+gtf9Odf+qzkaWAAAAFHRSTlMAkHAQgM9g3+8gQJ+Pr6C/f1BvsGndm14AAAOdSURBVFjDrVeJcuIwDA1tIA2lULY+c5iQA0pLu///d2tbMbEdc7WrGWZIYsnS07MkR9EZSWeLl2mCpSTTl3idRnfJfKFVbUme57dqP74+4aAks/Q36kqeFldN/LmgDl5cVE9X+Kok6c+37+N4OKe/wDfKa1j/Gd8szyH9Kb5Dpr/aP+jDa3CZqCmlNQl9Wnj4jxYQWu62CGTH6diCk4vUz58ojXIvORtl0+aDd3QIB61NxznvshZMCM/CatCfuV8avXvGTrHXLFNvinNBpI4DpFSL9x5yFR9beHoMMZDs1O7VGLSPDUKl+yoOIKj1971KUZbFgD/pEHoPueAgIBehT/hbApJ8CGaPEA24YCNQSI0G/v4dcnjiwTfKXRd0/bNe0MF/XDk84JDEDLl8mHuHIJe5x0EDPQ2qrevCxI2AyYX16Ql5FgjE6KCQyBy4DhyHJ4/MwAKydVOZRmvXgd4+LQu8s5RL0aAWXPhyDMyieHjITgjIDGYmjVreUb4F/Cqk7O8HEF4GoiiwBwYQ5oXQs2gj0cwVlEJ59GZVMmrWUL38QHwQwDqvZazyL9mo1VMrCY2BAA5zpkLitgGIXpK721Q64r1Kg8tCnURAryVUbmTH0QLUFG+lpshaTVnLgNpNWAQocCdzb1vQX1lNJdTs2JcLz0BtGWgF4UzxX8VTbhQs2gDmFRa5YZwXwsGmoGIvKbZwviRmAHGFa/kyM2fCA/Hd4XDOoba2/WdJQqEUP2pxYAcBXHbTmAUOAYIzTJVLsqgwVVo4o90RWpRLJE1Xg0GpAzcG9NmQvwq6RlNoEN6iiUNlHUNf0yt1ei0DkI/GL4tWQWv6GMDA0VQ4YwBXBS9rr9Su7eOsucuMAT6QMtdOMxZocKlTUApAAfwuBwNfptnkRe0akQXFBkHlWgbxkUnpNFiV+pt9YlEUBYSDiN/l/aLqdw/3IyTaKaqR3Ve+Qz3QtCZtgPkRRHZN6k9i5jdi5TbJdXK9gqZnU6e1bULTgMSfwCGvQiOC40K1Gw8UIm8avb/pelZXGLlwmi5yfgDWkOZU2z7PzKwPoQED+CxlePBoaI3Nq8A04UvrzxzJpSFrZGKk7g5ZfhDKBOuM821WXhvzHEJbeOo5UwRpFfuj6vK+UXf5/4ftu3xYhi8M8a36k3NXlodfXnn8mTUsq8s3v1ny8+17JyaXLp7x4w131/ScF7epw+V7Ob58T+b3XeDTdTxc/yfnr93/ANcHEaCL+3sgAAAAAElFTkSuQmCC"
                        />
                      </div>
                      <div class="code-box flex1">
                        <p data-source-line="1">试试这些例子：</p>
                        <div
                          class="flex grey-bar example fs14 tl pointer wrap"
                          @click="addChat(1)"
                        >
                          <span id="example1">
                            帮我写一份川菜餐厅的五星好评，包含环境、菜品、服务等维度，不少于100字
                          </span>
                        </div>
                        <div
                          class="flex grey-bar example fs14 tl pointer wrap"
                          @click="addChat(2)"
                        >
                          <span id="example2">
                            请以表格形式产出唐宋八大家以及他们所属朝代和代表作
                          </span>
                        </div>
                        <div
                          class="flex grey-bar example fs14 tl pointer wrap"
                          @click="addChat(3)"
                        >
                          <span id="example3">
                            我在写一篇有关人工智能发展的论文，帮我列出提纲、目录结构
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="chat-content"
                      id="chat-content"
                      ref="chatContent"
                      @scroll="onScroll"
                    >
                      <div v-for="item in chatList" :key="item.id">
                        <!-- 机器人 -->
                        <div class="chat-friend" v-if="item.uid !== 'userId'">
                          <div style="float: left;" class="robot-img">
                            <el-row :gutter="20">
                              <el-col>
                                <span>
                                  <el-image
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAkFBMVEVHcEwjU/8kVP8gUP8kVP8kVP8lVf8lVf8kVP8oWP8kVP8lVf8kVP8kVf8lVP8kVP8kVP8jU/8lVf8kVP////8kVP8yX/9bf/92lP+tv//I1P/k6v+Rqf+ftP9Aav/j6f8/af/x9f9NdP+En//x9P+7yv/W3/+Sqv+Dnv9oif9piv93lf+6yf/V3v+gtf9Odf+qzkaWAAAAFHRSTlMAkHAQgM9g3+8gQJ+Pr6C/f1BvsGndm14AAAOdSURBVFjDrVeJcuIwDA1tIA2lULY+c5iQA0pLu///d2tbMbEdc7WrGWZIYsnS07MkR9EZSWeLl2mCpSTTl3idRnfJfKFVbUme57dqP74+4aAks/Q36kqeFldN/LmgDl5cVE9X+Kok6c+37+N4OKe/wDfKa1j/Gd8szyH9Kb5Dpr/aP+jDa3CZqCmlNQl9Wnj4jxYQWu62CGTH6diCk4vUz58ojXIvORtl0+aDd3QIB61NxznvshZMCM/CatCfuV8avXvGTrHXLFNvinNBpI4DpFSL9x5yFR9beHoMMZDs1O7VGLSPDUKl+yoOIKj1971KUZbFgD/pEHoPueAgIBehT/hbApJ8CGaPEA24YCNQSI0G/v4dcnjiwTfKXRd0/bNe0MF/XDk84JDEDLl8mHuHIJe5x0EDPQ2qrevCxI2AyYX16Ql5FgjE6KCQyBy4DhyHJ4/MwAKydVOZRmvXgd4+LQu8s5RL0aAWXPhyDMyieHjITgjIDGYmjVreUb4F/Cqk7O8HEF4GoiiwBwYQ5oXQs2gj0cwVlEJ59GZVMmrWUL38QHwQwDqvZazyL9mo1VMrCY2BAA5zpkLitgGIXpK721Q64r1Kg8tCnURAryVUbmTH0QLUFG+lpshaTVnLgNpNWAQocCdzb1vQX1lNJdTs2JcLz0BtGWgF4UzxX8VTbhQs2gDmFRa5YZwXwsGmoGIvKbZwviRmAHGFa/kyM2fCA/Hd4XDOoba2/WdJQqEUP2pxYAcBXHbTmAUOAYIzTJVLsqgwVVo4o90RWpRLJE1Xg0GpAzcG9NmQvwq6RlNoEN6iiUNlHUNf0yt1ei0DkI/GL4tWQWv6GMDA0VQ4YwBXBS9rr9Su7eOsucuMAT6QMtdOMxZocKlTUApAAfwuBwNfptnkRe0akQXFBkHlWgbxkUnpNFiV+pt9YlEUBYSDiN/l/aLqdw/3IyTaKaqR3Ve+Qz3QtCZtgPkRRHZN6k9i5jdi5TbJdXK9gqZnU6e1bULTgMSfwCGvQiOC40K1Gw8UIm8avb/pelZXGLlwmi5yfgDWkOZU2z7PzKwPoQED+CxlePBoaI3Nq8A04UvrzxzJpSFrZGKk7g5ZfhDKBOuM821WXhvzHEJbeOo5UwRpFfuj6vK+UXf5/4ftu3xYhi8M8a36k3NXlodfXnn8mTUsq8s3v1ny8+17JyaXLp7x4w131/ScF7epw+V7Ob58T+b3XeDTdTxc/yfnr93/ANcHEaCL+3sgAAAAAElFTkSuQmCC"
                                  />
                                </span>                            
                              </el-col>
                            </el-row>
                          </div>
                          <div class="info-time">
                            <el-row :gutter="20">
                              <el-col>
                                <span> {{ item.name }} </span>
                                <span> &nbsp; </span>
                                <span> {{ item.time }} </span>
                                <span> &nbsp; </span>
                              </el-col>
                            </el-row>
                          </div>
                          <div class="chat-text" v-if="item.chatType == 0">
                            <el-row :gutter="20">
                              <el-col>
                                <el-card class="box-card" shadow="always" body-style="background:#E0FFFF;">
                                  <span style="font-size: 16px;">{{ item.msg }}</span>
                                </el-card>
                              </el-col>  
                            </el-row>
                          </div>
                          <br>
                        </div>
                        <!-- 用户-->
                        <div class="chat-me" style="text-align: right; right: 0;" v-else>
                          <div style="float: right;">
                            <el-row :gutter="20">
                              <el-col>
                                <span>
                                  <el-image
                                    :src="require('@/assets/pic/AI_Head.jpg')"
                                    alt=""
                                  />
                                </span>                            
                              </el-col>
                            </el-row>
                          </div>
                          <div class="info-time">
                            <el-row :gutter="20">
                              <el-col>
                                <span> {{ item.time }} </span>
                                <span> &nbsp; </span>
                                <span> {{ item.name }} </span>
                                <span> &nbsp; </span>
                              </el-col>
                            </el-row>
                          </div>
                          <div class="chat-text" v-if="item.chatType == 0">
                            <el-row :gutter="20">
                              <el-col>
                                <el-card class="box-card" shadow="always" body-style="background:#EAEAAE;">
                                  <span style="font-size: 16px;">{{ item.msg }}</span>
                                </el-card>
                              </el-col>  
                            </el-row>
                          </div>
                          <div class="chat-img" v-if="item.chatType == 1">
                            <el-row :gutter="20">
                              <el-col>
                                <img
                                  :src="item.msg"
                                  alt="表情"
                                  v-if="item.extend.imgType == 1"
                                  style="width: 100px; height: 100px"
                                />
                                <el-image
                                  style="max-width: 300px; border-radius: 10px"
                                  :src="item.msg"
                                  :preview-src-list="srcImgList"
                                  v-else
                                >
                                </el-image>
                              </el-col>
                            </el-row>
                          </div>
                          <br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
              <div class="last-div"></div>
              <!---->
            </div>
            <div class="search-box animate__bounceInUp">
              <div
                class="search-container component-box"
                initrows="3"
                maxrows="3"
                minrows="3"
              >
                <!---->
                <div class="search flex flex-x-between flex-y-start no-effect">
                  <div
                    id="search-input-box"
                    class="input-box flex flex-x-between flex-y-start"
                  >
                    <div class="input-box-inner">
                      <el-input
                        id="textareaMsg"
                        type="textarea"
                        placeholder="提出你的想法"
                        v-autoheight
                        :rows="1"
                        v-model="inputMsg"
                        @keyup.enter="handleKeyDown"
                      ></el-input>
                    </div>
                    <div class="enter" @click="sendText">
                      <el-image
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAflBMVEVHcEwlVf8jU/8kVP8kVP8lVf8kVP8lVf8oWP8gUP8lVf8lVP8kVP////+tv/9bf/92lP/I1P8yX/+Rqf/j6f9Aav/k6v+En//x9f8/af9NdP/x9P+ftP/W3/+Sqv+7yv9oif9piv+Dnv+6yf/V3v+svv9Odf+gtf9afv93lf+yo5wqAAAADHRSTlMAYJCP75/P3yAQMKDK7SVNAAAEiElEQVRYw9WZyWKjSAxAyR5366lWdvCa7pn5/x+cA2WMEwfHE/owOtkYnrWVpCqybJTV3dPzo9wsj89Pd6vso7w+/AfYKE+v73CrB/mmPJxp+foi35aXiZI/FuCJvPxYUr+pjquFeCIvgx8fZDF5yLIse5UF5TXLsqclgfdZtrp2T15qH4Gqd2V+ddmssrvZG3xwTKW3V4h3sxb7UA2cNsbYDh+LeeRT9vz5j2UF4NbGD3jTRYDOzwCfs09Lgv8FoObsYqNAMePKx+zTWBSAaz5cr+M8MZvjlUktszUT8hp6fyswL6AdrPVDnPuTVruK7lbgBkhK2ZQxhXNdcqgBcxswnOwVneahG/QsKW4C5oBO4RMZ0vAv7C1AhViP2XgOHIz1lbsBaEZFpj48SusHvf3XgQox3e5L/3tK68pIGFS0Xwb60YO+g62fxqTsNcVDOxEx+VeAO2ArIiI90Ek/MRdgMHZ3EDGDtteA3fGZAFC8D3NKUP8momxFTFQ/D3TQiohIMUTVQIwfM6cXqXoRqc+z/AKwAncMNhDE8U89JQ52HmSHEcldW14xmQS0xzQxWJkSh4h1oipSurWX24AEWRc+EWMLvA0JL66Whv31oFQMmWFPQfCpGxiR9dHDpm6krM7tvQyMKcqnJaJmaC6a/i8XaUQkD6Xx+XXgJi3Y92suRWMDW8mLwos0ZWnLylwDhvToEdi6OAWWwKHgTUS8KUvd1NeAhsFNCRj9WBOHVRwB2uaGapPcn4DbIXlPCVhrHzfNLQU2DIljT/VvCvT5XF++CPQVsL8MDBEo9MauF4A2H5wVx8jT1mKdcwBV1FuAPs7NBzqpEF/teg0zxA0A9W19ufycmE8KxA2jyHqSJyexaUaZNMWvAhPxfBrMWzHFbFrPABOR4jTQbSuGAXSGNwMUM9ZUd9CgWh2/fm7vPFBq5YK065tXyhzyCu4aUKS2k21Au7H+2sbiGlBEvNmFEEK5y+ULksnC8n8E5tpXYSGgVXeweQWXgaU61+XSqKqIyFpV1yKqOq23U+AvAPbuAzDXvUiexrrGAMf+3Yofx+QPQAt0jvARaHHDXLuzkB+B1YhP4+R74AYOYpxxELzdehEx1hoRX/BmamAvos4fgVCALYln5XsC7JNmDrQAl3ajWlcAYbQsAWvooNvwi+nElJ1NXfsEBCAPUTdA00PUDjAmhGAT8DeEyFvfhjMXnQNtAnZNlfRRsAFUSsAEwCWggaC0uPKsIVwGWolgxLqKI9ACxsYTcAf7EujsZ8DIsMkcgR10bgrcijkBLVgD7Hdw+CzKbgrcAs1o8hDlIzDP8wDWp6H+bQJ8PNufdLbzR6AFzAashdh4B73ZJCAUAbYSwddM9qaP00OMIbx2NDk1EfsbwDQVQByBCkb+tls5Az5nP6crwsV+LaWqkU61aVzsatWtrPu49lJrH9de17mqqnZWNTW/tLbTMcvdstXrLls9LgpcZdn9krynP3Hct6SK93/myHTxQ93lj52XPxjPstW3I3P//gXD689v0B7vXy+8r1jd/Vzg9ce/KeZArmAuNtwAAAAASUVORK5CYII="
                        class="enter_icon"
                      />
                    </div>
                  </div>
                </div>
                <div class="policy-wrap">
                  &nbsp;&nbsp;
                  <a target="_blank" href="https://www.nnit.cn/agreement">用户协议</a>
                  &nbsp; <span>|</span> &nbsp;
                  <a target="_blank" href="https://www.nnit.cn/privacypolicy">隐私政策</a>
                </div>
              </div>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </body>
  </html>
</template>
<script>
import { animation, getNowTime, nnitFormatDate } from "@/utils/util";
// import MarkdownItVue from "vue3-markdown-it";
import "highlight.js/styles/a11y-dark.css";
import {
  // AI_HEAD_IMG_URL,
  USER_HEAD_IMG_URL,
  USER_NAME,
} from "@/store/dataInfo";

export default {
  data() {
    return {
      rows: 1,
      sessionList: [],
      chatList: [],
      storeList: [],
      inputMsg: "",
      sid: 1,
      curid: 0,
    };
  },
  directives: {
    //用于自适应文本框的高度
    autoheight: {
      inserted: function (el) {
        var Msg = document.getElementById("textareaMsg").value;
        if (Msg == "") {
          el.style.height = "26px";
        } else {
          el.style.height = el.scrollHeight + "px";
        }
      },
      update: function (el) {
        var Msg = document.getElementById("textareaMsg").value;
        if (Msg == "") {
          el.style.height = "60px";
        } else {
          el.style.height = el.scrollHeight + "px";
        }
      },
    },
  },
  components: {
    // MarkdownItVue,
  },
  methods: {
    handleKeyDown(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        // 按下回车键，没按shift
        this.sendText();
      }
    },
    newLine() {
      this.rows += 1;
      let text = this.$refs.textInput.value;
      text += "\n";
      this.$refs.textInput.value = text;
    },
    onScroll() {
      const scrollDom = this.$refs.chatContent;
      const scrollTop = scrollDom.scrollTop;
      const offsetHeight = scrollDom.offsetHeight;
      const scrollHeight = scrollDom.scrollHeight;
      // 当滚动到底部，设置 isAutoScroll 为 true
      if (scrollTop + offsetHeight === scrollHeight) {
        this.isAutoScroll = true;
      } else {
        // 否则，用户正在手动滑动，设置为 false，停止自动滚动
        this.isAutoScroll = false;
      }
    },
    // 获取窗口高度并滚动至最底层
    scrollBottom() {
      this.$nextTick(() => {
        if (!this.isAutoScroll) return; // 如果 isAutoScroll 为 false，不执行滚动方法
        const scrollDom = this.$refs.chatContent;
        animation(scrollDom, scrollDom.scrollHeight - scrollDom.offsetHeight);
      });
    },
    // 获取对话列表
    getChatList() {
      return this.chatList;
    },
    // 清除当前对话列表
    clearChatList() {
      this.chatList = [];
    },
    // 发送信息
    sendMsg(msgList) {
      this.chatList.push(msgList);
      this.scrollBottom();
    },
    // 发送文字信息
    sendText() {
      if (this.inputMsg.trim() === "") {
        return;
      }
      var dateNow = nnitFormatDate(getNowTime());
      var chatMsg = {
        headImg: USER_HEAD_IMG_URL,
        name: USER_NAME,
        time: dateNow,
        msg: this.inputMsg,
        chatType: 0, //信息类型，0文字，1图片
        uid: "userId", //uid
      };

      var chatMsgAI = {
        headImg: "",
        name: "AI",
        time: dateNow,
        msg: "不明白你在说什么",
        chatType: 0, //信息类型，0文字，1图片
        uid: "AI", //uid
      };

      this.sendMsg(chatMsg);
      this.sendMsg(chatMsgAI);
      this.inputMsg = "";
    },
    // 保存当前会话
    saveSession(sid) {
      // 把当前对话进行保存
      var chatLength = this.chatList.length;
      var chatData = this.chatList[chatLength - 1];

      var session = {
        time: chatData.time,
        title: chatData.msg,
        sid: sid,
        chatList: this.chatList,
      };
      this.sessionList.push(session);
    },

    // 建立新的对话
    addSession() {
      this.saveSession(this.sid);
      this.curid = this.sid;
      this.clearChatList();
      this.sid++;
    },
    // 切换对话
    changeChat(key) {
      console.log("Change  " + this.sessionList.length);
      var session;
      var sessionListNew = [];

      for (var item of this.sessionList) {
        if (item.sid == key) {
          session = item;
        } else {
          sessionListNew.push(item);
        }
      }

      this.sessionList = sessionListNew;

      if (this.chatList.length > 0) {
        this.saveSession(this.curid);
      }

      this.curid = session.sid;
      this.clearChatList();
      this.chatList = session.chatList;
    },

    addChat(no) {
      var msgText = document.getElementById("example" + no).innerText;
      this.inputMsg = msgText;
      this.sendText();
    },
  },
};
</script>
<style lang="scss">
@import url("@/assets/css/ChatMain.css");

.iconfont:hover {
  color: rgb(29, 144, 245);
  .block {
    opacity: 1;
  }
}

.sessionList {
  font-size: 16px;
  color: #000;
  text-align: center;
}

::v-deep {
  .el-textarea__inner {
    background-color: rgb(66, 70, 86);
    border-radius: 15px;
    border: 2px solid rgb(34, 135, 225);
    /* padding: 10px; */
    box-sizing: border-box;
    transition: 0.2s;
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    /* margin: 0 20px; */
    width: 98%;
    height: 70px !important;
  }
}

pre {
  background-color: #211f1f !important;
  border-radius: 20px !important;
  box-shadow: 0px 0px 9px 0px #000000 !important;
  color: #ffff !important;
}

.hljs {
  background-color: #211f1f !important;
  border-radius: 20px !important;
  box-shadow: 0px 0px 9px 0px #000000 !important;
  color: #ffff !important;
}

textarea::-webkit-scrollbar {
  width: 3px;
  /* 设置滚动条宽度 */
}

textarea::-webkit-scrollbar-thumb {
  background-color: rgb(66, 70, 86);
  /* 设置滚动条滑块的背景色 */
  border-radius: 50%;
  /* 设置滑块的圆角 */
}

.spinner {
  width: 50px;
  height: 50px;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.chat-window {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  position: relative;

  .top {
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .head-pic {
      float: left;
    }

    .info-detail {
      float: left;
      margin: 5px 20px 0;

      .name {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
      }

      .detail {
        color: #9e9e9e;
        font-size: 12px;
        margin-top: 2px;
      }
    }

    .other-fun {
      float: right;
      margin-top: 20px;

      span {
        margin-left: 30px;
        cursor: pointer;
      }

      input {
        display: none;
      }
    }
  }

  .textarea {
    &:focus {
      outline: none;
    }
  }

  .botoom {
    width: 100%;
    height: 85vh;
    background-size: 100% 100%;
    // background-color: rgb(50, 54, 68);
    border-radius: 20px;
    padding: 0px;
    box-sizing: border-box;
    position: relative;

    .chat-content {
      width: 100%;
      height: 85%;
      overflow-y: scroll;
      padding: 20px;
      box-sizing: border-box;

      &::-webkit-scrollbar {
        width: 3px;
        /* 设置滚动条宽度 */
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgb(66, 70, 86);
        /* 设置滚动条滑块的背景色 */
        border-radius: 50%;
        /* 设置滑块的圆角 */
      }

      .chat-friend {
        width: 100%;
        float: left;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        .chat-text {
          float: left;
          max-width: 90%;
          padding: 15px;
          max-width: 650px;
          border-radius: 20px 20px 20px 5px;
          background-color: #fff;
        }

        .chat-img {
          img {
            max-width: 300px;
            max-height: 200px;
            border-radius: 10px;
          }
        }

        .info-time {
          margin: 10px 0;
          color: #fff;
          font-size: 14px;
          display: flex;
          justify-content: flex-start;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }

          span {
            line-height: 30px;
          }

          span:last-child {
            color: rgb(101, 104, 115);
            margin-left: 10px;
            vertical-align: middle;
          }
        }
      }

      .chat-me {
        width: 100%;
        float: right;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        .chat-text {
          float: right;
          max-width: 90%;
          padding: 15px;
          border-radius: 20px 20px 5px 20px;
          background-color: #95ec69;
          color: #000;
          word-break: break-all;
        }

        .chat-img {
          img {
            max-width: 300px;
            max-height: 200px;
            border-radius: 10px;
          }
        }

        .info-time {
          margin: 10px 0;
          color: #fff;
          font-size: 14px;
          display: flex;
          justify-content: flex-end;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            vertical-align: middle;
            margin-left: 10px;
          }

          span {
            line-height: 30px;
          }

          span:first-child {
            color: rgb(101, 104, 115);
            margin-right: 10px;
            vertical-align: middle;
          }
        }
      }
    }

    .chatInputs {
      width: 100%;
      position: absolute;
      bottom: 0;
      margin: 3%;
      display: flex;
      background-color: #323644;
      .boxinput {
        width: 50px;
        height: 50px;
        background-color: rgb(50, 54, 68);
        border-radius: 15px;
        border: 1px solid rgb(80, 85, 103);
        box-shadow: 0px 0px 5px 0px rgb(0, 136, 255);
        position: relative;
        cursor: pointer;

        img {
          width: 30px;
          height: 30px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .emoji {
        transition: 0.3s;
        width: 50px;
        min-width: 50px;
      }

      .luyin {
        color: #fff;
        margin-left: 1.5%;
        font-size: 30px;
        text-align: center;
        transition: 0.3s;
        width: 50px;
        min-width: 50px;
      }

      .inputs {
        width: 95%;
        height: 50px;
        background-color: rgb(66, 70, 86);
        border-radius: 15px;
        border: 2px solid rgb(34, 135, 225);
        padding: 10px;
        box-sizing: border-box;
        transition: 0.2s;
        font-size: 20px;
        color: #fff;
        font-weight: 100;
        margin: 0 20px;

        &:focus {
          outline: none;
        }
      }

      .send {
        background-color: rgb(29, 144, 245);
        border: 0;
        transition: 0.3s;
        box-shadow: 0px 0px 5px 0px rgba(0, 136, 255);

        &:hover {
          box-shadow: 0px 0px 10px 0px rgba(0, 136, 255);
        }
      }
    }
  }
}

.line {
  position: relative;
  width: 94%;
  margin-left: 2%;
  height: 2px;
  background: linear-gradient(to right, red, yellow, green);
  animation: shrink-and-expand 2s ease-in-out infinite;
}

.line::before,
.line::after {
  content: "";
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: inherit;
}

.line::before {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  left: 0;
  transform-origin: left;
  animation: shrink-left 2s ease-in-out infinite;
}

.line::after {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  right: 0;
  transform-origin: right;
  animation: shrink-right 2s ease-in-out infinite;
}

@keyframes shrink-and-expand {
  0%,
  100% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(0);
  }
}

@keyframes shrink-left {
  0%,
  50% {
    transform: scaleX(1);
  }

  50.1%,
  100% {
    transform: scaleX(0);
  }
}

@keyframes shrink-right {
  0%,
  50% {
    transform: scaleX(1);
  }

  50.1%,
  100% {
    transform: scaleX(0);
  }
}
@media only screen and (min-width: 768px) {
  // 当屏幕宽度大于或等于768px时
  .chat-window {
    margin-left: 20px;
    .botoom {
      padding: 20px;
    }
  }
  .chat-window {
    .botoom {
      .chatInputs {
        width: 90%;
      }
    }
  }
}
</style>
