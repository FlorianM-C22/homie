"use client";

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchUserInfo } from "@/utils/userInfo";

interface UserInfo {
    email: string;
}

interface User {
    email?: string;
}

const UserItem: React.FC = () => {
    const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData: User | null = await fetchUserInfo();
                if (userData !== null) {
                    setUserEmail(userData.email);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des informations utilisateur :');
                // Gérer l'erreur de récupération des données utilisateur ici
            }
        };

        getUserData();
    }, []);

    return (
        <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
            <Avatar>
                <AvatarImage src="https://avatar.iran.liara.run/public/3" />
                <AvatarFallback>FM</AvatarFallback>
            </Avatar>
            <div className="grow">
                <p className="text-[12px] font-medium">{userEmail}</p>
            </div>
        </div>
    );
};

export default UserItem;
