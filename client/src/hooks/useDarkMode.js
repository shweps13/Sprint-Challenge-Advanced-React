import { useState, useEffect } from 'react';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useState(true);
    
    useEffect(() => {
        console.log("Dark in hook: ", darkMode);

        if (darkMode === true) {
            document.body.classList.remove('dark-mode');
        }
        else {
            document.body.classList.add('dark-mode');
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode];
    
    }
    
export default useDarkMode;