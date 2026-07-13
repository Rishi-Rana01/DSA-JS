

function findMinMax(arr) {

    if (arr.length == 0) {
        return { min: null, max: null }
    }

    let min = arr[0]
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        const currentValue = arr[i];

        if (currentValue < min) {
            min = currentValue;
        }

        else if (currentValue > max) {
            max = currentValue
        }

    }

    return {min, max}

}

const values = [3, 5, 1, 8];
const result = findMinMax(values);
console.log(result);