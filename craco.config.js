const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    // 路径别名
    alias: {
      "@@": pathResolve("."),
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@hooks": pathResolve("src/hooks"),
      "@pages": pathResolve("src/pages"),
      "@store": pathResolve("src/store"),
      "@utils": pathResolve("src/utils"),
      "@sass": pathResolve("src/assets/styles"),
      // 此处是一个示例，实际可根据各自需求配置
    },
    // configure: (webpackConfig, { env, paths }) => {
    //   // 修改build的生成文件名称
    //   paths.appBuild = 'dist';
    //   webpackConfig.output = {
    //     ...webpackConfig.output,
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: '/nfc-test/'
    //   }
    //   return webpackConfig;
    // }
  }
};
