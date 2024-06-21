"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignupForm from "@/components/signupform";
import WavyBackgroundDemo from "@/components/wavybackground";
import FadeContainer from "@/components/fadecontainer";
import { useToast } from "@/components/ui/use-toast";

export default function Signup() {
    const [data, setData] = useState<{ email: string; password: string }>({
        email: '',
        password: ''
    });

    const router = useRouter();
    const { toast } = useToast();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
      e.preventDefault();

      // Fonction de validation d'email
      const validateEmail = (email: string): boolean => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      };

      // Fonction de validation de mot de passe
      const validatePassword = (password: string): boolean => {
          // Ici, vous pouvez définir des critères plus stricts
          return password.length >= 8;
      };

      // Vérifiez si l'email est valide
      if (!validateEmail(email)) {
        toast({ title: "Error", description: "Please provide a valid email." });
          return;
      }

      // Vérifiez si le mot de passe est valide
      if (!validatePassword(password)) {
          toast({ title: "Error", description: "Password must be 8 characters long." });
          return;
      }

      try {
          const { error } = await supabase.auth.signUp({ email, password });

          if (error) {
            toast({ title: "Error", description: "Signup failed. Please try again."});
              throw error;
          }

          toast({ title: "Success !", description: "You can now login to your account." });
          router.push("/login");
      } catch (error) {
          console.error("Signup error:", error);
          toast({ title: "Error", description: "An unexpected error occurred. Please try again."});
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
