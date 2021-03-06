
var app = getApp()
var count = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["../../imgs/swiper_recommend.jpg",
      "../../imgs/swiper_recommend.jpg",
      "../../imgs/swiper_recommend.jpg",
      "../../imgs/swiper_recommend.jpg"],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../imgs/no-star.png',
    selectedSrc: '../../imgs/full-star.png',
    halfSrc: '../../imgs/half-star.png',
    key: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //点击左边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    count = key
    this.setData({
      key: key
    })
  },
  //点击右边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    count = key
    this.setData({
      key: key
    })
  },
  startEvent: function (e) {
    console.log(e);
  }
})