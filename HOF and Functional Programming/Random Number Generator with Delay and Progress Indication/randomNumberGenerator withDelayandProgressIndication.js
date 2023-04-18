
 function message() {
    function generate() {
        const randomNumber = Math.floor(Math.random()*1000 +1);
        console.log(randomNumber);
    }
    setTimeout(generate,3000);
    console.log("generated number will be printed after 3secs");

}
setTimeout(message,1000);
setTimeout(message,2000);
setTimeout(message,3000);