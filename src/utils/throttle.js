export default function(fn, interval) {
  const _self = fn
  let timer = null
  let first = true // 添加一个first参数，让我们的任务第一次就被执行

  return function() {
    const _me = this
    const args = arguments

    // 如果是第一次执行，则立刻执行任务
    if (first) {
      _self.apply(_me, args)
      // 执行完任务之后，值设置为 false
      return (first = false)
    }

    // 如果上一次定时器任务还在，则直接返回，接着执行上一次的任务
    if (timer) return

    timer = setTimeout(function() {
      // 定时器任务执行后，一定要清除这一次的定时器，不然上面的判断永远为true
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, interval || 500)
  }
}
