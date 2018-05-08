
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  login: function() {
    wx.login({
      success : function(res) {
        if(res.code) {
          wx.showToast({
            title: res.code,
          })
        }
      }
      
    })
  }
})