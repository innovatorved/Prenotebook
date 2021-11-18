import { createContext, useState } from 'react';

// Createcontext
const BackContext = createContext();


const BackState = (props) => {

    const [mode, setmode] = useState("light");
    const [search, setsearch] = useState("");

    const ChangeSearch=(value)=>{
        setsearch(value);
    }

    const ChangeMode = () => {
        // document.body.style.backgroundColor = mode==="light"?"#eef2e4":"#32383e;";
        if (mode === "light"){
            setmode("dark");
            document.body.style.backgroundColor = "#32383e";
        }else{
            setmode("light");
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
