# file-tree-simple

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/file-tree-simple.svg?style=flat-square
[npm-url]: https://npmjs.org/package/file-tree-simple
[download-image]: https://img.shields.io/npm/dm/file-tree-simple.svg?style=flat-square
[download-url]: https://npmjs.org/package/file-tree-simple

获取目录树

## 安装

```bash
$ npm i file-tree-simple --save
```

## 使用

```js
const fileTree = require('file-tree-simple')

fileTree(__dirname) // {tree<Object>, files<Array>}

/*
输出内容格式：
{ tree:
   { pathName: 'E:\\GitHub\\file-tree-simple\\test',
     isFile: false,
     children: [ ... ] },
  files: ['E:\\GitHub\\file-tree-simple\\test\\index.js', ... ] }
*/

```

## License

[MIT](LICENSE)
