function isPalindrome(string) {
  // Start coding here
  let trimmedString = string.trim();

  let reversedString = trimmedString.split('').reverse().join('');

  return trimmedString === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false