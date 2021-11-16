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

  const [notes, setnotes] = useState(initialValues);


  const fetchNotes = async()=>{
    const authToken = localStorage.getItem("token");
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
    const authToken = localStorage.getItem("token")
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
    setnotes([...notes , jsonRes.saveNote]);
    return jsonRes;
  };




  // Delete Note
  const DeleteNote=async(id)=>{
    const authToken = localStorage.getItem("token")
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
    const authToken = localStorage.getItem("token")
   
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
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      if (newNotes[index]._id === id){
        newNotes[index].title = note.title;
        newNotes[index].description = note.description;
        newNotes[index].tag = note.tag;
        setnotes(newNotes);
        break;
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
