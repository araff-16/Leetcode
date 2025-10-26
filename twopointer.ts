function isPairSum(nums: number[], target: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(isPairSum([1, 3, 4, 6, 8, 10, 13], 13));

function isPairSumBetter(nums: number[], target: number): boolean {
  let left = 0;

  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === target) {
      return true;
    }

    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(isPairSumBetter([1, 3, 4, 6, 8, 10, 13], 13));

function letsee() {
  console.log("BUTTERBOY^^");
}

function justatest() {
  letsee();
}

justatest();
