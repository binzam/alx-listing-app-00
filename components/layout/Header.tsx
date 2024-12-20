import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="bg-blue-500 text-white py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>Homie.io</span>
          </Link>
        </div>

        <div className="flex-grow max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for properties..."
            className="w-full px-4 py-2 rounded-lg text-black"
          />
        </div>

        <div className="ml-4">
          <select className="px-4 py-2 rounded-lg bg-blue-700 text-white">
            <option value="rooms">Rooms</option>
            <option value="mansion">Mansion</option>
            <option value="countryside">Countryside</option>
            <option value="beachfront">Beachfront</option>
          </select>
        </div>

        <div className="ml-4">
          <Link href="/signin">
            <span className="px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">
              Sign In
            </span>
          </Link>
          <Link href="/signup">
            <span className="px-4 py-2 bg-white text-blue-500 rounded-lg">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
