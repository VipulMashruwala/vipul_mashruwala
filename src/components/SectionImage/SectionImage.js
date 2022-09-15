import React, { Fragment } from "react";
import classes from './SectionImage.module.css'
import IMAGE from './VipulMashruwala_new.jpeg'

const SectionImage = () =>{
    return(
        <Fragment>
           <div className={classes.ImageBorder}>
               <img className={classes.Image} src = {IMAGE} alt="vipul" />
            </div>
        </Fragment>
    );
}

export default SectionImage;