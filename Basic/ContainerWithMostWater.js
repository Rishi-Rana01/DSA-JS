
// Two Pointer
function maxArea(height) {

    let left = 0
    let right = height.length - 1;

    let maxWater = 0;

    while (left < right) {
        let w = right - left;
        let ht = Math.min(height[left], height[right]);

        let currentWater = w * ht;
        console.log("Current Water :", currentWater, "Width :", w, "Height :", ht);


        maxWater = Math.max(currentWater, maxWater);


        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}


let Result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("Max Water Content" + Result);