function attachEventListener() {
  let numClicked = 0;  
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("cliked ", ++numClicked," times");
  });
}


attachEventListener();