//模拟数据
const axios = require('axios')
const express = require('express')
const app = express()
const apiRoutes = express.Router()
app.use('/api',apiRoutes)


module.exports = {
  devServer: {
    before(app) {     
      app.get('/api/getDiscList', function (req, res) {
        let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        })
        .then((response) => {
          res.json(response.data)
        })
      })
    }
  }
}