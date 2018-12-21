/**
 * 打印乘法口诀表
 */

function multiplyTable() {
  var str = '';
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      str += `| ${i} * ${j} | `
      if ( i === j ) {
        console.log(str)
        str = ''
      }
    }
  }
}
multiplyTable()