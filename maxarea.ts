function max_area(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;

  let maxArea = 0;

  while (left < right) {
    let minHeight = 0;

    if (heights[left] > heights[right]) {
      minHeight = heights[right];
    } else {
      minHeight = heights[left];
    }

    let newArea = (left - right) * minHeight;
    console.log(newArea);

    if (newArea > maxArea) {
      maxArea = newArea;
      console.log(maxArea);
    }

    if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
}

max_area([3, 4, 1, 2, 2, 4, 1, 3, 2]);
