//_dirname:代表当前文件所在目录的绝对路径
const path = require('path')//用来解析路劲相关模块的信息
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = { //配置对象
    //入口
    entry: {
        xxx: path.resolve(__dirname, 'src/index.js')
    },
    //出口
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dict')

    },
    devServer: {
        open: true, //配置打开浏览器
        quiet:true,
        port: 8888, //配置打开的端口号
        contentBase: 'src', //配置项目托管的根目录
        hot: true //配置启用热更新
    },
    //模块加载器
    module: {
        rules: [ 
          {
            test: /\.js$/,
            //exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, 'src'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'], // 多个loader从右到左处理
          }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
            }
          }, {
            test: /\.vue$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'vue-loader'
          }
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',//将那个页面作为模板页面处理
            filename: 'index.html'
        }),
          // 请确保引入这个插件！
        new VueLoaderPlugin()
        
    ],
    // 引入模块的解析
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
      }
    }
}