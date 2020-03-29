import React from 'react'
import { Link } from '@material-ui/core'
import "./index.css"
function BarSocial(){
    return(
        <div className="icon-bar">
            <Link href="https://github.com/makiavellipac" className="github">
                <img src="./github.png" alt="github"/>
            </Link>
            <Link href="https://www.linkedin.com/in/santiago-gonzalez-mancilla/" className="linkedin">
                <img src="./linkedin.png" alt="linkedin"/>
            </Link>
        </div>
    );
}
export default BarSocial