function findSum(n){
    let res = 0;
    for(let i=0; i<=n; i++){
        res+=i;
    }
    return res;
}

function findSumTo1000(){
    console.log(findSum(1000));
}

setTimeout(findSumTo1000, 1000);
console.log("I am faster");