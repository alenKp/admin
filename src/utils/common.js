import { getBrowser } from '@/utils/userAgentUtil'
/**
 * 成功的toast
 * @param { Object } this_
 * @param { String } str
 * @returns { void }
 */
export const successMsg = (this_, str) => {
  if (!this_) {
    return
  }
  this_.$message.success(str)
}
/**
 * 警告的toast
 * @param { Object } this_
 * @param { String } str
 * @returns { void }
 */
export const warningMsg = (this_, str) => {
  if (!this_) {
    return
  }
  this_.$message.warning(str)
}
/**
 * 通知的toast
 * @param { Object } this_
 * @param { String } str
 * @returns { void }
 */
export const infoMsg = (this_, str, duration = 3000, iconClass = undefined) => {
  if (!this_) {
    return
  }
  this_.$message({
    iconClass,
    duration,
    showClose: true,
    message: str
  })
}
/**
 * 错误的toast
 * @param { Object } this_
 * @param { String } str
 * @returns { void }
 */
export const errorMsg = (this_, str) => {
  if (!this_) {
    return
  }
  this_.$message.error(str)
}
/**
 * 对象深拷贝
 * @param { Object } obj
 * @returns {Object} obj
 */
export const jsonDeepClone = obj => {
  if (obj && obj instanceof Object) {
    return JSON.parse(JSON.stringify(obj))
  } else {
    return obj
  }
}
/**
 * 生成随机串
 * @returns {string} uuid
 */
export const uuid = () => {
  let s = []
  let hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = '4'
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}
/**
 * 保留两位小数
 * @param {Number} x
 * @returns {string} s
 */
export const toDecimal2 = x => {
  let f = parseFloat(x)
  if (isNaN(f)) {
    return false
  }
  f = Math.round(x * 100) / 100
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
}
/**
 * 分转元
 * @param {Number} fen
 * @returns {Number} num
 */
export const regFenToYuan = fen => {
  let num = fen
  num = fen * 0.01
  num += ''
  let reg =
    num.indexOf('.') > -1
      ? /(\d{1,3})(?=(?:\d{3})+\.)/g
      : /(\d{1,3})(?=(?:\d{3})+$)/g
  num = num.replace(reg, '$1')
  num = toDecimal2(num)
  return num
}
/**
 * 元转分
 * @param {Number} yuan
 * @param {Number} digit
 * @returns {Number} 分
 */
export const regYuanToFen = (yuan, digit = 100) => {
  let m = 0,
    s1 = yuan.toString(),
    s2 = digit.toString()
  try {
    m += s1.split('.')[1].length
    // eslint-disable-next-line no-empty
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return (
    (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
    Math.pow(10, m)
  )
}

// 时间补零
function addZero(num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}

// 时间格式化
export const dataFormat = time => {
  let date = new Date(time * 1000)
  time =
    date.getFullYear() +
    '-' +
    addZero(date.getMonth() + 1) +
    '-' +
    addZero(date.getDate()) +
    ' ' +
    addZero(date.getHours()) +
    ':' +
    addZero(date.getMinutes()) +
    ':' +
    addZero(date.getSeconds())
  return time
}

// 获取客户端类型
export const getPlatform = () => {
  return 3
}

// 获取客户端操作系统版本
export const getOsVersion = () => {
  return getBrowser()
}

// 商品推荐类型列表
export const recommendList = [
  {
    name: '新品首发',
    id: '1'
  },
  {
    name: '配件',
    id: '2'
  },
  {
    name: '耗材',
    id: '3'
  },
  {
    name: '第三方',
    id: '4'
  },
  {
    name: '新品专区',
    id: '5'
  },
  {
    name: '热销专区',
    id: '6'
  }
]
// 商品状态
export const goodsStatusList = [
  {
    name: '草稿',
    id: 1
  },
  // {
  //   name: '未发布',
  //   id: 2
  // },
  {
    name: '上架中',
    id: 3
  },
  {
    name: '已下架',
    id: 4
  },
  {
    name: '已删除',
    id: 5
  },
  {
    name: '已售罄',
    id: 6
  }
]

// 分类列表
export const classTypeList = [
  {
    name: '商品',
    id: 1
  },
  {
    name: '标签',
    id: 2
  }
]
// 订单管理，关闭订单原因
export const orderCloseReason = [
  {
    name: '买家联系商家关闭订单',
    id: 0
  },
  {
    name: '卖家库存不足',
    id: 1
  },
  {
    name: '其他',
    id: 2
  }
]

// 订单管理状态列表
export const orderStatusList = [
  {
    name: '待付款',
    id: 1
  },
  {
    name: '待发货',
    id: 2
  },
  {
    name: '待收货',
    id: 4
  },
  {
    name: '待评价',
    id: 5
  },
  {
    name: '订单已完成',
    id: 6
  },
  {
    name: '订单已取消',
    id: 7
  },
  {
    name: '订单已关闭',
    id: 8
  }
]
// 小语种列表
export const langList = [
  {
    name: '英文',
    key: 'OS_LANG_EN',
    value: 0
  },
  {
    name: '简体中文',
    key: 'OS_LANG_ZH',
    value: 1
  },
  // {
  //   name: "台湾繁体",
  //   key: "OS_LANG_ZH_TW",
  //   value: 2
  // },
  // {
  //   name: "香港繁体",
  //   key: "OS_LANG_ZH_HK",
  //   value: 3
  // },
  {
    name: '俄罗斯语',
    key: 'OS_LANG_RU',
    value: 4
  },
  {
    name: '韩语',
    key: 'OS_LANG_KR',
    value: 5
  },
  {
    name: '阿拉伯语言',
    key: 'OS_LANG_XA',
    value: 6
  },
  {
    name: '西班牙语',
    key: 'OS_LANG_ES',
    value: 7
  },
  {
    name: '德语',
    key: 'OS_LANG_DE',
    value: 8
  },
  {
    name: '法语',
    key: 'OS_LANG_FR',
    value: 9
  },
  {
    name: '日语',
    key: 'OS_LANG_JP',
    value: 10
  },
  {
    name: '葡萄牙语言',
    key: 'OS_LANG_PT',
    value: 11
  }
]
