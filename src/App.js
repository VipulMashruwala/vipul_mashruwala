import React, {Suspense} from 'react';
import { Switch, Redirect,Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
// import ParticlesBg from "particles-bg";
import './App.css';
import Internship from './pages/Internship/Internship';
import Education from './pages/Education/Education';
import Certification from './pages/Certification/Certification';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';

const App = () => {
  return (
    <div className="App">
     {/* <ParticlesBg color="#EBB4FF" 
     className="particles-bg-canvas-self"
      num={17}
        type="circle" bg={true} 
        />  */}
        
      <Header />
      <Suspense>
            <Switch>
                <Route exact path="/" >
                  <Redirect to="/home"/>
                </Route>
                <Route   path="/home" component={Home}>
                  <Home />
                </Route>

                <Route exact path="/portfolio" component={Portfolio}>
                  <Portfolio />
                </Route>

                <Route path="/portfolio/internship" component={Internship}>
                  <Internship />
                </Route>

                <Route  path="/portfolio/education" component={Education}>
                  <Education />
                </Route>

                <Route  path="/portfolio/certifications" component={Certification}>
                  <Certification />
                </Route>

                <Route  path="/portfolio/project" component={Project}>
                  <Project />
                </Route>

                <Route  path="/portfolio/skills" component={Skills}>
                  <Skills />
                </Route>
            </Switch>
          </Suspense>
    </div>
  );
}

export default App;
