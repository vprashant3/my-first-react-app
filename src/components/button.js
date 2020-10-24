import React from 'react';


function CustomButton({color, onClick}) {
    console.log("i am called with color : ", color);
    return <button color="color" onClick={onClick}>Custom button</button>
}

export default CustomButton;