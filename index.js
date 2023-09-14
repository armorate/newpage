// ProjectEuler qid-10 - Find the sum of the primes below two million.


function sumOfPrimes(num) {
	let z = 0;
	let a = 2;
	for(let x = 3; x < num; x+=2){
		for(let y = 3; y <= Math.floor(Math.sqrt(x)); y+=2){
			if(x % y === 0) {
				z = 1;
				break;
			}
		}
		if(z === 0) { a += x;}
		z = 0;
	}
	return a;
}
console.time('time-taken');
console.log(sumOfPrimes(2000000));
console.timeEnd('time-taken');
