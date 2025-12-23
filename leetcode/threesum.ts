function threeSum(nums: number[]): number[][] {
  // Your code goes here

  const sortnums = nums.sort((a, b) => a - b);

  let i = 0;
  let j = sortnums.length - 1;

  let set = new Set();
  let alternate = 1;

  while (i < j) {
    let numToFind = sortnums[i] + sortnums[j];

    console.log(`i:${i}`);

    console.log(`numToFind:${numToFind}`);

    let k = 0;
    while (k < j) {
      if (sortnums[k] === -numToFind) {
        set.add(JSON.stringify([sortnums[i], sortnums[j], sortnums[k]]));
        break;
      }
      k++;
    }

    if (alternate === 1) {
      i++;
      alternate = 0;
    } else {
      j--;
      alternate = 1;
    }
  }

  let results = [] as any;
  set.forEach((array) => {
    results.push(JSON.parse(array as any));
  });

  console.log(results);

  return results;
}

threeSum([-1, 0, 1, 2, -1, -4]);
