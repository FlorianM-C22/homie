"use client";

import { useState } from "react";
import UserItem from "@/components/UserItem";
import { signOut } from "@/utils/signout";
import { removeLoggedInCookie } from "@/utils/authCookie";
import { useRouter } from "next/navigation";

  export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const router = useRouter();

    const handleSignOut = async () => {
      try {
        await signOut();
        removeLoggedInCookie();
        router.push('/login');
      } catch (error) {
        console.error('Erreur lors de la déconnexion:');
      }
    };

    return (
      <div className="flex flex-grow gap-4 p-4 min-w-screen max-w-screen border-b justify-end relative">
        <div className="relative">
          <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
            <UserItem />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 top-full w-35 bg-slate-50 border-b rounded-md shadow-xl z-10 min-w-[220px]">
              <div className="py-2">
                <button className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                  Settings
                </button>
                <button onClick={handleSignOut} className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
