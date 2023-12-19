// const startTime = performance.now();

// setTimeout(() => {
//   const endTime = performance.now();
//   const timeElapsed = endTime - startTime;
//   console.log(`Time between setTimeout call and function execution: ${timeElapsed} milliseconds`);
// }, 1000); // Set timeout for 1000 milliseconds (1 second)


function call(){
    const inFunctionDate = new Date();
    console.log("Set Timeout function: ");
    console.log( inFunctionDate.getSeconds() + "s: "+ inFunctionDate.getMilliseconds() + "ms");
}
console.log("Before Calling the setTimeInterval");
const date = (new Date());
console.log( date.getSeconds() + "s: "+ date.getMilliseconds() + "ms");
setInterval(call, 5000);
