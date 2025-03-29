import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

function LogoutBtn() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const logoutHandler = async () => {
    setIsLoading(true); // Disable button while processing
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      disabled={isLoading}
      className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300
        ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-105 hover:from-emerald-500 hover:to-teal-500 active:scale-95 focus:ring-2 focus:ring-emerald-400"
        }
        text-white focus:outline-none`}
      aria-label="Logout"
    >
      {isLoading ? (
        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
      ) : (
        <FiLogOut className="w-5 h-5" />
      )}
      Logout
    </button>
  );
}

export default LogoutBtn;