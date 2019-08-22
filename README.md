<!--
 * @Descripttion: 
 * @version: 
 * @Author: Shuai XUE
 * @Date: 2019-08-21 17:33:30
 * @LastEditors: Shuai XUE
 * @LastEditTime: 2019-08-22 18:15:52
 -->
# Webpack-easy-upload-plugin

> A webpack ftp upload plugin, support upload file or folder to ftp server.

## Installation
```bash
yarn add --dev webpack-easy-upload-plugin
```

## Usage
add following code to your webpack config file.
```javascript
var EasyUpload = require('webpack-easy-upload-plugin')

new EasyUpload({
    host: 'host',
    port: 'post', // default: 22
    username: 'user',
    password: 'password',
    local: 'local path', // eg. path.join(__dirname, 'dist')
    path: 'remote path', // eg. /var/www/ftp/
    handleMode: false
})            
```

## Simple example
```javascript
var path = require('path')
var EasyUpload = require('webpack-easy-upload-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new WebpackFtpUpload({
            host: '127.0.0.1',
            port: '22',
            username: 'root',
            password: '123456',
            local: path.join(__dirname, 'dist'),
            path: '/var/www/',
            handleMode: false
        })
    ]
}
```

## License
This project is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php).