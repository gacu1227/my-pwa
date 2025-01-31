const { generateSW } = require('workbox-build');

generateSW({
  // キャッシュ対象のファイルがあるディレクトリ
  globDirectory: 'out', // 静的ファイルを生成したディレクトリ
  // キャッシュするファイルのパターン
  globPatterns: ['**/*.{html,js,css,png,jpg,ico}'],
  // 生成されるサービスワーカーの出力先
  swDest: 'out/workbox-sw.js',
  // その他の設定（後述）
}).then(({ count, size }) => {
  console.log(`Generated ${count} files, totaling ${size} bytes.`);
});