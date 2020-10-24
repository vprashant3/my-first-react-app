/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';

let renderCount = 0;
function child () {
    useEffect(() => {
        renderCount =  renderCount + 1;
    });
    return <div>render count : {renderCount}</div>;
}

export default child;