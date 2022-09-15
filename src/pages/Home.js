import React, {Fragment}  from "react";
import Footer from "../components/Footer/Footer";
import HomeContent from "../components/HomeContent/HomeContent";
import SectionImage from "../components/SectionImage/SectionImage";
import SectionName from "../components/SectionName/SectionName";
import classes from './Section.module.css';

const Home = () => {
    return(
        <Fragment>
            <div className={classes.Section}>
                <div className={classes.Data}>
                        <SectionName />
                    <div className={classes.Content}>
                       <HomeContent />
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


export default Home;