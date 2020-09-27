const find = require('../index')
const path = require('path')

console.log(__dirname)
console.log(find(__dirname, {
  fileFilter: ({ name }) => {
    return path.extname(name + '') === '.js'
  },
  dirFilter: ({ name }) => {
    console.log(name)
    return name !== '.cbd'
  }
}))
// console.log(JSON.stringify(find(__dirname)))
// console.log('#########')
// console.log(__filename)
// console.log(find(__filename))