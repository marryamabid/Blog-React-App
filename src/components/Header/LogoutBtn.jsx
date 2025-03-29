import React from "react";
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
      try {
          await authService.logout();
          dispatch(logout());
      } catch (error) {
          console.error("Logout failed:", error);
      }
  };

  return (
      <button
          className="text-white inline-flex items-center gap-2 px-6 py-3 font-semibold text-lg bg-teal-500 rounded-lg shadow-md transition duration-300 hover:bg-emerald-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          onClick={logoutHandler}
          aria-label="Logout"
      >
          <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7"></path>
          </svg>
          Logout
      </button>
  );
}

export default LogoutBtn;