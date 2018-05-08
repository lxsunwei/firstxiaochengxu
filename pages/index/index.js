//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    orders: [
      { name: "杨先生", loan: 25, month: 24, price: 84, icon: "../../imgs/graborder/ic_filter_identity.png",
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"},
      { name: "李先生", loan: 10, month: 12, price: 78, icon: "../../imgs/graborder/ic_filter_identity.png" ,
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"},
      { name: "杨先生", loan: 25, month: 24, price: 84, icon: "../../imgs/graborder/ic_filter_identity.png",
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"},
      { name: "李先生", loan: 10, month: 12, price: 78, icon: "../../imgs/graborder/ic_filter_identity.png",
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"},
      { name: "杨先生", loan: 25, month: 24, price: 84, icon: "../../imgs/graborder/ic_filter_identity.png",
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"},
      { name: "李先生", loan: 10, month: 12, price: 78, icon: "../../imgs/graborder/ic_filter_identity.png",
        desc: "上班族 | 全部打卡 | 月打卡工资6，000", date: "03-29 16:15"}
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function () {
    console.log("-----refresh");
  },
  navBuy: function() {
    var price = (this.data.orders)[0].price;
    wx.navigateTo({
      url: '../../pages/detail/detail?price=' + price,
    })  
  }
})
