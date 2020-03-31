import Clipboard from 'clipboard'
import { Toast } from 'mint-ui'
export function timer(btnContent) {
  let time = 60
  if (time > 0) {
    time--
    btnContent = time + 's'
    let timer = setTimeout(timer, 1000)
  } else if (time === 0) {
    btnContent = '发送'
    clearTimeout(timer)
  }
}
// 复制订单号
export function copy() {
  let clipboard = new Clipboard('.tag-read')
  clipboard.on('success', e => {
    Toast({
      message: '复制成功',
      duration: 1800
    })
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on('error', e => {
    // 不支持复制
    console.log('该浏览器不支持自动复制')
    // 释放内存
    clipboard.destroy()
  })
}

// 获取当前时间
export default {
  copy,
  Toast,
  timer,
}