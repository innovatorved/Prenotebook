import React , {useState} from 'react'

export default function Login() {
    const [credentials, setcredentials] = useState({
        "email" : "",
        "password" : ""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

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
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
