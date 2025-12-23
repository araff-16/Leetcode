function longestSubstringWithoutRepeat(s: string): number {
  let start: number = 0;
  let charactercounter: { [key: string]: number } = {};
  let maxstring: number = 0;

  console.log("HELLo", s.length);

  for (let end = 0; end < s.length; end++) {
    charactercounter[s[end]] = (charactercounter[s[end]] || 0) + 1;

    console.log(charactercounter);
    console.log("start", start);
    console.log("end", end);

    while (charactercounter[s[end]] > 1) {
      charactercounter[s[start]]--;
      start++;
    }

    maxstring = Math.max(maxstring, end - start + 1);
  }

  return maxstring;

  // Your code goes here
}

longestSubstringWithoutRepeat("abcabcbb");
