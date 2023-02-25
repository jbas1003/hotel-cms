import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../layouts/default.jsx';
import Dashboard from '../views/Dashboard/dashboard.jsx';
import Users from '../views/Dashboard/employees/employees.jsx';
import { Login } from '../views/Login/login.jsx';

const IndexRouter = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/admin' element={<Default />}>
            <Route index path='/admin/' element={<Dashboard />} />
            <Route index path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/users' element={<Users />} />
          </Route> 
        </Routes>
      </>
  );
}

export default IndexRouter;