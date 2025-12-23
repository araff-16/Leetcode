function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }

  let maxpalindrome = s[0];

  for (let i: number = 0; i < s.length; i++) {
    // ODD
    let left = i;
    let right = i;

    console.log("first loop");

    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      console.log("SLICE", s.slice(left, right + 1));

      if (s.slice(left, right + 1).length > maxpalindrome.length && s[left] === s[right]) {
        maxpalindrome = s.slice(left, right + 1);
      }
      left--;
      right++;
    }

    //EVEN
    left = i;
    right = i + 1;

    console.log("Second loop");
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      console.log(s.slice(left, right));
      if (s.slice(left, right + 1).length > maxpalindrome.length) {
        maxpalindrome = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  console.log("maxpalindrome", maxpalindrome);
  return maxpalindrome;
}

longestPalindrome("babad");
