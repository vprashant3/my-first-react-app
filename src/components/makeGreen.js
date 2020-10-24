import React from "react";

const makeGreen = BaseComponent => props => {
    const addGreen = {
        style : {
            color : "green"
        }
    }
    const newProps = {
        ...props, ...addGreen
    }
    return <BaseComponent { ...newProps}/>
}

export default makeGreen;