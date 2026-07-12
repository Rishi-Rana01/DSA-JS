// https://gemini.google.com/gem/e3e978bb240c/d9a683ae64aae7b3

function groupAnagram(strs) {

    const map = new Map(); //  For Key VAlue Pair 

    for (const str of strs) {
        const sortedKey = str.split('').sort().join('');
        console.log("Sorted Key : ", sortedKey);

        if (!map.has(sortedKey)) {
            map.set(sortedKey, []);
            console.log("Map created for key : ", sortedKey);
        }
        // if exsist push to the original word to the group;
        map.get(sortedKey).push(str);
        console.log("Pushed to map", map.get(sortedKey));
    }
    return Array.from(map.values());
}

result = groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(result);