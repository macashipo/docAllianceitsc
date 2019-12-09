## Project Structure

```
ReactJS
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── **src**
│   ├── app_dev
│   ├── common
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── registerServiceWorker.js
│   ├── setupTests.js
│   ├── ConfigBuild.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Polyfill.js

Không phải lúc nào IE cũng hỗ trợ ES6, Polyfill cung cấp bộ hỗ trợ đó

## Cách hoạt động

index.js -> App.js <-- ConfigBuild.js (Xác định app)

Chạy Config init app
```
Config.initConfig({
  ApiAxios,
  Auth: H.Auth,
  ConfigUse:Config,//...
})
```

Xác định được Routes Public, Routes Private, Login v.v...

Độ ưu tiên Routes:
- /login
- /public link... 
- /private link...

Mặc định 1 đường dẫn sẽ trỏ về Containers.PrivateRoute kèm Containers.DefaultLayout
