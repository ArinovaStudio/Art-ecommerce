import React from 'react';
import { Search, UserRound, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar-container ">
      <div className="navbar-logo">LOGO</div>

      <div className="navbar-center-group">
        {/* Search Input (Frame 4) */}
        <div className="navbar-search-frame">
          <input
            type="text"
            placeholder="Search for Artist, Painting..."
            className="navbar-search-input"
          />
        </div>

        {/* Search Button (Group 15) */}
        <div className="navbar-icon-btn navbar-icon-search-btn">
          <Search size={24} color="#FFFFFF" strokeWidth={2} />
        </div>
      </div>

      <div className="navbar-actions">
        {/* Shopping Bag (Group 17) */}
        <div className="navbar-icon-btn navbar-icon-bag">
          <ShoppingBag size={24} strokeWidth={1.3} />
        </div>

        {/* User Profile (Group 16) */}
        <div className="navbar-icon-btn navbar-icon-user">
          <UserRound size={28} strokeWidth={1.4} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
