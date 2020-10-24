import  {useRef, useEffect} from 'react';


function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref;
}

export default usePrevious;