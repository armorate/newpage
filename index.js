// ProjectEuler qid-15 - Project Euler Problem 15.

function factorial(num) {
    if (num === 1) {
        return num;
    }
    else {
        return num * factorial(num - 1);
    }
}

function routes(gridSize) {
    let moves = gridSize * 2;
    return (factorial(moves) / (factorial(gridSize) * factorial(moves - gridSize)));
}

console.log(routes(20));