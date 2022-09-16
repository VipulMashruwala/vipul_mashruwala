import React, {Fragment}  from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data.json'
import { Link } from 'react-router-dom';
import {
    faGithub
  } from '@fortawesome/free-brands-svg-icons';
import {
    faPaperclip
} from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    var myProject = data.projects.project.map((result => {
        return(
            <div key={result.name} className={classes.ProjectContent}>
                <div className={classes.Details}>
                    <p className={classes.CompanyName}>{result.name}</p>
                    <p className={classes.Profile}>{result.objective}</p>
        
                    <Link to={{pathname: result.gitHub_link}} target="_blank">
                        <FontAwesomeIcon  className={classes.Icon} icon={faGithub} /> 
                    </Link>
                    <Link to={{pathname: result.project_link}} target="_blank">
                        <FontAwesomeIcon className={classes.Icon} icon = {faPaperclip}/>
                    </Link>
                </div>
            </div>
        )
    }))

    return(
        <Fragment>
             <div className={classes.ProjectHeading}>
            <div className={classes.Project}>
                <p className={classes.Heading}>Project</p>

                <div className={classes.PortfolioContent}>
                    <PortfolioContent />
                </div>
            </div>
            <div>
                {myProject}
            </div>
        </div>
        </Fragment>
    )
}

export default Project;