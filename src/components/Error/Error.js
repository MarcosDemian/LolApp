import React from 'react';
import './Error.css';

const NotFound = ({ error }) => {
    return (
        <div className="not-found">
            <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
            <h5>{error}, Intenta recargar la pagina.</h5>
        </div>
    );
}

export default NotFound;