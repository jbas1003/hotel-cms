import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Default from '../layouts/default.jsx';
import Dashboard from '../views/Dashboard/index.jsx';
import Users from '../views/Dashboard/users/users.jsx';

const IndexRouter = () => {
  return (
      <>
        <Routes>
          <Route path='/admin' element={<Default />}>
            <Route index path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/users' element={<Users />} />
          </Route> 
        </Routes>
      </>
  );
}

export default IndexRouter;