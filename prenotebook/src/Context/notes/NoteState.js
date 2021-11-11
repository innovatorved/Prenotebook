import { createContext } from 'react';

// Createcontext
const NoteContext = createContext();

const NoteState = (props) => {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
export {
    NoteContext
};
