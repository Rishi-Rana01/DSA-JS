
function reverseString(str) {

    let char = str.split('');

    let left = 0;
    let right = char.length-1;

    while(left<right){
        let temp = char[left];
        char[left]= char[right];
        char[right]= temp;

        left++;
        right--;
    }
    return char.join('');
}

result = "hnji";
console.log(reverseString(result));