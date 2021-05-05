import { useEffect } from 'react';


/* 
    Custom Hook

    The function name for a custom hook should always start with "use"
    is a convention and also linters rely on this word to determine whether the
    rules of hooks applied to the function or not

    While writing custom hooks make sure to start with "use"

*/

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default useDocumentTitle;