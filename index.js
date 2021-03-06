/*
 * @Descripttion: 
 * @version: 
 * @Author: Shuai XUE
 * @Date: 2019-08-21 17:46:07
 * @LastEditors: Shuai XUE
 * @LastEditTime: 2021-01-15 18:36:08
 */
'use strict'

const Client = require('scp2')
const client = new Client.Client()
const colors = require('colors')

class EasyUpload {
  // options = {
  //   host: 'host',
  //   port: 'post', // default: 22
  //   username: 'user',
  //   password: 'password',
  //   local: 'local path', // eg. path.join(__dirname, 'dist')
  //   path: 'remote path', // eg. /var/www/ftp/
  //   handleMode: false //true表示使用单独使用模式，false表示使用wabpack命令参数模式
  // }
  constructor(options = {}) {
    this.options = options
    this.startTime = null
    this.endTime = null
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync('EasyUpload', (compilation, callback) => {
      callback()
      this.options.handleMode ? this.doUpload() : process.argv.includes('--easy-upload') && this.doUpload()
    })
  }

  doUpload() {
    this.startTime = Date.now()
    console.log('\nStart upload, please wait...'.green)
    this.upload(this.options.local, this.options)
  }

  upload(local, obj) {
    Client.scp(local, obj, err => {
      if (err) throw err
      this.endTime = Date.now()
      console.log(`Uploaded ${local} successfully in ${this.endTime - this.startTime}ms`.green)
    })
  }
}

module.exports = EasyUpload