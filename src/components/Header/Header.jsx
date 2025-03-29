import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className="py-4 shadow-md bg-teal-500 text-white">
  <Container>
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <Logo width="70px" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {navItems.map(
          (item) =>
            item.active && (
              <li key={item.name}>
                <button
                  className="px-5 py-2 text-lg font-medium rounded-lg transition-all duration-300
                   hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            )
        )}

        {/* Logout Button */}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>
  );
}

export default Header;
