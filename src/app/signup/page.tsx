// Signup page, check SignupForm component for more info.

"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignupForm from "@/components/signupform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";
import { useToast } from "@/components/ui/use-toast";
import { setLoggedInCookie } from "@/utils/authCookie";

export default function Signup() {
    const [data, setData] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const router = useRouter();
    const { toast } = useToast();

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password validation function
    const validatePassword = (password: string): boolean => {
        return password.length >= 8;
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();

        // Checks if email is valid
        if (!validateEmail(email)) {
            toast({ title: "Error", description: "Please provide a valid email." });
            return;
        }

        // Checks if password is valid
        if (!validatePassword(password)) {
            toast({ title: "Error", description: "Password must be 8 characters long." });
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({ email, password });

            if (error) {
                toast({ title: "Error", description: "Signup failed. Please try again." });
                throw error;
            }

            toast({ title: "Success!", description: "You can now login to your account." });
            router.push("/login");
        } catch (error) {
            console.error("Signup error:", error);
            toast({ title: "Error", description: "An unexpected error occurred. Please try again." });
        }
    };

    const handleGithubSignup = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "github",
                options: { redirectTo: `${window.location.origin}/dashboard` },
            });

            if (error) {
                toast({ title: "Error", description: "GitHub sign-in failed. Please try again." });
                throw error;
            }

            toast({ title: "Success!", description: "Successfully signed up with GitHub." });
            setLoggedInCookie();
            router.push("/dashboard"); // Redirige vers la page de tableau de bord après connexion
        } catch (error) {
            console.error("GitHub sign-in error:", error);
            toast({ title: "Error", description: "An unexpected error occurred. Please try again." });
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                  options: { redirectTo: `${window.location.origin}/dashboard` },
            });

            if (error) {
                toast({ title: "Error", description: "Google sign-in failed. Please try again." });
                throw error;
            }

            toast({ title: "Success!", description: "Successfully signed up with Google." });
            setLoggedInCookie();
            router.push("/dashboard"); // Redirige vers la page de tableau de bord après connexion
        } catch (error) {
            console.error("Google sign-in error:", error);
            toast({ title: "Error", description: "An unexpected error occurred. Please try again." });
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
                <SignupForm
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    handleGithubSignup={handleGithubSignup}
                    handleGoogleSignup={handleGoogleSignup}
                />
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <WavyBackgroundDemo />
            </div>
        </FadeContainer>
    );
}
