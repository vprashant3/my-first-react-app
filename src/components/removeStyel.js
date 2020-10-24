import React from "react";


const removeStyle = BaseComponent => props => {
    const newProps = {...props};
    delete newProps.style;
    return <BaseComponent { ...newProps}/>
}

export default removeStyle;