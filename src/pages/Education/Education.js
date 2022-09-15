import React, {Fragment}  from "react";
// import { useEffect, useState } from "react";
import PortfolioContent from "../../components/PortfolioContent/PortfolioContent";
import classes from './Education.module.css'
import data from '../../data.json'


const Education = () => {
        var myEducation = data.my_education.education.map((result => {
            return(
                
                <div key={result.school} className={classes.EducationContent}>
                    <div className={classes.Years}>
                    <p>{result.timeline}</p>
                    </div>
                    <div className={classes.Details}>
                        <p className={classes.InstituteName}>{result.school}</p>
                        <p className={classes.Field}>{result.stream}</p>
                        <p className={classes.Grade}>{result.grade}</p>
                    </div>
                </div>
            )
        }))
    
  
    return(
        <Fragment>
            <div className={classes.EducationHeading}>
                <div className={classes.Education}>
                    <p className={classes.Heading}>Education</p>

                    <div className={classes.PortfolioContent}>
                        <PortfolioContent />
                    </div>
                    
                   
                </div>

                <div>
                    {myEducation}

                </div>
            </div>
        </Fragment>
    )
}

export default Education;