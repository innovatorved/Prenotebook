import React , {useContext} from 'react';
import PropTypes from 'prop-types';

import { AlertContext } from '../Context/notes/AlertState';

export default function Alert(){
    const {alertVar} = useContext(AlertContext);

    return (
        <div style={{height : "40px"}}>
            {alertVar && 
            <div>
                <div className={`alert alert-${alertVar.type} alert-dismissible fade show`} role="alert">
                    {alertVar.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    )
}

Alert.propTypes = {
    alertMsg : PropTypes.object,
}