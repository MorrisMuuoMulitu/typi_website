import React from 'react';
import { Link } from 'react-router-dom';
import OttopadLogo from './OttopadLogo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <OttopadLogo />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
