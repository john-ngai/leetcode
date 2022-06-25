/*
PROBLEM
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

EXAMPLES
  #1
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  #2
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  #3
  Input: nums = [3,3], target = 6
  Output: [0,1]

CONSTRAINTS
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
*/

/* // Solution #1: Brute Force
const twoSum = (num, target) => {
  for (let a = 0; a < num.length; a++) {
    for (let b = a + 1; b < num.length; b++) {
      if (num[a] + num[b] === target) {
        return [a, b];
      }
    }
  }
};
/**/

/* // Solution #2: Two-pass hash table
const twoSum = (num, target) => {
  const indices = {};
  num.forEach((element, index) => {
    indices[element] = index;
  });
  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    if (indices[complement] !== undefined && indices[complement] !== i) {
      return [i, indices[complement]];
    }
  }
  return null;
};
/**/

// Solution #3: One-pass hash table
const twoSum = (num, target) => {
  const indices = new Map();
  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];
    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }
    indices.set(num[i], i);
  }
  return null;
};

const num = [3, 6];
const target = 9;
const result = twoSum(num, target);
console.log(result);
