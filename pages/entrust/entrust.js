
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBoy: true,
    pcode: 2365

  },
  login: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.showToast({
            title: res.code,
          })
        }
      }

    })
  },
  changeSex: function () {
    this.setData({
      isBoy: !this.data.isBoy,
      isGirl: !this.data.isGirl
    });
  },
  lookProtocol: function () {
    wx.navigateTo({
      url: '../../pages/protocol/protocol',
    })
  },
  randomCode: function() {
    var num = Math.floor(Math.random() * 10000);
    this.setData({
        pcode: num
    });
  }
})