let arr = [23,45,32,12,56,78,43,98,65,33];

let bigNum = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>bigNum){
        bigNum = arr[i];
    }
}

console.log("The biggest Number in this array is: "+ bigNum);