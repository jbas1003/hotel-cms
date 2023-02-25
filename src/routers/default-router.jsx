import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./default-router.jsx"

const DefaultRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default DefaultRouter;