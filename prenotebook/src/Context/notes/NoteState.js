import NoteContext from './NoteContext';

const NoteState = (props) => {
    const state = {
        "name" : "Ved Gupta",
        "class" : "pdd chuke"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
