function once() {
  let hasExecuted = false;
  function exceute() {
    if (hasExecuted) {
      console.log("won't exeute");
    } else {
      hasExecuted = true;
      console.log("will execute");
    }
  }
  return exceute;
}

function x() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*1000);
  }
}

x();

once();
