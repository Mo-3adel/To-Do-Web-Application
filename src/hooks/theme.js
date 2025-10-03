import { useEffect,useState } from "react";

function useTheme(defaultTheme="light") {
    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem("theme");   
        return savedTheme ? savedTheme : defaultTheme;
    });
    useEffect(()=>{
        localStorage.setItem("theme",theme);

    },[theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };  
    return[theme,toggleTheme] ;
}

export default useTheme;