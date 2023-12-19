function displayTime(){
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    console.clear();
    console.log(`${hr}:${min}:${sec}`);
}

setInterval(displayTime, 1000);