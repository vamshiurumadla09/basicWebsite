import React from "react";
import {connect} from 'react-redux';
 function AboutMe(params){
    console.log(params)
    return(
        <div className="store-page">
            <h1 className="text-center">About us</h1>
            <h1>{params.megaMenu.appTitle}</h1>
        </div>
    )
}
export default connect(function(store){ return store})(AboutMe)