import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MdFoodBank } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import ProductData from '../data/ProductData';

function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = ProductData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (id) => {
    setSearch("");        // close search dropdown
    navigate(`/product/${id}`);
  };

  return (
    <div>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 font-display text-lg px-5 py-3 bg-orange-400 shadow-xl">
        <h1 className="text-white text-xl font-bold">BiteBox.</h1>

        <nav>
          <ul className="flex items-center gap-6">

            <li>
              <Link to="/">
                <MdFoodBank size={24} className="hover:text-white mt-2" />
              </Link>
            </li>

            <li>
              <Link to="/login">
                <IoPersonSharp size={24} className="hover:text-white mt-2" />
              </Link>
            </li>

            <li>
              <Link to="/cartlist">
                <FaCartPlus size={24} className="hover:text-white mt-2" />
              </Link>
            </li>

            <li>
              <Link to="/product">
                <IoFastFood size={24} className="hover:text-white mt-2" />
              </Link>
            </li>

            {/* SEARCH BAR */}
            <input
              type="text"
              placeholder="Find your flavor..."
              className="px-4 mt-2 py-2 rounded-3xl outline-none bg-amber-200 text-black placeholder-gray-600 shadow-inner"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </ul>
        </nav>
      </div>

      {/* SEARCH DROPDOWN */}
      {search.length > 0 && (
        <div className="absolute mt-20 w-full bg-white shadow-lg rounded-xl p-4 max-w-md left-1/2 transform -translate-x-1/2 z-40">

          {filtered.length === 0 ? (
            <p className="text-gray-600 text-center">No results found</p>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded"
              >
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            ))
          )}

        </div>
      )}

      <div>
        <Outlet />
      </div>

    </div>
  );
}

export default NavBar;
