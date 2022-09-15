import React, {Fragment} from 'react';
import Footer from '../components/Footer/Footer';
import PortfolioContent from '../components/PortfolioContent/PortfolioContent';
import SectionImage from '../components/SectionImage/SectionImage';
import SectionName from '../components/SectionName/SectionName';
import classes from './Section.module.css';

const Portfolio = () =>{
    return(
        <Fragment>
        <div className={classes.Section}>
            <div className={classes.Data}>
                <SectionName />
                <div className={classes.Content}>
                <PortfolioContent />

                </div>
            </div>

            <SectionImage />
  
        </div>
        <div className={classes.Footer}>
            <Footer />
        </div>
    </Fragment>
    )
}

export default Portfolio;