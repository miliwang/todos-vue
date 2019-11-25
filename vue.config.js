/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 18:00:40
 * @LastEditTime: 2019-11-25 16:54:28
 * @LastEditors: Please set LastEditors
 */
/*
 * Author: Jiaobailong
 * Created on: 2018-12-27 10:23:17
 * Copyright (c) 2018 Autohome Co.,Ltd.
 */
const prod = process.env.NODE_ENV === "production";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const PAGE_ENTRIES = ["manager"];

const Version = new Date().getTime();

module.exports = {
  publicPath: "/",
  outputDir: prod ? "dist/todos/" : "dist",
  assetsDir: "",
  indexPath: "index.html",
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "测试，测试",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js"
  },
  lintOnSave: !prod,
  devServer: {
    disableHostCheck: true,
    host: "todos.autohome.com.cn",
    proxy: {
      "/api": {
        target: "http://vcp.api.autohome.com.cn",
        ws: true,
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: {
      rewrites: PAGE_ENTRIES.map(v => ({
        from: new RegExp(`^\\/${v}`),
        to: `/${v}.html`
      }))
    }
  },
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: !prod,
  crossorigin: undefined,
  integrity: false,
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `./js/[name].${Version}.js`,
      chunkFilename: `./js/[name].${Version}.js`
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  },
  chainWebpack: config => {
  },
  css: {
    requireModuleExtension: false,
    extract: prod,
    sourceMap: !prod,
    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        // localIdentName: "[name]-[hash]"
        // camelCase: "only"
        // postcss: {
        //   // 这里的选项会传递给 postcss-loader
        // }
      }
    }
  }
};
