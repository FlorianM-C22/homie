"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginForm from "@/components/loginform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";
import { setLoggedInCookie } from '@/utils/authCookie';

export default function Login () {
    const [data, setData] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                if (error.message === "Invalid login credentials") {
                } else {
                    throw error;
                }
            } else {
              setLoggedInCookie(); // Définir le cookie d'état de connexion
              router.push("/dashboard");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
            <FadeContainer>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", zIndex: 1 }}>
                    <LoginForm handleChange={handleChange} handleSubmit={handleLogin} />
                </div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <WavyBackgroundDemo />
                </div>
            </FadeContainer>
    );
}
