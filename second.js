function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = n * (n + 1) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return totalSum - actualSum;
}


const arr = [1, 2, 4, 5];
const missing = findMissingNumber(arr);
console.log("Missing number:", missing);
