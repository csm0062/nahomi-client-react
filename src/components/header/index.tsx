import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'CV', path: '/cv' },
    { label: 'Research', path: '/research' },
    { label: 'Projects', path: '/projects' },
    { label: 'Articles', path: '/articles' },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-50">
      {/* 로고 / 이름 */}
      <Link to="/" className="text-5xl font-bold text-gray-800">
        SEULA LEE
      </Link>

      {/* 네비게이션 */}
      <nav className="flex space-x-5">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              'font-semibold hover:text-gray-800 transition-colors',
              location.pathname === item.path
                ? 'text-gray-800'
                : 'text-gray-400',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
