import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import Contact from './components/contact.jsx';
import Home from './components/home.jsx';
import NoteForm from './components/noteform.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                <ul>
                    <li>
                        <NavLink 
                        exact to="/" 
                        activeClassName="selected">
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/contact" 
                        activeClassName="selected">
                        Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/write" 
                        activeClassName="selected">
                        Write Note
                        </NavLink>
                    </li>
                </ul>
                </nav>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/write">
                        <NoteForm />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;