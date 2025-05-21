"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false); // Fermer le menu mobile après navigation
  };

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
      <button onClick={() => handleNavigation("/")} className="flex items-center gap-2">
        <Image src="/next.svg" alt="Logo" width={100} height={28} priority />
      </button>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Menu links - desktop */}
      <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
        <li>
          <button onClick={() => handleNavigation("/about")} className="hover:underline">
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/contact")} className="hover:underline">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("/login")} className="hover:underline">
            Login
          </button>
        </li>
      </ul>

      {/* Menu links - mobile */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md p-4 flex flex-col gap-4 md:hidden z-50 text-sm font-medium">
          <li>
            <button onClick={() => handleNavigation("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/login")}>Login</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
