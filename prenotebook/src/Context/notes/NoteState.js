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
  const [notes, setnotes] = useState(initialValues)


  const fetchNotes = async()=>{
    const url = `${host}/api/notes/fetchallnotes`;
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmM3YjRkMjc1Njg1MzYzODRhMjY3In0sImlhdCI6MTYzNjgxMjc0MH0.QqNRVXQMguBqSR-e8PpYeHf-y1EwV_Vw-m4MGbHPrCM";

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
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmM3YjRkMjc1Njg1MzYzODRhMjY3In0sImlhdCI6MTYzNjgxMjc0MH0.QqNRVXQMguBqSR-e8PpYeHf-y1EwV_Vw-m4MGbHPrCM";

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
    console.log(jsonRes);

    setnotes([...notes , jsonRes]);
  };




  // Delete Note
  const DeleteNote=(id)=>{
    setnotes(notes.filter((note)=>{return note._id!==id}))
  };



  const UpdateNote=(id , title , description , tag)=>{
   
    // Call fetch api and update
    const url = `${host}/api/notes/updatenote/${id}`;
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4ZmM3YjRkMjc1Njg1MzYzODRhMjY3In0sImlhdCI6MTYzNjgxMjc0MH0.QqNRVXQMguBqSR-e8PpYeHf-y1EwV_Vw-m4MGbHPrCM";

    const note = {
      "title" : title,
      "description" : description,
      "tag" : tag
    }

    const response = fetch(
      url,{
        method : 'PUT',
        headers : {
          "Content-Type" : "application/json",
          "auth-token" : authToken
        },
        body : JSON.stringify(note)
      }
    );
    response.json();

    // search for note with id and Update
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
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
