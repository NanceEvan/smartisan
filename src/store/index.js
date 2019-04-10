import NP from 'number-precision'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    maxOff: false,
    // carPanelData: [],
    carPanelData: [{
      'sku_id': 100027102,
      'title': '坚果 Pro 软胶保护套',
      'sub_title': 'TPU 环保材质、耐磨、耐油、耐久性强',
      'ali_image': 'http://image.smartisanos.cn/resource/554da94d8e4f84f03e0015fd1c997f46.jpg',
      'price': 49,
      'limit_num': 5,
      'spec_json': {
        'image': 'attr/v2/1000271/649AD35E36A9703BACBE1555AEB6D266/',
        'show_name': '黑色'
      },
      count: 1,
      checked: true
    }, {
      'sku_id': 100027104,
      'title': '坚果 Pro 软胶保护套',
      'sub_title': 'TPU 环保材质、耐磨、耐油、耐久性强',
      'ali_image': 'http://image.smartisanos.cn/resource/b20055215ae3db0f2c8b7ba4db68866f.png',
      'price': 49,
      'limit_num': 5,
      'spec_json': {
        'image': 'attr/v2/1000271/52317E0C067C97FC6CE9376A2432CFFF/',
        'show_name': '浅金色'
      },
      count: 2,
      checked: true
    }, {
      'sku_id': 100029901,
      'title': 'Smartisan 快充移动电源 10000mAh',
      'sub_title': '10000mAh 双向快充、轻盈便携、高标准安全保护',
      'ali_image': 'http://image.smartisanos.cn/resource/ae40a16324658c192c7361d829f603bd.jpg',
      'price': 199,
      'limit_num': 1,
      'spec_json': {
        'image': 'attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/',
        'show_name': '灰色'
      },
      count: 1,
      checked: true
    }],
    receiveInfo: [
      {
        'name': '王某某',
        'phone': '13811111111',
        'areaCode': '010',
        'landLine': '64627856',
        'provinceId': 110000,
        'province': '北京市',
        'cityId': 110100,
        'city': '市辖区',
        'countyId': 110106,
        'county': '海淀区',
        'add': '上地十街辉煌国际西6号楼319室',
        'default': true
      }, {
        'name': '李某某',
        'phone': '13811111111',
        'areaCode': '010',
        'landLine': '64627856',
        'provinceId': 110000,
        'province': '北京市',
        'cityId': 110100,
        'city': '市辖区',
        'countyId': 110106,
        'county': '海淀区',
        'add': '上地十街辉煌国际东6号楼350室',
        'default': false
      }
    ],
    // carPanelData: [],
    carShow: false,
    carTimer: null,
    ball: {
      show: false,
      el: null,
      img: ''
    },
    orderData: [
      {
        orderId: '123123123',
        goodsData: [{
          'sku_id': 100027102,
          'title': '坚果 Pro 软胶保护套',
          'sub_title': 'TPU 环保材质、耐磨、耐油、耐久性强',
          'ali_image': 'http://image.smartisanos.cn/resource/554da94d8e4f84f03e0015fd1c997f46.jpg',
          'price': 49,
          'limit_num': 5,
          'spec_json': {
            'image': 'attr/v2/1000271/649AD35E36A9703BACBE1555AEB6D266/',
            'show_name': '黑色'
          },
          count: 1,
          checked: true
        }, {
          'sku_id': 100027104,
          'title': '坚果 Pro 软胶保护套',
          'sub_title': 'TPU 环保材质、耐磨、耐油、耐久性强',
          'ali_image': 'http://image.smartisanos.cn/resource/b20055215ae3db0f2c8b7ba4db68866f.png',
          'price': 49,
          'limit_num': 5,
          'spec_json': {
            'image': 'attr/v2/1000271/52317E0C067C97FC6CE9376A2432CFFF/',
            'show_name': '浅金色'
          },
          count: 2,
          checked: true
        }, {
          'sku_id': 100029901,
          'title': 'Smartisan 快充移动电源 10000mAh',
          'sub_title': '10000mAh 双向快充、轻盈便携、高标准安全保护',
          'ali_image': 'http://image.smartisanos.cn/resource/ae40a16324658c192c7361d829f603bd.jpg',
          'price': 199,
          'limit_num': 1,
          'spec_json': {
            'image': 'attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/',
            'show_name': '灰色'
          },
          count: 1,
          checked: true
        }],
        price: 354.00,
        freight: 8.00,
        invoiceName: '个人',
        iDate: '2019-4-10',
        receiveInfo: {
          'name': '李某某',
          'phone': '13811111111',
          'areaCode': '010',
          'landLine': '64627856',
          'provinceId': 110000,
          'province': '北京市',
          'cityId': 110100,
          'city': '市辖区',
          'countyId': 110106,
          'county': '海淀区',
          'add': '上地十街辉煌国际东6号楼350室',
          'default': false
        },
        isPay: false
      }
    ]

  },
  getters: {
    goodsTotalCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        count += goods.count
      })
      return count
    },
    goodsTotalPrice (state) {
      let total = 0
      state.carPanelData.forEach((goods) => {
        total = NP.plus(NP.times(goods.count, goods.price), total)
      })
      return total.toFixed(2)
    },
    goodsCheckedTotalPrice (state) {
      let total = 0
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          total = NP.plus(NP.times(goods.count, goods.price), total)
        }
      })
      return total.toFixed(2)
    },
    goodsCheckedTotalCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          count += goods.count
        }
      })
      return count
    },
    allChecked (state) {
      let allChecked = true
      state.carPanelData.forEach((goods) => {
        if (!goods.checked) {
          allChecked = false
        }
      })
      return allChecked
    },
    checkedGoods (state) {
      let ckGoods = []
      state.carPanelData.forEach((goods) => {
        if (goods.checked) {
          ckGoods.push(goods)
        }
      })
      return ckGoods
    },
    coupon (state) {
      // TODO 优惠券算法
      return 10
    }
  },
  mutations: {
    addCarPanelData (state, data) {
      let bOff = true
      let isSuccess = false
      if (!state.ball.show) {
        state.carPanelData.forEach((goods) => {
          if (goods.sku_id === data.info.sku_id) {
            bOff = false
            if (goods.count + data.count > goods.limit_num) {
              state.maxOff = true
              return
            }
            goods.count += data.count
            isSuccess = true
          }
        })
        if (bOff) {
          let goodsData = data.info
          Vue.set(goodsData, 'count', data.count)
          // 是否选中
          Vue.set(goodsData, 'checked', true)
          state.carPanelData.push(goodsData)
          isSuccess = true
        }
        if (isSuccess) {
          state.ball.el = event.path[0]
          state.ball.show = true
          state.ball.img = data.info.ali_image
          state.carShow = true
        }
      }
    },
    delCarPanelDate (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id === id) {
          state.carPanelData.splice(index, 1)
        }
      })
    },
    closePrompt (state) {
      state.maxOff = false
    },
    showCar (state) {
      clearTimeout(state.carTimer)
      state.carShow = true
    },
    hideCar (state) {
      state.carTimer = setTimeout(() => {
        state.carShow = false
      }, 100)
    },
    increaseCarPanelData (state, id) {
      state.carPanelData.forEach((goods) => {
        if (goods.sku_id === id) {
          if (goods.count >= goods.limit_num) {
            return
          }
          goods.count++
        }
      })
    },
    decreaseCarPanelData (state, id) {
      state.carPanelData.forEach((goods) => {
        if (goods.sku_id === id) {
          if (goods.count <= 1) {
            return
          }
          goods.count--
        }
      })
    },
    turnCheckGoods (state, id) {
      state.carPanelData.forEach((goods) => {
        if (goods.sku_id === id) {
          goods.checked = !goods.checked
        }
      })
    },
    allCheck (state, allChecked) {
      if (allChecked) {
        state.carPanelData.forEach((goods) => {
          goods.checked = false
        })
      } else {
        state.carPanelData.forEach((goods) => {
          goods.checked = true
        })
      }
    },
    delCheckedGoods (state) {
      // 不要利用forEach删除元素
      // state.carPanelData.forEach((goods, index) => {
      //   if (goods.checked) {
      //     console.log(goods.title)
      //     state.carPanelData.splice(index, 1)
      //   }
      // })
      let i = state.carPanelData.length
      while (i--) {
        if (state.carPanelData[i].checked) {
          state.carPanelData.splice(i, 1)
        }
      }
    },
    submitReceive (state, receive) {
      if (receive.default) {
        state.receiveInfo.forEach((re) => {
          re.default = false
        })
      }
      state.receiveInfo.push(receive)
    },
    submitOrder (state, orderInfo) {
      state.orderData.push(orderInfo)
      let i = state.length
      while (i--) {
        if (state.carpanelData[i].checked) {
          state.carPanelData.splice(i, 1)
        }
      }
    },
    payNow (state, id) {
      state.orderData.forEach((order) => {
        if (order.orderId === id) {
          order.isPay = true
        }
      })
    }
  }
})
export default store
