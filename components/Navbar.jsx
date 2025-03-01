"use client";

import React, { useState, useRef, useEffect } from "react";
import { CiCircleChevDown } from "react-icons/ci";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const dropdownRefs = useRef([]);
  const timeoutRef = useRef(null);

  const handleDropdownEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = (event) => {
    timeoutRef.current = setTimeout(() => {
      const relatedTarget = event.relatedTarget;
      const isMovingToAnotherDropdown = dropdownRefs.current.some(
        (ref) =>
          ref && ref !== event.currentTarget && ref.contains(relatedTarget)
      );

      if (!isMovingToAnotherDropdown) {
        setActiveDropdown(null);
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav
      className="text-primary px-6 py-3 border-b-1 border-dotted "
      ref={navbarRef}
    >
      <div className="flex justify-between items-center gap-4 p-2 text-l">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" className="h-15" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMobileMenu} className="lg:hidden block text-2xl">
          ☰
        </button>

        {/* Navbar Links (Desktop) */}
        <ul
          className={`lg:flex space-x-15 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Hakkımda Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownEnter(0)}
            onMouseLeave={handleDropdownLeave}
            ref={(el) => (dropdownRefs.current[0] = el)}
          >
            <div className="relative py-2">
              <button className=" hover:text-gray-300 cursor-pointer font-normal tracking-wider text-secondary flex items-center gap-2">
                Hakkımda <CiCircleChevDown />
              </button>

              {/* Gap Bridge */}
              <div className="absolute inset-x-0 top-full h-3 bg-transparent" />

              {activeDropdown === 0 && (
                <ul
                  className="absolute left-0 pt-2 bg-white text-black shadow-lg w-48 z-50"
                  onMouseEnter={() => handleDropdownEnter(0)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <a
                      href="/hakkimda/fitoterapi"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Fitoterapi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/ozonterapi"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Ozonterapi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/mezoterapi"
                      className="block px-4 py-2  text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Mezoterapi
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* Cilt Hastalıkları Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownEnter(1)}
            onMouseLeave={handleDropdownLeave}
            ref={(el) => (dropdownRefs.current[1] = el)}
          >
            <div className="relative py-2">
              <button className="hover:text-gray-300 cursor-pointer font-normal tracking-wider text-secondary  flex items-center gap-2 ">
                Cilt Hastalıkları <CiCircleChevDown />
              </button>

              <div className="absolute inset-x-0 top-full h-3 bg-transparent" />

              {activeDropdown === 1 && (
                <ul
                  className="absolute left-0 pt-2 bg-white text-black shadow-lg w-48 z-50 "
                  onMouseEnter={() => handleDropdownEnter(1)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <a
                      href="/hakkimda/cilt-hastaliklari/sedef"
                      className="block px-4 py-2  text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Sedef
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/cilt-hastaliklari/egzama"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Egzama
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/cilt-hastaliklari/liken-planus"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Liken Planus
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/cilt-hastaliklari/ikitiyozis"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      İktiyozis
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/cilt-hastaliklari/akne"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Akne
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* Romatizmal Hastalıklar Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => handleDropdownEnter(2)}
            onMouseLeave={handleDropdownLeave}
            ref={(el) => (dropdownRefs.current[2] = el)}
          >
            <div className="relative py-2">
              <button className="hover:text-gray-300 cursor-pointer font-normal tracking-wider text-secondary  flex items-center gap-2">
                Romatizmal Hastalıklar <CiCircleChevDown />
              </button>

              <div className="absolute inset-x-0 top-full h-3 bg-transparent" />

              {activeDropdown === 2 && (
                <ul
                  className="absolute left-0 pt-2 bg-white text-black shadow-lg w-48 z-50"
                  onMouseEnter={() => handleDropdownEnter(2)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <li>
                    <a
                      href="/hakkimda/romatizmal-hastaliklar/romatoid-artrit"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Romatoid Artrit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/romatizmal-hastaliklar/ankilozan-spondilit"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Ankilozan Spondilit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/romatizmal-hastaliklar/hashimoto-troidi"
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Hashimoto
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimda/romatizmal-hastaliklar/sistemik-lupus-eritematozus "
                      className="block px-4 py-2 text-dropdown hover:bg-gray-100 border-b-2 shadow-xl rounded-md"
                    >
                      Sistemik Lupus Eritematozus
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </li>

          {/* Diğer Linkler */}
          <li className="py-2">
            <a
              className="hover:text-gray-300 font-normal tracking-wider text-secondary"
              href="#"
            >
              Videolar
            </a>
          </li>
          <li className="py-2">
            <a
              href="/iletisim"
              className="hover:text-gray-300 font-normal tracking-wider text-secondary"
            >
              İletişim
            </a>
          </li>
          <li className="py-2">
            <a
              href="/sikca-sorulan-sorular"
              className="hover:text-gray-300 font-normal tracking-wider text-secondary"
            >
              S.S.S
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
