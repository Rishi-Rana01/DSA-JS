function isPalindrome(value) {
    let left = 0;
    let right = value.length - 1;

    while (left < right) {

        if (value[left] !== value[right]) {
            return false;
        }
        else {
            left++;
            right--;

        }

    }
    return true;
}

value1="racecar";
value2="12321";
console.log(isPalindrome(value1)); 
console.log(isPalindrome(value2)); 
