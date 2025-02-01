## PWAの動作を確認する
- このリポジトリのPWAサイト
- https://gacu1227.github.io/my-pwa/

## gh-pagesで公開する
```bash
npm install gh-pages --save-dev

# next.configに追記
basePath: "/my-static-site", // リポジトリ名
assetPrefix: "/my-static-site/",

# package.jsonに追記
"deploy": "npm run build && gh-pages -d out"

# _nextが無効化されるので追加
touch out/.nojekyll

# github の設定から gh-pagesを公開設定にする
```

