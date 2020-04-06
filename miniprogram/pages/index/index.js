const app = getApp()
const db=wx.cloud.database();
Page({
  data: {
    luckyNum:'200208',
    num1:2,num2:0,num3:0,num4:2,num5:0,num6:8,
    type:0, 
    qrCode:'',
    hidden:true,

    disabled:true,
    disabled2:false,
    userInfo:'',

    code: "E7AI98",
    inputValue: "",
    maskHidden: false,
    name: "",
    touxiang: "",
    backgroundPicSrcDetail:'',
    mysteryPicSrcDetail:'',
    backgroundPicSrc: [
      'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIGXTSriaadibXZI1hkpAictR1RicRKg7sGbicOztEibQJfxz28nj8ggATgN9A/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIicxCvKJiaoklBqfwdxpfaz0KDMjqCbiaWJHQLiboz3y5nIsWYXexia6Wbbg/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApI5YhUmcfaTlICPoPljFJzoCpReUSLegbuzic2QdFXMl7FtgWnCMTzxdw/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIicukR7nyvOw8aqp3W2JicucgXNiaQicj0yNSlc1fjvXcMibSSibOEib0Km4Og/0?wx_fmt=png', 'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIz7Zc7ffs8w2kOFDr1VAXj3FM1PTAx0O7DkA2KEkmK6XiaCDrUibiaC4yg/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIT1DVibctyb23tr22ica7hssDHehicLBbQx5DiaFOkgLuib6Z7Uib26FiaSIlw/0?wx_fmt=png' ],
    mystery: [
      'https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIqpwrUcS3GYYoNR2Gs7tS8Cv8HYyrkExBeH6FSZM1DJsnMMw8jqVUZQ/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIv3kBuIwLonPqLmEb6j08cF245ztJknA3eHfI8wtuBl0InDKASP7JHw/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIew6MnYMJ4VmQhr3mSdNkjHRdWDtibicxb8lHkialgibHBvBn2dDHjFbntA/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIX1f2UGnqwdCBTgzsaiaT3ibA5gc6eCLJYLmAn7jpZ8VMyLE86xV6W4QQ/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIdwflK074Js2GiaVVyBWtpsmibW0AfAEaB5PjSMO3iblQI1B30ibxIjjcDQ/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIwK94xhzRQVjOcDxfVXAZx6ibCPNm9lz4l1Lq9jicNgefM8TJndiagUjPg/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApINwQh0pCk1FFfs4w9gM75jRICCCfzhupBBf9xLk4v1utsVHjSQKrlQA/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIZ2YQMhbyFIXvicbJJsERn8yftdX7qW0micBZzYHkDtbSMiaYUSdYLicBGw/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIafIH2oRw5voKGo2VmHnWJwdbD0xVTiaMqfaXvyQiczXLhoXglBrzPG4g/0?wx_fmt=png','https://mmbiz.qpic.cn/mmbiz_png/bz1d0u9o51XPJsSicG0exFVReC6Y8AApIIEkDK31q64K31mrhsS4OZfhQGG6oJiaoWcdS9sRAzZLlZAKzdwpVL2A/0?wx_fmt=png'
    ]
  },

  getUserInfo:function(e){
    console.log(e.detail.userInfo.avatarUrl)
    this.setData({
      userInfo: e.detail.userInfo.avatarUrl,
    })
    var that=this;
    wx.getImageInfo({
      src: e.detail.userInfo.avatarUrl,
      success: function (res) {
        that.setData({
          touxiang: res.path,
        })
        wx.downloadFile({
          url: res.path,
          complete: result => {
            console.log(result.tempFilePath)
            that.setData({
              touxiang: res.path,
              disabled: false,
              disabled2: true
            })
          }
        })
      }
    })
  },

  input1:function(e){
    this.setData({
      luckyNum:e.detail.value
    })
  },

  count:function(){
    var that = this;
    db.collection('count').doc('79dec657-b339-4e17-81fb-8e86441563d9').get().then(res => {
      console.log(res.data);
      that.setData({ count1: res.data.count1 })
      console.log(res.data.count1 + 1)
      wx.cloud.callFunction({
        name: 'addCount1',
        data: {
          count1: res.data.count1 + 1
        },
      })
    })
  },
  sleep: function (numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },

  onLoad:function(){
    this.count();
  },

  generate:function(){
    //排除错误输入
    if (this.data.luckyNum.length != 6 ){
      wx.showModal({
        title: '提示',
        content: '幸运数字应设成6位',
        showCancel:false,
        success:function(res){
          if(res.confirm) return
        }
      })
    }
    else{
      console.log('starting')
      //输入幸运数字的处理
      var lucky=this.data.luckyNum;
      this.setData({
        num1:parseInt(lucky.slice(0,1)),
        num2: parseInt(lucky.slice(1, 2)),
        num3: parseInt(lucky.slice(2, 3)),
        num4: parseInt(lucky.slice(3, 4)),
        num5: parseInt(lucky.slice(4, 5)),
        num6: parseInt(lucky.slice(5, 6)),
      })
      var that=this;
      var ran = parseInt(Math.random() * 6)
      var ran2 =parseInt(Math.random() * 10)
      console.log(ran);
      console.log(ran2);
      this.setData({disabled:true})
      wx.downloadFile({
        url:that.data.backgroundPicSrc[ran],
        complete: result => {
          console.log(result.tempFilePath)
          if (result.tempFilePath==undefined){that.webBug();return}
          that.setData({
            backgroundPicSrcDetail: result.tempFilePath,
          })
          wx.downloadFile({
            url: that.data.mystery[ran2],
            complete: result2 => {
              console.log(result2.tempFilePath)
              if (result2.tempFilePath == undefined) { that.webBug(); return }
              that.setData({
                mysteryPicSrcDetail: result2.tempFilePath,
              })
              wx.cloud.downloadFile({
                fileID:'cloud://thugift-vgnh9.7468-thugift-vgnh9-1301225307/test.png',
                success: function (result3){
                  console.log(result3.tempFilePath)
                  if (result3.tempFilePath == undefined) { that.webBug(); return }
                  that.setData({
                    qrCode: result3.tempFilePath,
                    disabled:false
                  })
                  that.startDrawing()
                }
              })
            }
          })
        }
      })
    }
  },

  startDrawing:function(){
    var that=this;
    console.log('startDrawing');
    this.setData({ hidden: false,disabled: true})
    this.sleep(2000);
    this.setData({ hidden: true, disabled: false})
    that.createImage();
  },

  createImage:function(){
    console.log('start to create');
    this.setData({
      maskHidden:true
    })
    var that = this;
    var context = wx.createCanvasContext('mycanvas');
    context.draw();
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    //context.setFillStyle("#ffe200")
    //context.fillRect(windowWidth/2-100, 10, 200, 200)
    context.stroke()
    context.draw()
    var lanternPath = ["/images/lantern/00.png", "/images/lantern/11.png", "/images/lantern/22.png", "/images/lantern/33.png", "/images/lantern/44.png", "/images/lantern/55.png", "/images/lantern/66.png", "/images/lantern/77.png", "/images/lantern/88.png", "/images/lantern/99.png" ];
    console.log(0)
    context.drawImage(this.data.backgroundPicSrcDetail, 0, 0, windowWidth * 650 / 750, windowWidth * 1210 / 750);
    console.log(1)
    context.stroke();
    context.setFontSize(11);
    context.setFillStyle('#660874');
    context.setTextAlign('center');
    context.fillText(this.data.count1, windowWidth * 390 / 750, windowWidth * 710 / 750);
    context.drawImage(this.data.mysteryPicSrcDetail, windowWidth * 380 / 750, windowWidth * 330 / 750, windowWidth * 175 / 750, windowWidth * 283 / 750);
    context.stroke();
    context.drawImage(this.data.touxiang, windowWidth * 242 / 750, windowWidth * 127 / 750, windowWidth * 125 / 750, windowWidth * 125 / 750)
    context.stroke();
    context.drawImage(lanternPath[this.data.num1], windowWidth * 52 / 750, windowWidth * 60 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(lanternPath[this.data.num2], windowWidth * 52 / 750, windowWidth * 225 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(lanternPath[this.data.num3], windowWidth * 52 / 750, windowWidth * 390 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(lanternPath[this.data.num4], windowWidth * 52 / 750, windowWidth * 555 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(lanternPath[this.data.num5], windowWidth * 52 / 750, windowWidth * 720 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(lanternPath[this.data.num6], windowWidth * 52 / 750, windowWidth * 875 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    var tailPath = ["/images/tail/1.png", "/images/tail/2.png", "/images/tail/3.png"];
    var ran3=parseInt(Math.random()*3)
    context.drawImage(tailPath[ran3], windowWidth * 52 / 750, windowWidth * 1005 / 750, windowWidth * 140 / 750, windowWidth * 140 / 750);
    context.stroke();
    context.drawImage(this.data.qrCode, windowWidth * 470 / 750, windowWidth * 670 / 750, windowWidth * 90 / 750, windowWidth * 90 / 750);
    context.stroke();
    context.draw();
    
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
            canvasHidden: true
          });
        },
        fail: function (res) {
          console.log(res);
        }
      });
    }, 200);
  },

  baocun: function () {
    var that = this
    console.log('start to save')
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
              that.count();
            }

          }, fail: function (res) {
            console.log(11111)
          }
        })
      }
    })
  },

  baocun2:function(){
    this.setData({
      maskHidden:false
    })
    this.count();
  },

  webBug:function(){
    this.setData({
      disabled:false
    })
    wx.showModal({
      title: '提示',
      content: '网络故障 请重启小程序',
      showCancel:false
    })
  }

})
