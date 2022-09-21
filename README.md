

## 启动命令

### `yarn`
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

### `nginx 配置`
#### 目前只是简单的配置，输出路径配置

- package.json 文件   'homepage': './test/',
- src/index.tsx 下 '<BrowserRouter basename="/test">'  basename 为 nginx 配置的路径

若需要修改，修改这两处配置即可


### 请求配置
- src/api/user.ts 下  baseURL 为 请求路径
- getUserInfo 为获取用户信息方法
