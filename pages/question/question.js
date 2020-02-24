// pages/sequence/sequence.js
var qs = require('../../resource/res.js')
var QC = new require('../../utils/question_control.js')
var questioncontrol = QC.questionControl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: qs.questions,
    imgs: [
      '../../doc/images/chose_one.png',
      '../../doc/images/chose_two.png'
    ],
    immuneNum: 2,
    protectNum: 2,
    loveNum: 2,
    moodNum: 2,
    showModal: false,
    showAlchol: false,
    showMask: false,
    showGoggles: false,
    showGlove: false,
    showImmune: false,
    showProtect: false,
    showMood: false,
    showLove: false,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    // const t = options.type
    questioncontrol.vid = -1
    questioncontrol.view_list = self.generateList(questioncontrol.getQuestionCount())
    self.nextQuestion()
    // this.setData({
    //   learning_type: t
    // })
    // let view_list = wx.getStorageSync(t + 'list')
    // let favorite_list = wx.getStorageSync('favorite_list')
    // if (favorite_list) {
    //   favorite_list = favorite_list.split(',').map(x => parseInt(x))
    //   questioncontrol.setFavoriteList(favorite_list)
    // }
    // if (t == 'favorite') {
    //   questioncontrol.view_list = favorite_list
    //   questioncontrol.vid = -1
    //   self.nextQuestion()
    //   return
    // }
    // let wrong_list = wx.getStorageSync('wrong_list')
    // if (wrong_list) {
    //   wrong_list = wrong_list.split(',').map(x => parseInt(x))
    //   questioncontrol.setWrongList(wrong_list)
    // }

    // let vid = wx.getStorageSync(t + 'vid')
    // if (vid) {
    //   vid = parseInt(vid)
    // } else {
    //   vid = 0
    // }

    // if (vid > 3) {
    //   view_list = view_list.split(',').map(x => parseInt(x))
    //   wx.showModal({
    //     title: '是否继续学习',
    //     content: '上次你学习到' + (vid + 1) + '个问题，是否继续？',
    //     success: function (res) {
    //       if (res.confirm) {
    //         questioncontrol.vid = vid - 1
    //         questioncontrol.view_list = view_list
    //         self.nextQuestion()
    //       } else {

    //       }
    //     },
    //     fail: function () {

    //     }
    //   })
    // } else {
    //   questioncontrol.vid = -1
    //   questioncontrol.view_list = self.generateList(t, questioncontrol.getQuestionCount())
    //   self.nextQuestion()
    // }
  },
  generateList: function (count) {
    var list = [];
    for (var i = 0; i < count; i++) {
      list.push(i);
    }
    // if (t == 'random') {
    //   list = this.shuffle(list)
    // }
    return list
  },

  shuffle: function (a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  nextQuestion: function () {
    if (questioncontrol.finishedYet()) {
      console.log(this.data.count)
      let that = this
      wx.redirectTo({
        url: '../result/result?count=' + that.data.count,
      })
      // wx.showModal({
      //   title: 'Congratulations!',
      //   content: '全部学完了',
      // })
      // return
    }
    let question = questioncontrol.getNextQuestion()
    let favorite = questioncontrol.isFavorite()
    this.setNewQuestion(question, favorite)
  },
  previousQuestion: function () {
    let question = questioncontrol.getPreviousQuestion()
    let favorite = questioncontrol.isFavorite()
    this.setNewQuestion(question, favorite)
  },
  setNewQuestion: function (question, favorite) {
    this.setData({
      question: question,
      answer: question.answer,
      favorite: favorite,
      correctid: '',
      wrongid: '',
      disable: '',
      pending: false
    })
  },
  choseAnswer(e) {
    let totalNum = this.data.count
    let obj = e.currentTarget.dataset.obj;
    let immuneNum, protectNum, loveNum, moodNum;
    let currentImmuneNum = this.data.immuneNum + obj.immuneNum
    let currentProtectNum = this.data.protectNum + obj.protectNum
    let currentLoveNum = this.data.loveNum + obj.loveNum
    let currentMoodNum = this.data.moodNum + obj.moodNum
    let conutine = false
    if (currentMoodNum > 0 && currentLoveNum > 0 && currentProtectNum > 0 && currentImmuneNum > 0) {
      conutine = true
    }
    console.log(conutine)
    if (this.data.immuneNum == 12) {
      immuneNum = 12
    } else {
      immuneNum = this.data.immuneNum + obj.immuneNum
      if (immuneNum >= 12 && conutine) {
        immuneNum = 12
        this.setData({
          showModal: true,
          showAlchol: true,
          count: totalNum + 1
        })
      }
      if (immuneNum <= 0) {
        this.setData({
          showModal: true,
          showImmune: true,
          immuneNum: 0
        })
      }
    }
    if (this.data.protectNum == 20) {
      protectNum = 20
    } else {
      protectNum = this.data.protectNum + obj.protectNum
      if (protectNum >= 20 && conutine) {
        protectNum = 20
        this.setData({
          showModal: true,
          showMask: true,
          count: totalNum + 1
        })
      }
      if (protectNum <= 0) {
        this.setData({
          showModal: true,
          showProtect: true,
          protectNum: 0
        })
      }
    }
    if (this.data.loveNum == 17) {
      loveNum = 17
    } else {
      loveNum = this.data.loveNum + obj.loveNum
      if (loveNum >= 17 && conutine) {
        loveNum = 17
        this.setData({
          showModal: true,
          showGlove: true,
          count: totalNum + 1
        })
      }
      if (loveNum <= 0) {
        this.setData({
          showModal: true,
          showLove: true,
          loveNum: 0
        })
      }
    }
    if (this.data.moodNum == 10) {
      moodNum = 10
    } else {
      moodNum = this.data.moodNum + obj.moodNum
      if (moodNum >= 10 && conutine) {
        moodNum = 10
        this.setData({
          showModal: true,
          showGoggles: true,
          count: totalNum + 1
        })
      }
      if (moodNum <= 0) {
        this.setData({
          showModal: true,
          showMood: true,
          moodNum: 0
        })
      }
    }
    if (immuneNum > 0 && protectNum > 0 && loveNum > 0 && moodNum > 0) {
      this.setData({
        immuneNum: immuneNum,
        protectNum: protectNum,
        loveNum: loveNum,
        moodNum: moodNum
      })
      if (!this.data.showAlchol && !this.data.showGlove && !this.data.showGoggles && !this.data.showMask) {
        this.nextQuestion()
      }
    }
  },
  resetGame() {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  continue () {
    this.setData({
      showModal: false,
      showAlchol: false,
      showMask: false,
      showGoggles: false,
      showGlove: false
    })
    this.nextQuestion()
  },
  selectAnswer: function (evt) {
    self = this
    let selected = evt.currentTarget.dataset.id
    let act = this.data.answer
    if (selected == act) {
      this.setData({
        correctid: selected,
        disable: 'disabled',
        pending: true
      })
      setTimeout(function () {
        self.nextQuestion()
      }, 1000)
    } else {
      this.setData({
        wrongid: selected
      })
    }
  },
  addFavorite: function () {
    let isFavorite = questioncontrol.toggleFavorite()
    this.setData({
      favorite: isFavorite
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
    // var animation = wx.createAnimation({
    //   duration: 100,
    //   timingFunction: 'ease',
    // })

    // this.animation = animation

    // animation.translate(10).step()
    // animation.translate(-10).step()
    // animation.translate(0).step()

    // this.setData({
    //   animationData: animation.export()
    // })
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
    let t = this.data.learning_type
    if (questioncontrol.finishedYet()) {
      wx.removeStorageSync(t + 'list')
      wx.removeStorageSync(t + 'vid')
      wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
      return
    }
    wx.setStorageSync(t + 'list', questioncontrol.view_list.toString())
    wx.setStorageSync(t + 'vid', questioncontrol.vid)
    wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
    return
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