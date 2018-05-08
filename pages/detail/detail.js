Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.price);
    this.data.price = options.price;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      price: this.data.price
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  to_pay : function() {
    wx.navigateTo({
      url: '../../pages/buy/buy',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },



  data: {
    price:null
  }
})