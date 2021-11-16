import React , {useState} from 'react';
import {useHistory} from "react-router-dom";

export default function SignUp() {
    const history = useHistory();
    const host = "http://localhost:3002";

    const [state, setstate] = useState(false);
    const [SignUpInfo, setSignUpInfo] = useState({
        "fname" : "",
        "lname" : "",
        "username" : "",
        "email" : "",
        "password" : "",
        "cpassword" : ""
    })

    const runthis= async()=>{
        const username = SignUpInfo.username;
        const url = `${host}/api/auth/checkUsername/${username}`;

        if(username.length >= 6){
            const response = await fetch(url , {
                method : 'PUT',
                headers : {
                "Content-Type" : "application/json"
                    }
                });
            const jsonRes = await response.json();
            if (jsonRes.res === true){
                setstate(true);
            }
            else if (jsonRes.res === false){
                setstate(false);
            }
        }
    };

    const ValueChanged=(e)=>{
        setSignUpInfo({...SignUpInfo , [e.target.name] : e.target.value});
        // console.log(SignUpInfo);
    }

    const SignUpToAccount = async(e)=>{
        e.preventDefault();
        // console.log(SignUpInfo);
        const value = {
            "name" : `${SignUpInfo.fname + " " + SignUpInfo.lname}`,
            "username" : SignUpInfo.username,
            "email" : SignUpInfo.email,
            "password" : SignUpInfo.password
        }
        // console.log(value);
        const url = `${host}/api/auth/createuser`;
        const response = await fetch(
        url,{
            method : 'POST',
            headers : {
            "Content-Type" : "application/json",
            },
            body : JSON.stringify(value)
        }
        );
        // eslint-disable-next-line
        const json = await response.json();
        if (json.success){
            localStorage.setItem("token" , json.authtoken);
            history.push("/");
        }
    };

    return (
        <form onSubmit={SignUpToAccount}>
            <div className="form-row row">
                <div className="form-group col-md-6">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="form-control" value={SignUpInfo.fname} onChange={ValueChanged} id="fname" name="fname" placeholder="John" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="form-control" value={SignUpInfo.lname} onChange={ValueChanged} id="lname" name="lname" placeholder="Lie" />
                </div>
            </div>

            <div className="form-row row">
            <div className="form-group col-md-6">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={SignUpInfo.email} onChange={ValueChanged} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required={true}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input type="text" className={`form-control ${state?"border border-danger":""}`} value={SignUpInfo.username} onChange={ValueChanged} onBlur={runthis} id="username" name="username"  placeholder="john123" minLength={6} required={true} />
                    <small id="emailHelp" className={`form-text text-muted ${state?"":"d-none"}`}>Username Not Available</small>
                </div>
            </div>

            <div className="form-row row">
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={SignUpInfo.password} onChange={ValueChanged} id="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className={`form-control ${SignUpInfo.password!==SignUpInfo.cpassword?"border border-danger":""}`} value={SignUpInfo.cpassword} onChange={ValueChanged} id="cpassword" name="cpassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <button type="submit" disabled={SignUpInfo.password!==SignUpInfo.cpassword} className="btn btn-primary my-3">Sign Up</button>
        </form>
    )
}
