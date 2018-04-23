import axios from 'axios'

export function getPostsList () {
  const url = 'api/getPostsList'

  const data = Object.assign({}, {
    number: 3,
    selectType: 0,
    selectKey: '',
    pageIndex: 2
  })

  return axios.get(url, {
    params: data
  }).then((res) => { // res就是模拟服务器res.json(data)传递出来的data数据
    console.log('获取数据成功', res.data)
    return Promise.resolve(res.data)
  }).catch(function (error) {
    console.log(error.response)
  })
}
