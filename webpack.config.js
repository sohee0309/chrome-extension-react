//webpack.js.org 사이트에서 웹팩 설정을 위한 코드가 자세히 나와있음.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { // 시작점. 프로그램의 진입점이 될 js파일
    popup: './src/popup.jsx', // 팝업 경로 정의
  },
  output: { // bundle 파일을 출력할 위치. bundle 파일이란 bundling된 파일 (bundling이란 모듈(분리된 파일)들의 관계를 파악하여 그룹화시켜주는 작업, webpack은 정적 모듈 bundler)
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: { // 각종 설정
    rules: [{ 
        test: /\.(js|jsx)$/, //확장자가 .js 또는 .jsx인 모든 파일로 실행
        exclude: /node_modules/, //node_modules 폴더에 있는 것은 제외
        use: {
          loader: 'babel-loader', // 확장자가 .js 또는 .jsx인 것에 대해 babel-loader 사용. loader를 설정해야 파일들을 모듈로 불러와 bundling 가능
          options: { 
            presets: ['@babel/preset-env', '@babel/preset-react'] //preset으로 babel 설정. preset을 쓰지 않으면 매번 npm패키지를 설치하고 .babelrc (바벨지역설정파일)에서 매번 플러그인을 추가해야하는 번거로움이 있음
          }
        } 
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ // html파일을 template으로 생성할 수 있게 도와주는 plugin
      template: './src/popup.html',
      filename: 'popup.html',
    }),
    new CopyPlugin({ // build할 때 public에 있는 파일을 dist 폴더에 복사하기 위한 plugin
      patterns: [
        { from: "public" }
      ],
    }),
  ],
};