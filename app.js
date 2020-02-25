//app.js
App({
  onLaunch: function () {
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = 'https://img.tukuppt.com/newpreview_music/09/01/72/5c8a08dc4956424741.mp3';
    innerAudioContext.loop = true;
    innerAudioContext.play();
  },
  globalData: {
    userInfo: null
  }
})