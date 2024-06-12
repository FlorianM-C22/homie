"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginForm from "@/components/loginform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";
import { toast } from 'react-toastify';

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
                    toast.error("Invalid mail or password. Please try again.");
                } else {
                    throw error;
                }
            } else {
                document.cookie = `isLoggedIn=true; path=/; max-age=3600`;
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
