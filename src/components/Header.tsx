"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserItem from "./UserItem";
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
      <div className="flex flex-grow gap-4 p-4 min-w-screen border-b justify-end relative">
        <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1385888860022976513/1bc7D0o__400x400.jpg" />
            <AvatarFallback>FM</AvatarFallback>
          </Avatar>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-12 mr-2 w-35 bg-gray-100 border-b rounded-md shadow-lg z-10">
            <div className="p-2">
              <UserItem />
            </div>
            <div className="py-2">
              <button className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                Settings
              </button>
              <button onClick={handleSignOut} className="block w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
