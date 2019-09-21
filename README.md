# file-tree

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/file-tree.svg?style=flat-square
[npm-url]: https://npmjs.org/package/file-tree
[download-image]: https://img.shields.io/npm/dm/file-tree.svg?style=flat-square
[download-url]: https://npmjs.org/package/file-tree

获取目录树

## Install

```bash
$ npm i file-tree --save
```

## Usage

```js
const fileTree = require('file-tree')

find(__dirname) // {tree<Object>, files<Array>}

/*
输出内容格式：
{ tree:
   { pathName: 'E:\\GitHub\\file-tree\\test',
     isFile: false,
     children: [ ... ] },
  files: ['E:\\GitHub\\file-tree\\test\\index.js', ... ] }
*/
```

## License

[MIT](LICENSE)
