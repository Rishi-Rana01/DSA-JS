// Three Sum = 0

function threeSum(nums) {

    const triplet = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        //optimisation

        if (nums[i] > 0) break; // Then next two pointer also points to +ve value then sum never zero

        if (i > 0 && nums[i] == nums[i - 1]) continue; 

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplet.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

    }
    return triplet;
}

const result = threeSum([-4, -1, -1, 0, 1, 2]);
console.log(result);