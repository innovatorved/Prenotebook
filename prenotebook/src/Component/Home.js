import React from 'react';
// import {useEffect , useState} from 'react';
// import HomePage from './HomePage';
import Notes from './Notes';


export default function Home() {
    // const [token, settoken] = useState(null);

    // useEffect(() => {
    //     const tok = localStorage.getItem('token');
    //     settoken(tok);
    // }, []);
    
    return (
        <div>
            {
                // token ?
                <Notes />
                // :
                // <HomePage />

            }
        </div>
    )
}
