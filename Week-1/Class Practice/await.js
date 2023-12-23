function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      setTimeout(function resolve(){
        console.log("Hi There!!!");
      }, 3000);
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main();
  