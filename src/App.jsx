import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import './App.css';
import { login, logout } from './store/authSlice';
import  Header  from "./components/Header/Header";
import Footer  from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // ✅ Correct usage
  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout({ userData }));
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []); 

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-blue-50'>
      <div className='w-full block'>
        <Header />
        <main>

          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
