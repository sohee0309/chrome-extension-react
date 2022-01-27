const { merge } = require('webpack-merge'); // webpack-merge는 여러 개의 webpack 설정 파일을 하나로 병합해주는 라이브러리
const config = require('./webpack.config.js'); // webpack 공통 설정 파일

module.exports = merge(config, {
    mode: 'development',
    devtool: "inline-source-map" // 개발을 용이하게 하기 위해 소스맵을 제공하는 옵션
});