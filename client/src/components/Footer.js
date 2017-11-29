import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const Footer = (props) =>{

    return(
<div className = "container">
<footer>
    <hr/>
<p className = "pull-center">
<i className = "fa fa-github" aria-hidden="true"> &copy; Jon Gryn</i> </p>
</footer>
</div>
    )
}
export default Footer;