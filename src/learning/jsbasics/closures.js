function once() {
    let hasExecuted = false;
    function exceute() {
        if(hasExecuted) {
            console.log("won't exeute");
        } else {
            hasExecuted = true;
            console.log("will execute");
        }
    }
    return exceute;
 }

 let f = once();

 f();
 f();
 f();
