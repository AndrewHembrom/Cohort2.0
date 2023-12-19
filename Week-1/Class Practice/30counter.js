let a=30;

function call(){
    if(a==-1){
        clearInterval(counter);
        console.log("Counter reached 0. Interval stopped.");
    }else{
        console.log(a);
        a--;
    }
}

const counter = setInterval(call,1000);