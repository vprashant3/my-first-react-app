import  {useRef, useEffect, useDebugValue} from 'react';


function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    useDebugValue(ref.current > 10 ? "too much" : "too little");    
    return ref;
}

export default usePrevious;