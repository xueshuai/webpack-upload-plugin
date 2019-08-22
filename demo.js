/*
 * @Descripttion: 
 * @version: 
 * @Author: Shuai XUE
 * @Date: 2019-08-22 17:45:06
 * @LastEditors: Shuai XUE
 * @LastEditTime: 2019-08-22 18:07:56
 */
const EasyUpload = require('./index.js')
console.log('\napplyapplyapplyapplyapply...')
const instance = new EasyUpload({
  host: '192.168.177.101',
  port: '22',
  username: 'root',
  password: 'gWk3m@6Cp&sdO8J0',
  local: 'demo-dist',
  path: '/home/www/aaaaaa',
  handleMode: true
})
instance.doUpload()
console.log('\nendendendend...')
