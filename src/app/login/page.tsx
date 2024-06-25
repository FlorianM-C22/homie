"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginForm from "@/components/loginform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";
import { setLoggedInCookie } from '@/utils/authCookie';
import { useToast } from "@/components/ui/use-toast";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react"; // Assurez-vous d'avoir les bonnes icônes importées

export default function Login() {
    const [data, setData] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const router = useRouter();
    const { toast } = useToast();

    // Gestion de la soumission du formulaire de login avec email/password
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                toast({ title: "Login Failed", description: "Wrong login credentials." });
                console.error("Login error:", error);
            } else {
                toast({ title: "Login Success !", description: "Redirecting to dashboard..." });
                setLoggedInCookie(); // Définissez ici votre logique pour gérer la connexion
                router.push("/dashboard"); // Redirection vers le dashboard après login
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    // Gestion du login avec GitHub via OAuth
    const handleGithubLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
            });

            if (error) {
                throw error;
            } else {
                toast({ title: "GitHub Login Success !", description: "Redirecting..." });
                router.push("/dashboard"); // Redirection vers le dashboard après login
            }
        } catch (error) {
            console.error("GitHub login error:", error);
        }
    };

    // Gestion du login avec Google via OAuth
    const handleGoogleLogin = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });

            if (error) {
                throw error;
            } else {
                toast({ title: "Google Login Success !", description: "Redirecting..." });
                router.push("/dashboard"); // Redirection vers le dashboard après login
            }
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    // Gestion des changements dans les champs du formulaire
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
                {/* Passage des fonctions de gestion au composant LoginForm */}
                <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    handleGithubLogin={handleGithubLogin}
                    handleGoogleLogin={handleGoogleLogin}
                    isLoading={false}
                />
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <WavyBackgroundDemo />
            </div>
        </FadeContainer>
    );
}
