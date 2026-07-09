

const maxProfit = function (prices) {

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {

        if (prices[i] < minPrice) {

            minPrice = prices[i]

            console.log("minPrice", minPrice, i)
        } else {
            const currentProfit = prices[i] - minPrice;

            maxProfit = Math.max(currentProfit, maxProfit);
            
            console.log("currentProfit", currentProfit, i)
            console.log("maxProfit", maxProfit, i)
        }
    }
    return maxProfit;

}

console.log(maxProfit([7,1,5,3,6,4]));