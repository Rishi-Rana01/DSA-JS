

function isPalindrome(s){

    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log("Cleaned String : " + cleaned);

    let left = 0;
    let right = cleaned.length - 1;

    while(left<right){

        if(cleaned[left]!== cleaned[right]){
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(isPalindrome("madam"));


    