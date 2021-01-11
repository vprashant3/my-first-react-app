function attachEventListener() {
  let numClicked = 0;  
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("cliked ", ++numClicked," times");
  });
}


attachEventListener();


console.log('start');

setTimeout(() => {
  console.log('after timeout');
}, 5000);


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(() => {
  console.log('promise resloved');
});

console.log('end');