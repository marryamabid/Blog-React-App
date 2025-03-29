import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Import icons for menu

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-4 shadow-md bg-teal-600 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo width="87spx" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-x-6 bg-teal-600 md:bg-transparent p-5 md:p-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      className={`px-5 py-2 text-lg font-medium rounded-lg transition-all duration-300
                      ${
                        location.pathname === item.slug
                          ? "bg-emerald-700 text-white"
                          : "hover:bg-emerald-600"
                      }`}
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false); // Close menu on click
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Logout Button (Separate for better visibility) */}
          {authStatus && (
            <div className="hidden md:block">
              <LogoutBtn />
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
