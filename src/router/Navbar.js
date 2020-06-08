
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import ProjectPage from '../components/ProjectPage'
import Header from '../components/Header'

export default function Navbar() {
    return (
        <Router>
            <div className='content-container'>
                <Header />
                <div>
                    <button className='button'>
                        <Link className='button__link' to="/projects">Projects</Link>
                    </button>
                </div>
            </div>
            <Switch>
                <Route exact path="/">
                    <DashboardPage />
                </Route>
                <Route path="/projects">
                    <ProjectPage />
                </Route>
            </Switch>
        </Router>
    );
}