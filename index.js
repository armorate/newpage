// ProjectEuler qid-14 - which stating number, under one million, produces the longest collatz sequence chain?


function largestCollatzNum(num) {
    let tempNum, chainLength;
    let currentLargestChain = 0;
    let currentLargestChainNumber = 0;
    if (num === 1) { return 1; }
    for (let currentNumber = 2; currentNumber <= num; currentNumber++) {
        chainLength = 1;
        tempNum = currentNumber;
        while (tempNum >= 2) {
            if ((tempNum + 1) % 2 === 0 && tempNum >= 2) {
                tempNum = (tempNum * 3) + 1;
                chainLength++;
            }
            if (tempNum % 2 === 0) {
                tempNum /= 2;
                chainLength++;
            }
        }
        if (chainLength > currentLargestChain) {
            currentLargestChain = chainLength;
            currentLargestChainNumber = currentNumber;
        }
    }
    return currentLargestChainNumber;
}

console.log(largestCollatzNum(1000000));