import React, { Fragment } from "react";
import classes from './HomeContent.module.css'
import {  useHistory} from 'react-router-dom'


const HomeContent = () =>{

    const history = useHistory();

    const buttonHandler = () => {
        history.replace('/portfolio');
    }



    return(
        <Fragment>
            <p className={classes.Objective}>
                    In search of an excellent opportunity to challenge myself in a position offering responsibility and opportunities which 
                    can help me to grow and advance while continuously learning. I see myself as a motivated individual who wants to 
                    constantly challenge myself to achieve more than I was set out to achieve.
                    
                    <div className={classes.Button}>
                         <button type='button' className={classes.ButtonTag}
                         onClick={buttonHandler}
                         
                         >Know More</button>
                    </div>  
            </p>
        </Fragment>
    );
}

export default HomeContent;