
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBoy: true,
    isGirl: false,
    pcode: 2365,
    identity: "上班族",
    identites: ["上班族", "企业主", "个体户", "其他"],
    amount: "10万",
    amounts: ["5万", "10万", "20万", "30万", "40万", "80万"],
    smsCode: "点击获取",
    btnSmsCodeDisabled : false,
    btn_sms_code_border_color: "#f95050"
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
  randomCode: function () {
    var num = Math.floor(Math.random() * 10000);
    this.setData({
      pcode: num
    });
  },
  selectIdentity: function (e) {
    this.setData({
      identity: this.data.identites[e.detail.value]
    });
  },
  selectLoanAmount: function (e) {
    this.setData({
      amount: this.data.amounts[e.detail.value]
    });
  },
  timeInterval: function() {
    var time = 60;
    this.setData({
      smsCode: time + "s",
      btnSmsCodeDisabled: true,
      btn_sms_code_border_color: "#d6d6d6"
    });
    var timer = setInterval(function(){
      time = time - 1;
      if (time == 0) {
        clearInterval(timer);
        this.setData({
          smsCode: "点击获取",
          btnSmsCodeDisabled: false,
          btn_sms_code_border_color: "#f95050"
        });
      } else {
          this.setData({
            smsCode: time + "s",
            btnSmsCodeDisabled : true,
            btn_sms_code_border_color: "#d6d6d6"
          });
      }
    }.bind(this), 1000);
    
  }
})