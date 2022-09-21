//Verify if Is Palindromic
function isPalindromic(num) {
  if (String(num).split("").reverse().join("") == num) return true;
  else return false;
}

//Verify if IsPrime
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// Verify if is palindrome and prime number
function isBoth(num) {
  if (isPrime(num)) {
    if (isPalindromic(num)) {
      return true;
    }
    return false;
  }
  return false;
}

function verifyUntill(num) {
  for (let i = 0; i <= num; i++) {
    if (isBoth(i)) console.log(i);
  }
}

verifyUntill(1000);