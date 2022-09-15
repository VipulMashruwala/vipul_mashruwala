import React, { Fragment } from "react";
import classes from './Footer.module.css'
// import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedinIn,
    faFacebook,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{

    return(
        <Fragment>
            <div className={classes.PhoneContent}>
                <p className={classes.Phone}>Phone</p>
                <p> <span className={classes.MobileIcon}><i className='fa fa-phone'></i></span>+91 6264958521</p>
            </div>
            <div className={classes.FollowMeContent}>
                <p className={classes.FollowMe}>Follow me</p>
                <p>

                <Link to={{pathname:"https://github.com/VipulMashruwala"}} target="_blank">
                    <FontAwesomeIcon  className={classes.Icon} icon={faGithub} /> 
                </Link>

                <Link to={{pathname:"https://www.linkedin.com/in/vipul-mashruwala-1732821a3/"}} target="_blank">
                    <FontAwesomeIcon className={classes.Icon} icon={faLinkedinIn} />
                </Link>

                <Link to={{pathname:"https://www.facebook.com/vipul.mashruwala.9/"}} target="_blank">
                    <FontAwesomeIcon className={classes.Icon} icon={faFacebook} />
                </Link>

                <Link to={{pathname:"https://www.instagram.com/mashruwala.vipul/"}} target="_blank">
                    <FontAwesomeIcon className={classes.Icon} icon={faInstagram} />
                </Link>
    

                </p>
            </div>
            <div className={classes.EmailContent}>
                <p className={classes.Email}>Email</p>
                <p>mashruwala.vipul@gmail.com</p>
            </div>
            <br />
            <br />
      
        </Fragment>
    )

}
export default Footer;
