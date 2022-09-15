import React, { Fragment } from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Skills.module.css';
import data from '../../data.json'

const Skills = () => {
    var mySkills = data.skills.skills.map(result =>{
        return(
            <div className={classes.Details}>
                <p className={classes.CompanyName}>{result.name}</p>
            </div>
        )
    })

    return (
        <Fragment>
            <div className={classes.SkillsHeading}>
                <div className={classes.Skills}>
                    <p className={classes.Heading}>Skills</p>

                    <div className={classes.PortfolioContent}>
                        <PortfolioContent />
                    </div>
                </div>
                <div>
                    <div className={classes.SkillsContent}>
                        {mySkills}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;