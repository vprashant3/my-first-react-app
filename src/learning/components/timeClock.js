import React from "react";


function timeClock() {
   return <h2>It is {new Date().toLocaleTimeString()}.</h2>
}

export default timeClock;