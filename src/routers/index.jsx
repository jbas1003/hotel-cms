import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Default from '../layouts/default.jsx';
import Dashboard from '../views/Dashboard/dashboard.jsx';
import Employees from '../views/Dashboard/employees/employees.jsx';
import { Login } from '../views/Login/login.jsx';
import useAuthContext from '../context/AuthContext.jsx';

const IndexRouter = () => {
  const { employee } = useAuthContext();
  
  return (
      <>
        <Routes>
          <Route path='/' element={<Login />}>
            <Route index path='/login' element={<Login />}/>
          </Route>
          
          <Route path='/admin' element={<Default />}>
            <Route index path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/employees' element={<Employees />} />
          </Route>
        </Routes>
      </>
  );
}

export default IndexRouter;