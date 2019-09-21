const path = require('path')
const fs = require('fs')

/*
1 获取目录路径
2 判断是否为文件
3 是目录   是文件则结束
4 查询所有目录和文件 ，重复2
*/

/**
 * 获取目录树
 * @param {String} pathName 指定路径
 */
function findDirTree(pathName) {
  const files = []
  if (!pathName || typeof pathName !== 'string') return null
  if (!fs.existsSync(pathName)) {
    console.error(`路径不存在【${pathName}】`)
    return null
  }
  const res = { pathName }
  const _ = (self) => {
    const { pathName } = self
    let stat = fs.statSync(pathName)
    self.isFile = stat.isFile()
    if (self.isFile) {
      files.push(pathName)
    } else {
      let sonArr = fs.readdirSync(pathName)
      if (sonArr.length) {
        self.children = []
        sonArr.forEach(name => {
          let son = { name, pathName: path.resolve(pathName, name) }
          self.children.push(son)
          _(son)
        })
      }
    }
  }
  _(res)
  return { tree: res, files }
}

module.exports = findDirTree