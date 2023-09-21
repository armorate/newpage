// ProjectEuler qid-16 - What is the sum of the digits of the number 2^1000 ?


function powerDigitSum(exponent) {
    let value = 2 ** exponent,
        array = Array.from(BigInt(value).toString(), Number);
    return array.reduce((a, b) => a + b)
}

console.log(powerDigitSum(1000));