import React from 'react'
//import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import JobRoute from './components/JobRoute'
import EmployeeRoute from './components/EmployeeRoute'
import DepartmentRoute from './components/DepartmentRoute'
import JobHistoryRoute from './components/JobHistoryRoute'
import LocationsRoute from './components/LocationsRoute'
import RegionsRoute from './components/RegionsRoute'
import CountriesRoute from './components/CountriesRoute'
import './App.css'

export default function App(){
  return (
      <div className="app">
          <h1 className="header">Company HR</h1>
          <Navbar />
          <Router>
              <Switch>
                    <Route 
                        exact path="/"
                        render={() => <Home />}
                    />
                    <Route 
                        path = "/jobs"
                        render={() => <JobRoute />}
                    />
                    <Route 
                        path = "/employees"
                        render={() => <EmployeeRoute />}
                    />
                    <Route 
                        path = "/history"
                        render={() => <JobHistoryRoute />}
                    />
                    <Route 
                        path = "/departments"
                        render={() => <DepartmentRoute />}
                    />
                    <Route 
                      path= "/locations"
                      render={() => <LocationsRoute />}
                    />
                    <Route 
                        path = "/regions"
                        render={() => <RegionsRoute />}
                    />
                    <Route 
                        path = "/countries"
                        render={() => <CountriesRoute />}
                    />
            </Switch>
        </Router>
    </div>
)
} 