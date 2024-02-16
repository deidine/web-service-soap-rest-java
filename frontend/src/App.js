import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom"; //Router,
import ListEmployeeComponent from './Routes/Employee/ListEmployeeComponent';
import ViewEmployeeComponent from './Routes/Employee/ViewEmployeeComponent';
import AddEmployeeComponent from './Routes/Employee/AddEmployeeComponent';
import EditEmployeeComponent from './Routes/Employee/EditEmployeeComponent';
import NotFoundComponent from './NotFound/NotFoundComponent';
import SoapServiceComponent from './Routes/SoapServiceComponent';
// import SoapClientComponent from './Routes/SoapClientComponent';

import { Lines } from 'react-preloaders';

import NavbarComponent from './Navbar/NavbarComponent';

import tresore  from './Assets/img/tresore.jpeg';
//deidine
function App() {
  return (            
    <div className="App" >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
          <NavbarComponent />
          <a href="/">
            {/* style={{width: 400, height: 100}}  */}
            <img style={{ height: "100px", margin: "10px 0"}}  
          src={tresore} alt="" />
          </a>
          <SoapServiceComponent />
          {/* <SoapClientComponent /> */}
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent} />
                <Route path="/employees" component={ListEmployeeComponent} />
                <Route path="/view-employee/:employeeid" component={ViewEmployeeComponent} />
                <Route path="/add-employee" component={AddEmployeeComponent} />
                <Route path="/edit-employee" component={EditEmployeeComponent} />

                 <Route path="/notfound" component={NotFoundComponent} />

                <Route path="*" component={NotFoundComponent} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>

      
      <Lines animation="slide" />

    </div>
  );
}

export default App;