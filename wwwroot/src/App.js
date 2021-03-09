import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import Home from './components/home';
import CreateNote from './components/create-note';
import Notes from './components/note';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <NavLink 
                exact to="/" 
                activeClassName="selected">
                    Home
                </NavLink>
                <NavLink 
                to="/notes" 
                activeClassName="selected">
                    Display Notes
                </NavLink>
                <NavLink 
                to="/write" 
                activeClassName="selected">
                    Write Note
                </NavLink>
                <Switch>
                    <Route path="/notes">
                        <Notes/>
                    </Route>
                    <Route path="/write">
                        <CreateNote/>
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