/**
 * 打印星号三角形（多种形状）
 *
 * triangleStar(num, shape)
 * @param num 中间行数
 * @param
 *
 * *
 * **
 * ***
 * ****  num = 4
 * ***
 * **
 * *
 */

function triangleStar(num) {
  let starStr = ''
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      starStr += '*'
      if(i === j) {
        console.log(starStr)
        if(j < num - 1) starStr = ''
      }
    }
  }
  for (let i = num - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      starStr = minusStar(starStr, num);
      if (i === j) {
        console.log(starStr);
        starStr = minusStar(starStr);
      }
    }
  }

  function minusStar(starStr, num) {
    const starArr = starStr.split('');
    starArr.splice(num - 1, 1);
    return (starStr = starArr.join(''));
  }
}
triangleStar(2);
