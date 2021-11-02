import { createContext , useState} from 'react';

// Createcontext
const NoteContext = createContext();

const NoteState = (props) => {
    const val1 = {
        "name" : "Ved Gupta",
        "class" : "pdd chuke"
    }
    const [state, setstate] = useState(val1)

    let update =()=>{
        setTimeout(() => {
            setstate({
                "name" : "Yug Gupta",
                "class" : "Koun si pdai"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
export {NoteContext};
