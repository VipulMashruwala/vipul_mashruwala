import React, {Fragment}  from "react";
import PortfolioContent from "../../components/PortfolioContent/PortfolioContent";
import classes from './Certification.module.css'
import data from '../../data.json'

const Certification = () => {
    var myCertifications = data.certifications.certification.map(result =>{
        return(
            <div key={result.name} className={classes.CertificationContent}>
                <div className={classes.Details}>
                    <p className={classes.InstituteName}>{result.name}</p>
                    <p className={classes.Field}>{result.organization}</p>
                </div>
            </div>
        )
    })
    return(
        <Fragment>
            <div className={classes.CertificationHeading}>
                <div className={classes.Certification}>
                    <p className={classes.Heading}>Certification</p>

                    <div className={classes.PortfolioContent}>
                        <PortfolioContent />
                    </div>
                </div>

                <div>
                    {myCertifications}
                </div>

            </div>
        </Fragment>
    )
}

export default Certification;