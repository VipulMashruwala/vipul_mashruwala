import React, { Fragment } from "react";
import classes from './PortfolioContent.module.css'
import { NavLink } from 'react-router-dom'


const PortfolioContent = () =>{
    return(
        <Fragment>
            
               <ul className={classes.List}>
                   <li><NavLink to={`/portfolio/internship`} activeClassName={classes.active} className={classes.Link}>Internship</NavLink></li>
                   <li><NavLink to={`/portfolio/education`} activeClassName={classes.active} className={classes.Link}>Education</NavLink></li>
                   <li><NavLink to={`/portfolio/certifications`} activeClassName={classes.active} className={classes.Link}>Certification</NavLink></li>
                   <li><NavLink to={`/portfolio/skills`} activeClassName={classes.active} className={classes.Link}>Skills</NavLink></li>
                   <li><NavLink to={`/portfolio/project`} activeClassName={classes.active} className={classes.Link}>Project</NavLink></li>
               </ul>
            
        </Fragment>
    );
}

export default PortfolioContent;