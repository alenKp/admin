// 广告管理状态
export const TAB_STATUS = {
  WAIT_START: 'wait-start',
  PROCESSING: 'processing',
  END: 'end',
  OFF_SHELF: 'off-shelf'
}

// 广告管理状态对应的id
const _STATUS_NUMBER = []
Object.keys(TAB_STATUS).forEach(status => {
  _STATUS_NUMBER.push(TAB_STATUS[status])
})
export const STATUS_NUMBER = _STATUS_NUMBER

// 广告位置
export const ADV_POSITION = [
  { idx: 0, title: '全部' },
  { idx: 1, title: '首页Banner' },
  { idx: 2, title: '首页广告位1' },
  { idx: 3, title: '首页广告位2' },
  { idx: 4, title: '栏目1 Banner' },
  { idx: 5, title: '栏目2 Banner' },
  { idx: 6, title: '栏目3 Banner' },
  { idx: 7, title: '栏目4 Banner' },
  { idx: 8, title: '栏目5 Banner' },
  { idx: 9, title: '栏目6 Banner' },
  { idx: 10, title: '栏目7 Banner' },
  { idx: 11, title: '服务导航 Banner' },
  { idx: 12, title: '关于我们 Banner' },
  { idx: 13, title: 'Top 20' }
]

// 广告 banner 尺寸
export const ADV_SIZE = [
  [{ width: 1920, height: 550 }],
  [{ width: 1920, height: 550 }],
  // 首页广告位2，预留
  [{ width: 1920, height: 400 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1200, height: 350 }],
  [{ width: 1920, height: 500 }],
  [{ width: 1920, height: 500 }],
  [{ width: 1200, height: 350 }]
]

// 广告状态 2：上架 4：下架
export const ON_SHELF = 2
export const OFF_SHELF = 4

// 广告操作类型
export const ADD = '新增'
export const EDIT = '编辑'

// 修改货币状态 删除：4
export const CURRENCY_STATUS_DEL = 4

// 经销商状态
export const DEALER_STATUS_LIST = [
  { id: 2, title: '正常' },
  { id: 3, title: '禁用' }
]

// 意见反馈状态
export const FEEDBACK_STATUS_LIST = [
  { id: 1, title: '待处理' },
  { id: 2, title: '已处理' }
]

// SEO管理页面列表
export const SEO_PAGES = [
  { position: 1, title: '首页' },
  { position: 2, title: '耗材' },
  { position: 3, title: '配件' },
  { position: 4, title: '选品' },
  { position: 5, title: '第三方' },
  { position: 6, title: '服务导航' },
  { position: 7, title: '关于我们' }
]
