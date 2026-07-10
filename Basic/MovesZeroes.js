


function movesZeroes(nums){

    let st = 0

    for(let readPointer = 0; readPointer<nums.length; readPointer++ ){

        if(nums[readPointer] !== 0){

            // Swap 
            let temp = nums[st];
            nums[st]= nums[readPointer];
            nums[readPointer]= temp;

            st++;

        }

    }

    return nums;
}

console.log(movesZeroes([0,1,0,3,12]));