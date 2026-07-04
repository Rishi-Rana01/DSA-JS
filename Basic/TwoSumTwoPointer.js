// function twoSumTwoPointer(arr, target) {

//     arr.sort((a, b) => a - b);

//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let currentSum = arr[left] + arr[right];

//         if (currentSum === target) {
//             return [arr[left], arr[right]];

//         } else if (currentSum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return [];

// }


// const arr1 = [2, 7, 11, 15];
// const target1 = 9;
// console.log(twoSumTwoPointer(arr1, target1)); // [2, 7]

// const arr2 = [3, 2, 4];
// const target2 = 6;
// console.log(twoSumTwoPointer(arr2, target2)); // [2, 4]

// const arr3 = [3, 3];
// const target3 = 6;
// console.log(twoSumTwoPointer(arr3, target3)); // [3, 3]

// const arr4 = [1, 2, 3, 4, 5];
// const target4 = 10;
// console.log(twoSumTwoPointer(arr4, target4)); // []

// const arr5 = [];
// const target5 = 5;
// console.log(twoSumTwoPointer(arr5, target5)); // []






////////////////////////////////////////////////////////////////////////////////////////////////////////////

function twoSum(nums, target) {
    const sorted = nums.map((v, i) => ({ v, i }))
        .sort((a, b) => a.v - b.v);

    let l = 0,
        r = sorted.length - 1;

    while (l < r) {
        const s = sorted[l].v + sorted[r].v;

        if (s === target)
            return [sorted[l].i, sorted[r].i];

        if (s < target)
            l++;
        else
            r--;
    }

    return []; // fallback if no solution
}



const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // [0, 1]

const nums4 = [1, 2, 3, 4, 5];
const target4 = 10;
console.log(twoSum(nums4, target4)); // []

const nums5 = [];
const target5 = 5;
console.log(twoSum(nums5, target5)); // []
