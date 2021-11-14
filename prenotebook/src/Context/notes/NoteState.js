import { createContext , useState} from 'react';

// Createcontext
const NoteContext = createContext();

let initialValues = [
      {
        "_id": "1",
        "title": "",
        "description": "",
        "tag": "Genral",

      },
      {
        "_id": "2",
        "title": "",
        "description": "",
        "tag": "Genral",
      },
      {
        "_id": "3",
        "title": "",
        "description": "",
        "__v": 0
      }
    ];


const NoteState = (props) => {
  const host = "http://localhost:3002";
  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmM3YjRkMjc1Njg1MzYzODRhMjY3In0sImlhdCI6MTYzNjgxMjc0MH0.QqNRVXQMguBqSR-e8PpYeHf-y1EwV_Vw-m4MGbHPrCM";

  const [notes, setnotes] = useState(initialValues)


  const fetchNotes = async()=>{
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(
      url,{
        method : 'GET',
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : authToken
        }
      }
    );
    const FetchedNotes = await response.json();
    // Set the Notes
    setnotes(FetchedNotes);
  };


  // Add Notes
  const AddNote= async(note)=>{
    // Call fetch api and update
    const url = `${host}/api/notes/createnotes`;
    const response = await fetch(
      url,{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : authToken
        },
        body : JSON.stringify(note)
      }
    );
    const jsonRes = await response.json();
    setnotes([...notes , jsonRes]);
  };




  // Delete Note
  const DeleteNote=async(id)=>{
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(
      url,{
        method : 'DELETE',
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : authToken
        }
      }
    );
    // eslint-disable-next-line
    const jsonRes = await response.json();

    setnotes(notes.filter((note)=>{return note._id!==id}))
  };



  const UpdateNote=async(id , note)=>{
   
    // Call fetch api and update
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url,{
        method : 'PUT',
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : authToken
        },
        body : JSON.stringify(note)
      }
    );
    // eslint-disable-next-line
    const jsonRes = await response.json();

    // search for note with id and Update
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id){
        element.title = note.title;
        element.description = note.description;
        element.tag = note.tag;
        const n = notes.filter((singleNote)=>{
          if (singleNote._id !== element.id){
            return singleNote;
          }else{
            return element;
          }
        });
        setnotes(n);
      }
    }
  }
    return (
        <NoteContext.Provider value={{notes, AddNote , DeleteNote ,fetchNotes,UpdateNote , setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;
export {
    NoteContext
};
