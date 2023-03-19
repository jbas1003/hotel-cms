import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../layouts/default.jsx';
import Dashboard from '../views/Dashboard/dashboard.jsx';
import Employees from '../views/employees/employees.jsx';
import { Login } from '../views/Login/login.jsx';
import Website from '../views/Website/website.jsx';


const IndexRouter = () => {
  
  return (
      <>
      
        <Routes>
          <Route path='/' element={<Login />}>
            <Route index path='/login' element={<Login />}/>
          </Route>
          
          <Route path='/admin' element={<Default />}>
            <Route index path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/website' element={<Website />} >
            </Route>
            <Route path='/admin/employees' element={<Employees />} />
          </Route>
        </Routes>

      </>
  );
}

export default IndexRouter;