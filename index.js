function isPalindrome(word) {
  // Write your algorithm here
  let wordLength = word.length
  let halfWord
  let splitWordBack
  if(wordLength==1){return true}
  else if(wordLength%2==0){
    halfWord = wordLength / 2
    splitWordBack = word.substring(halfWord)
  }
  else{
    halfWord = Math.floor(wordLength / 2)
    splitWordBack = word.substring(halfWord+1)
  }
  
  let splitWordFront = word.substring(0,halfWord)
  console.log(splitWordFront, ' ', splitWordBack)
  let reversedWordBack = ((splitWordBack.split('')).reverse()).join('')
  if(splitWordFront == reversedWordBack){
    return true
  }
  else{
    return false
  }

}

/* 
  Add your pseudocode here
  1) split string in middle
  2) reverse second string
  3) compare two strings
*/

/*
  Add written explanation of your solution here
  isPalindrome takes the word, and then gets its length.
  Then, it finds out where the middle of the word is (rounding down the division in the event of an odd number of letters)
  After saving the two halves of the word into seperate strings, the function splits the second half into an array so it can reverse the order of the letters, before rejoining the letters into a single string.
  Finally, it compares the two halves of the word.
  If the two halves are identical, the word is a palindrome and the function returns true.
  Otherwise, the word is not a palindrome and the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
