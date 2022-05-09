/*
 * @Author: 叹息桥
 * @Description: 
 * @Date: 2022-04-11 10:43:17
 * @LastEditTime: 2022-04-15 20:05:14
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  publicPath: "/",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true, //根据配置决定是否去掉项目打包时js.map文件

  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-px-to-viewport")({
  //           unitToConvert: "px", // 默认值`px`，需要转换的单位
  //           viewportWidth: 1920, // 视窗的宽度,对应设计稿宽度
  //           // viewportHeight: 657, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
  //           unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
  //           propList: ["*"], // 转化为vw的属性列表
  //           viewportUnit: "vw", // 指定需要转换成视窗单位
  //           fontViewportUnit: "vw", // 字体使用的视窗单位
  //           selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
  //           mediaQuery: true, // 允许在媒体查询中转换`px`
  //           minPixelValue: 2, // 小于或等于`1px`时不转换为视窗单位
  //           replace: true, // 是否直接更换属性值而不添加备用属性
  //           exclude: [/node_modules/ , /src\/style/ ], // 忽略某些文件夹下的文件或特定文件
  //           landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
  //           landscapeUnit: "vw", // 横屏时使用的单位
  //           landscapeWidth: 1920, // 横屏时使用的视窗宽度
  //         }),
  //       ],
  //     },
  //   },
  // },
};
