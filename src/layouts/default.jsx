import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/statics/navbar/navbar.jsx';
import SideBar from '../components/statics/sidebar/sidebar.jsx';
import useAuthContext from '../context/AuthContext.jsx';

const Default = () => {
  const { employee } = useAuthContext();

  return employee ? (
    <>
        <NavBar />
        <SideBar />
        <div className="p-4 sm:ml-64">
          <div className="p-4 mt-14">
            <Outlet />
          </div>
        </div>
    </>
  )
  : <Navigate to="/login" />
}

export  default Default;