// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'thugift-vgnh9',
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('count').doc('79dec657-b339-4e17-81fb-8e86441563d9').update({
      data: {
        count1:event.count1
      }
    })
  } catch (e) {
    console.error(e)
  }
}