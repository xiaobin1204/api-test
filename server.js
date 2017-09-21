const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

// 接收json
app.use(bodyParser.json())

// 添加一个中间件来处理跨域问题
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Content-Type')
  response.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, DELETE, GET, OPTIONS')
  next()
})

// 
let list1 = [
[
{"name": "王二", "age": 29},
{"name": "张三", "age": 18},
{"name": "李三", "age": 21},
{"name": "二哥", "age": 19}
],
[
{"name": "李寻欢", "age": 129},
{"name": "风清扬", "age": 218},
{"name": "欧阳锋", "age": 521},
{"name": "杨过", "age": 19}
]
]
let list2 = [
[
{"name": "王小花", "age": 29},
{"name": "张翠兰", "age": 18},
{"name": "李如玉", "age": 21},
{"name": "孟姜女", "age": 19}
],
[
{"name": "花木兰", "age": 29},
{"name": "白素贞", "age": 18},
{"name": "观世音", "age": 21},
{"name": "东方不败", "age": 19}
]
]

router.route('/getToken')
  .post((request, response) => {
    response.send('hello-vue')
  })
router.route('/getList1')
  .post((request, response) => {
    const page = request.body.page;
    res = list1[page - 1]
    total = list1.length
    response.send({
      res: res,
      total: total
    })
  })
router.route('/getList2')
  .post((request, response) => {
    const page = request.body.page;
    res = list2[page - 1]
    total = list2.length
    response.send({
      res: res,
      total: total
    })
  })
router.route('/getUser')
  .post((request, response) => {
    const token = request.body.access_token;
    const username = request.body.username;
    response.send('已登录用户' + username)
  })

app.use('/api', router)

app.listen(9003, () => {
  console.log('http://localhost:9003')
})
