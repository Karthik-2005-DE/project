import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import ProductData from "../data/ProductData";

function NavBar() {
  const [search, setSearch] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false); // mobile search popup
  const navigate = useNavigate();

  const filtered = ProductData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (id) => {
    setSearch("");
    setShowSearchBox(false);
    navigate(`/product/${id}`);
  };

  return (
    <div className="relative">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-16 px-4 bg-orange-400 shadow-xl">
        
        {/* LOGO */}
        <h1 className="text-white text-xl font-bold">BiteBox.</h1>

        {/* ICONS */}
        <ul className="flex items-center gap-4">

          {/* Home */}
          <li>
            <Link to="/">
              <MdFoodBank size={24} className="text-white" />
            </Link>
          </li>

          {/* Login */}
          <li>
            <Link to="/login">
              <IoPersonSharp size={24} className="text-white" />
            </Link>
          </li>

          {/* Cart */}
          <li>
            <Link to="/cartlist">
              <FaCartPlus size={24} className="text-white" />
            </Link>
          </li>

          {/* Products */}
          <li>
            <Link to="/product">
              <IoFastFood size={24} className="text-white" />
            </Link>
          </li>

          {/* Admin */}
          <li>
            <Link to="/admin-signup">
              <RiAdminFill size={24} className="text-white" />
            </Link>
          </li>

          {/* SEARCH ICON (shown on mobile) */}
          <li className="block sm:hidden">
            <FiSearch
              size={24}
              className="text-white"
              onClick={() => setShowSearchBox(true)}
            />
          </li>

          {/* SEARCH BAR (only visible on tablet + desktop) */}
          <input
            type="text"
            placeholder="Find your food"
            className="hidden sm:block px-4 py-2 rounded-3xl w-48 md:w-64 bg-amber-500 text-white placeholder-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </ul>
      </div>

      {/* SEARCH OVERLAY (Mobile) */}
      {showSearchBox && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-[60] flex justify-center items-start pt-20">
          
          {/* White box */}
          <div className="bg-white w-11/12 max-w-md rounded-xl shadow-lg p-4">
            
            {/* Close button */}
            <button
              className="text-red-500 font-bold text-right w-full"
              onClick={() => setShowSearchBox(false)}
            >
              Close ✖
            </button>

            {/* Search input */}
            <input
              type="text"
              className="w-full border p-2 rounded-lg mt-2"
              placeholder="Search foods..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="max-h-64 overflow-y-auto mt-2">
              {search.length > 0 && filtered.length === 0 && (
                <p className="text-gray-600 text-center mt-4">No results</p>
              )}

              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                >
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      <div className="pt-16">
        <Outlet />
      </div>

    </div>
  );
}

export default NavBar;
