import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/statics/navbar/navbar.jsx';
import SideBar from '../components/statics/sidebar/sidebar.jsx';
// import DefaultRouter from '../routers/default-router.jsx';

const Default = () => {
  return (
    <>
        <NavBar />
        <SideBar />
        <div class="p-4 sm:ml-64">
          <div class="p-4 mt-14">
            <Outlet />
          </div>
        </div>
    </>
  );
}

export  default Default;