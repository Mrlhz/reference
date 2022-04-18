/**
 * Publisher ：发布者，当消息发生时负责通知对应订阅者
 * Subscriber ：订阅者，当消息发生时被通知的对象
 * SubscriberMap ：持有不同 type 的数组，存储有所有订阅者的数组
 * type ：消息类型，订阅者可以订阅的不同消息类型
 * subscribe ：该方法为将订阅者添加到 SubscriberMap 中对应的数组中
 * unSubscribe ：该方法为在 SubscriberMap 中删除订阅者
 * notify ：该方法遍历通知 SubscriberMap 中对应 type 的每个订阅者
 */
class Publisher {
  constructor() {
    this.subsMap = new Map() // 存储订阅者
    this.offlineStack = []
    this.id = 0
  }

  // 消息订阅，返回一个id，用于取消订阅
  subscribe(subscriber, watcher = () => {}) {
    if (!this.subsMap.has(subscriber)) {
      this.subsMap.set(subscriber, [])
    }
    this.subsMap.get(subscriber).push(watcher)
    Reflect.set(watcher, '_id', this.id)

    // 离线事件
    this.offlineStack && this.offlineStack.forEach((fn) => fn()) // TODO 未完成部分
    this.offlineStack = null
    return this.id++
  }

  // remove
  unsubscribe(subscriber, id) {
    if (!this.subsMap.has(subscriber)) return // 如果 subscriber 对应的消息没有被人订阅，则直接返回
    if (id == null) {
      this.subsMap.delete(subscriber)
      return
    }
    const w = this.subsMap.get(subscriber)
    const index = w.findIndex((item) => item._id === id)
    if (index !== -1) {
      w.splice(index, 1)
    }
  }

  remove(subscriber, fn) {
    if (!this.subsMap.has(subscriber)) return // 如果 subscriber 对应的消息没有被人订阅，则直接返回
    if (!fn) {
      this.subsMap.delete(subscriber)
      return
    }
    const fns = this.subsMap.get(subscriber)
    const index = fns.findIndex((item) => item === fn)
    if (index !== -1) {
      fns.splice(index, 1)
    }
  }

  // trigger
  notify(subscriber, ...rest) {
    const fn = () => {
      if (!this.subsMap.has(subscriber)) return
      const watcher = this.subsMap.get(subscriber)
      watcher.forEach(({ subscriber, update }) => {
        console.log(subscriber, update)
        typeof update === 'function' && update(...rest)
      })
    }

    if (this.offlineStack) {
      return this.offlineStack.push(fn)
    }
    return fn()
  }
}

{
  const ANTA = new Publisher()

  const fn1 = {
    subscriber: '152xxx',
    update(message) {
      console.log('152xxx' + message)
    },
  }

  const fn2 = {
    subscriber: '138yyy',
    update(message) {
      console.log('138yyy' + message)
    },
  }

  console.log(ANTA.offlineStack)

  ANTA.subscribe('运动鞋', fn1)
  ANTA.subscribe('运动鞋', fn2)

  // 取消订阅
  ANTA.remove('运动鞋', fn1)

  ANTA.notify('运动鞋', ' 运动鞋到货了 ~') // 打电话通知买家运动鞋消息
}

{
  const ANTA = new Publisher()

  // 订阅运动鞋
  const ids = [
    ANTA.subscribe('运动鞋', {
      subscriber: '152xxx',
      update(message) {
        console.log('152xxx' + message)
      },
    }),
    ANTA.subscribe('运动鞋', {
      subscriber: '138yyy',
      update(message) {
        console.log('138yyy' + message)
      },
    }),
    ANTA.subscribe('帆布鞋', {
      subscriber: '139zzz',
      update(message) {
        console.log('139zzz' + message)
      },
    }),
  ]

  console.log(ids)
  // 取消订阅
  ANTA.unsubscribe('运动鞋', 0)

  ANTA.notify('运动鞋', ' 运动鞋到货了 ~') // 打电话通知买家运动鞋消息
  ANTA.notify('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息
}
