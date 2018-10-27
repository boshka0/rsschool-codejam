function sumOfOther(arr){
    let sum = arr.reduce((acc,cur)=>acc+cur);
    return arr.map(item=>sum-item);
}