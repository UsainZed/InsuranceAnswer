// pages/result/result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: null,
    avatarUrl: "",
    images: [
      '../../doc/images/yixing.png',
      '../../doc/images/erxing.png',
      '../../doc/images/sanxing.png',
      '../../doc/images/sixing.png',
      '../../doc/images/wuxing.png'
    ],
    currentImage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        if (res && res.userInfo) {
          that.setData({
            avatarUrl: res.userInfo.avatarUrl
          })
        }
      }
    })
    this.setData({
      count: Number(options.count) || 3,
      currentImage: that.data.images[Number(options.count)]
    })
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

  }
})