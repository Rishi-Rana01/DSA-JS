

function isAnagram(s,t){

    if (s.length !== t.length) {
        return false;
    }

    const characterCount = {};

    for(let char of s){
        characterCount[char] = (characterCount[char] || 0) +1;
    }

    for(let char of t){
        if (!characterCount[char]) {
            return false;
        }
        characterCount[char]--;
    }

    return true;
}

const result = isAnagram("anagram","nagaram");
console.log(result);
