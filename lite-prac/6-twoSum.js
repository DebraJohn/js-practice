/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

var twoSum = function(nums, target, i = 0, maps = {}) {
  const map = maps;
  if (map[target - nums[i]] >= 0) {
    return [map[target - nums[i]], i];
  } else {
    map[nums[i]] = i;
    i++;
    if (i < nums.length - 1) {
      return twoSum(nums, target, i, map);
    } else {
      throw 'error: twoSum is not find';
    }
  }
};

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     let num = target - nums[i];
//     let nextNum = nums.indexOf(num);
//     if (nextNum !== -1 && nextNum !== i) {
//       return [i, nextNum];
//     }
//   }
// };

console.log(twoSum([3, 5, 5, 1], 10));
