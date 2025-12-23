function moveZeroes(nums: number[]): number[] {
  // Your code goes here
  let zeroPosition: number[] = [];
  let nonZeroPosition: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroPosition.push(i);
    } else {
      nonZeroPosition.push(i);
    }
  }
  console.log(nonZeroPosition);
  let rewrite = 0;
  for (let k = 0; k < nonZeroPosition.length; k++) {
    let numNeedPlace = nums[nonZeroPosition[k]];

    console.log(`rewrite${rewrite}`);
    console.log(`numNeedPlace${numNeedPlace}`);
    nums[rewrite] = numNeedPlace;
    rewrite++;
  }

  for (let q = 0; q < zeroPosition.length; q++) {
    nums[rewrite] = 0;
    rewrite++;
  }

  console.log(nums);

  return nums;
}

moveZeroes([1, 0, 4, 0, 3, 0, 1]);
