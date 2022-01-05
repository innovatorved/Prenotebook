import React , { createContext, useState ,useLayoutEffect} from 'react';

// Createcontext
const BackContext = createContext();


const BackState = (props) => {

    const [mode, setmode] = useState("light");

    useLayoutEffect(() => {
        if(localStorage.getItem("mode")){
            if (localStorage.getItem("mode") !== "light"){
                setmode("dark");
                localStorage.setItem("mode" , "dark");
                document.body.style.backgroundColor = "#32383e";
            }else{
                setmode("light");
                localStorage.setItem("mode" , "light");
                document.body.style.backgroundColor = "#eef2e4";
            }
        } 
        // if (window.location.hostname !== "prenotebook.ml"){
        //     window.location.replace(`http://prenotebook.ml${window.location.pathname}`);
        // }
    }, [])

    const [search, setsearch] = useState("");
    const ChangeSearch=(value)=>{
        setsearch(value);
    }

    const ChangeMode = () => {
        if (mode === "light"){
            setmode("dark");
            localStorage.setItem("mode" , "dark");
            document.body.style.backgroundColor = "#32383e";
        }else{
            setmode("light");
            localStorage.setItem("mode" , "light");
            document.body.style.backgroundColor = "#eef2e4";
        }
    };
    
    return (
        <BackContext.Provider value={{mode , ChangeMode , search , ChangeSearch}}>
            {props.children}
        </BackContext.Provider>
    )
}

export default BackState;
export {
    BackContext
};
