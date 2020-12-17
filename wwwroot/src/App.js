import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import Home from './components/home';
import NoteForm from './components/noteform';
import Notes from './components/note';
import Login from './components/login';
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
                to="/login" 
                activeClassName="selected">
                    Login
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
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/notes">
                        <Notes/>
                    </Route>
                    <Route path="/write">
                        <NoteForm/>
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