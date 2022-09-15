import React, {Fragment}  from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Internship.module.css';
import data from '../../data.json'


const Internship = () => {
    var internshipData = data.internships.internship.map((result => {
        return(
            <div key={result.company_name} className={classes.InternshipContent}>
                <div className={classes.Years}>
                    <p>{result.timeline}</p>
                </div>
                <div className={classes.Details}>
                    <p className={classes.CompanyName}>{result.company_name}</p>
                    <p className={classes.Profile}>{result.profile}</p>
                    <p className={classes.Duration}>{result.duration}</p>
                </div>
            </div>
        )
    }))
    
    return(
        <Fragment>
            
        <div className={classes.InternshipHeading}>
            <div className={classes.Internship}>
                <p className={classes.Heading}>Internship</p>

                <div className={classes.PortfolioContent}>
                    <PortfolioContent />
                </div>
            </div>
            <div>
                { internshipData }
            </div>

        </div>
    </Fragment>
    )
}

export default Internship;