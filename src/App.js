import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

//component imports
//import Navbar from './components/navbar.js';
//import Scrollbox from './components/scroll.js';
import Footer from './components/footer.js';

//page imports
import Landing from './pages/landing.js';
import AboutMe from "./pages/story.js";
import Contact from "./pages/contact.js";
import Project from './pages/projectLanding.js';
import Test from './pages/test.js';

function App() {
    return (
		<Router>
		  <div className="page-skeleton">
			<div className='body-container'>
				<Switch >
				  <Route exact path="/" component={Landing} />
				  <Route path="/aboutme" component={AboutMe} />
				  <Route path="/projects" component={Project} />
				  <Route path="/contact" component={Contact} />
				  <Route path="/test" component={Test} />
				</Switch>
			</div>
			<Footer />
		  </div>
		</Router>
    );
}

export default App