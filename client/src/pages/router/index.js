import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from "../HomePage/index"
import BlogPage from '../blogpage'
import BlogDetailsPage from '../BlogDetailsPage'
import Scrollbar from '../../components/scrollbar'

      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
              {/* <Route path='/Blog' component={BlogPage} /> */}
              {/* <Route path='/Blog-details' component={BlogDetailsPage} /> */}
            </Switch>
            <Scrollbar />
          </Router>
      
    </div>
  );
}

export default AllRoute;
