import React , {useState , useContext} from 'react';
import {useHistory} from 'react-router-dom';

import { AlertContext } from '../Context/notes/AlertState';
import { NoteContext } from '../Context/notes/NoteState';


export default function Login() {
    const { showAlert } = useContext(AlertContext);
    const {host} = useContext(NoteContext);
    console.log(host);

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
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" value={credentials.email} onChange={valueChanged} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={valueChanged} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
