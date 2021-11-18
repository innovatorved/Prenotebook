import React , {useState , useContext} from 'react';
import {useHistory} from 'react-router-dom';

import { AlertContext } from '../Context/notes/AlertState';
import { NoteContext } from '../Context/notes/NoteState';
import { BackContext } from '../Context/notes/BackState';

export default function Login() {
    const { showAlert } = useContext(AlertContext);
    const {host} = useContext(NoteContext);
    const {mode} = useContext(BackContext);

    const history = useHistory();

    const [credentials, setcredentials] = useState({
        "email" : "",
        "password" : ""
    });

    const LoginFunc = async()=>{
        const url = `${host}/api/auth/login`;
        const response = await fetch(
          url,{
            method : 'POST',
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(credentials)
          }
        );
        const returnVal = await response.json();
        return returnVal;
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const json = await LoginFunc();
        // console.log(json);
        if (json.success){
            localStorage.setItem("token" , json.authtoken);
            history.push("/");
            showAlert("Succesfully Login" , "primary");
        }
        else{
            showAlert("Problem with Login" , "warning");
        }
    };

    const valueChanged=(e)=>{
        setcredentials({...credentials , [e.target.name]:e.target.value});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" style={{"color" : mode==="light"?"":"#dee4ce"}}>Email address</label>

                    <input type="email" style={{"backgroundColor" : mode==="light"?"":"#667574" ,"color" : mode==="light"?"":"white"}} name="email" value={credentials.email} onChange={valueChanged} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" style={{"color" : mode==="light"?"":"#dee4ce"}}>Password</label>

                    <input type="password" style={{"backgroundColor" : mode==="light"?"":"#667574","color" : mode==="light"?"":"white"}} name="password" value={credentials.password} onChange={valueChanged} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}
