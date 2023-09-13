// ProjectEuler qid-4 - find the largest palindrome made from the product of two 3-digit numbers.


function reverseOrder(num) {
	let x = num;
	let result = 0;
	while(x > 0) {
		let lastPlace = x % 10;
		result = (result * 10) + lastPlace;
		x = Math.floor(x / 10);
	}
	if(result === num){return 1;}
	return 0;
}

function checkPalindrome() {
	let x, y;
	let array = [];
	for(x = 999; x >= 100; x--){
		for(y = 999; y >= 100; y--){
			let z = x * y;
			if(reverseOrder(z) === 1){
				array.push(z);
			}
		}
	}
	array = array.sort(function (a, b) { return b - a });
	return array[0];
}

console.log(checkPalindrome());