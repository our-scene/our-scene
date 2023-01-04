export const capitalize = (word: string) => {
  const firstLetter = word[0];
  const restOfWord = word.slice(1);
  return firstLetter.toUpperCase() + restOfWord;
};
