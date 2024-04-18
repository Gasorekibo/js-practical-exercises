function sum(arr) {
    let result = 0;
    for(let i= 0; i<arr.length; i++) {
       result+=arr[i]
    }
    return result
};

function average(arr) {
    let result = 0;
    let sum = 0
    const arrLen  = arr.length;
    for(let i=0; i< arr.length; i++) {
        sum+=arr[i];
        result = 2.4
        result = +sum/arrLen;
        
    }
    return result;
}
function max(arr) {
    return Math.max(...arr)
}

function min(arr) {
    return Math.min(...arr)
}

function arrayStats(arr) {
    let  stats = {};
    stats.sum = sum(arr);
    stats.average = average(arr);
    stats.min = min(arr);
    stats.max = max(arr);
    return stats;
}

console.log(arrayStats([1, 2, 3, 4, 5]));

