function wordPattern(pattern: string, s: string): boolean {
  const myMap = new Map<string, string>();
  const words = s.split(" ");

  if (words.length != pattern.length) return false;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!myMap.has(pattern[i])) {
      myMap.set(pattern[i], word);
    }

    if (myMap.get(pattern[i]) != word) return false;
  }

  return true;
}

// console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("abba", "dog dog dog dog"));
