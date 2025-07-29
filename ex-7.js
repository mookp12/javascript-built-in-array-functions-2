function isPalindrome(string) {
  // Start coding here
  if (string.split("").reverse().join("") === string){
    return true
  } else {
    return false
  }

}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false