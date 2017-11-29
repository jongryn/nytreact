import React from 'react'
import UL from "../components/UL";
const Panel = (props)=>{
    let article = props.article;
    let found = props.found;

    return props.foudn ?(
        ( <div className="container">
            <div className="main-container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">
                                <strong><i className="fa fa-list-alt"></i>
                                
                                </strong>
                            </h1>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <div>
                                    <li className="list-group-item">
                                        <UL article = {article}
                                        found = {found} />
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    ) : ( <h1> No Result..</h1>)
}
export default Panel;