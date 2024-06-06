"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignupForm from "@/components/signupform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";

export default function Signup() {
    const [data, setData] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signUp({ email, password });

            if (error) {
                throw error;
            }

            router.push("/dashboard");
        } catch (error) {
            console.error("Signup error:", error);
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
                    <SignupForm handleChange={handleChange} handleSubmit={handleSignup} />
                </div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <WavyBackgroundDemo />
                </div>
            </FadeContainer>
    );
}
