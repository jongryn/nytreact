import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
class Nopage extends React.Component{

    redner() {
        return(
            <div className="container">
                <h1 className="text-center"> Error 404</h1>
            </div>
        )
    }
}

export default Nopage;