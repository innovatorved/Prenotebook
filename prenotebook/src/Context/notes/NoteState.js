import { createContext , useState} from 'react';

// Createcontext
const NoteContext = createContext();

let initialValues = [
      {
        "_id": "1",
        "user": "618d60da7317b4d35510b812",
        "title": "itsme3",
        "description": "its mewsdfrdfrgthngtyik ved23",
        "tag": "Genral",
        "date": "2021-11-11T18:38:55.753Z",
        "__v": 0
      },
      {
        "_id": "2",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "3",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "4",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "5",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "6",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "7",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      },
      {
        "_id": "8",
        "user": "618d60da7317b4d35510b812",
        "title": "hello",
        "description": "ewr gsh dcfxl/gthyjm,lthujgrfhg3",
        "tag": "Genral",
        "date": "2021-11-11T18:44:22.210Z",
        "__v": 0
      }
    ];


const NoteState = (props) => {
  const [notes, setnotes] = useState(initialValues)

  // Add Notes
  const AddNote=(note)=>{
    // Call Backand Api to add Note
    // console.log(note);
    let note1 = {
      "_id": "9",
      "user": "618d60da7317b4d35510b812",
      "title": note.title,
      "description": note.description,
      "tag": note.tag,
      "date": "2021-11-11T18:44:22.210Z",
      "__v": 0
    }
    setnotes([...notes , note1])
  };

  // Delete Note
  const DeleteNote=(id)=>{
    setnotes(notes.filter((note)=>{return note._id!==id}))
  };
  
    return (
        <NoteContext.Provider value={{notes, AddNote , DeleteNote , setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
export {
    NoteContext
};
