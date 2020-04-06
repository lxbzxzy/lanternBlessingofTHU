const app = getApp()
const db = wx.cloud.database()
Page({
  onShareAppMessage: function () {
    return {
      title: '抽取清华密语签',
      path: '/pages/login/index'
    }
  },
  
  data:{
    input1:'',
    input2:'',
    input3:'',
    wxId:'',
    wxlogin:false,
    name:'',
    disabled:true
  },
  
  jump:function(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }

})
