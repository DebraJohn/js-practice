/**
 * 找出重复最多的字符
 */


//  方法一
const str = 'mmmeeerrrrrrrd';

function maxr2(char) {
  const arr = char.split('');
  const lengthArr = [];
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      lengthArr.push(num + 1);
      num = 0;
    }
  }
  let maxNum = lengthArr[0];
  for (let i = 0; i < lengthArr.length - 1; i++) {
    if (lengthArr.length === 1) {
      maxNum = maxNum;
    } else {
      maxNum = Math.max(maxNum, Math.max(lengthArr[i + 1], lengthArr[i + 1]));
    }
  }

  const index = lengthArr.indexOf(maxNum);
  let startIndex = 0;
  for (let i = 0; i < index; i++) {
    startIndex += lengthArr[i]
  }
  const manxStr = arr.splice(startIndex, maxNum).join('');
  return manxStr;
}


//  方法二

function maxr2(char) {
  //两个指针
  var a = 0;
  var b = 1;
  var maxLength = 0;
  var maxletter = '';

  while (a != char.length - 1) {
    //判断，两个指针指向的字母是否一样
    if (char.charAt(b) == char.charAt(a)) {
      //两个指针指向的字母相同，让右指针右移
      b++;
    } else {
      //两个指针指向的字母不同，
      //和当前最大的进行比较
      if (b - a > maxLength) {
        //当两个指针的距离比最大的还大
        maxLength = b - a; //那么现在做大的就是b - a
        maxletter = char.charAt(a); //此时a指针指向的就是这个字母
      }
      //让左指针右移动
      //b指针也要跟着复位
      a++;
      b = a + 1;
    }
  }
  return maxletter;
}

console.log(maxr2(str));
