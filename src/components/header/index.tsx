import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'CV', path: '/cv' },
    { label: 'Research', path: '/research' },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-50">
      {/* 로고 / 이름 */}
      <Link to="/" className="text-xl font-bold text-gray-800">
        Seula's Lab
      </Link>

      {/* 네비게이션 */}
      <nav className="flex space-x-5">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              'font-semibold text-gray-600 hover:text-blue-500 transition-colors',
              location.pathname === item.path &&
                'border-b-2 border-blue-500 pb-1',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
