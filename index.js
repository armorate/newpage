// ProjectEuler qid-12 - what is the value of the first triangle to have over five hundred divisors?


function triangleDivisors(num) {
    let count = 0;
    let currentTruangular = 0;
    while(true) {
        currentTruangular+= count;
        count++;
        let divisorCount = 0;
        for(let i = 1; i <= Math.sqrt(currentTruangular); i++) {
            if(currentTruangular % i === 0) { divisorCount+= 2;}
        }
        if(divisorCount > num){
            return currentTruangular;
        }
    }
}

console.log(triangleDivisors(500));