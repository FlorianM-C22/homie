import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { MoonLoader } from "react-spinners";
import { supabase } from "@/lib/supabase";

interface ProfileFormProps {
    user: any; // Type à adapter selon votre modèle utilisateur
}

export function ProfileForm({ user }: ProfileFormProps) {
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await supabase.auth.updateUser({ email });
        setIsLoading(false);

        if (error) {
            alert(error.message);
        } else {
            alert('Email updated successfully!');
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        setIsLoading(true);

        const { error } = await supabase.auth.updateUser({ password });
        setIsLoading(false);

        if (error) {
            alert(error.message);
        } else {
            alert('Password updated successfully!');
        }
    };

    return (
      <div className="max-w-md w-full mx-auto p-4">
          <h1 className="text-xl mb-4">Profile</h1>

          {/* Change Email Form */}
          <form className="mb-8" onSubmit={handleEmailSubmit}>
              <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </LabelInputContainer>
              <button
                  className="mb-4 bg-red-500 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  disabled={isLoading}
              >
                  {isLoading ? (
                      <div className="flex items-center justify-center">
                          <MoonLoader color="#ffffff" size={24} />
                      </div>
                  ) : (
                      <>
                          Update Email &rarr;
                          <BottomGradient />
                      </>
                  )}
              </button>
          </form>

          {/* Change Password Form */}
          <form className="mb-8" onSubmit={handlePasswordSubmit}>
              <LabelInputContainer>
                  <Label htmlFor="password">New Password</Label>
                  <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </LabelInputContainer>
              <LabelInputContainer>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                  />
              </LabelInputContainer>
              <button
                  className="mb-8 bg-red-500 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  disabled={isLoading}
              >
                  {isLoading ? (
                      <div className="flex items-center justify-center">
                          <MoonLoader color="#ffffff" size={24} />
                      </div>
                  ) : (
                      <>
                          Update Password &rarr;
                          <BottomGradient />
                      </>
                  )}
              </button>
          </form>
      </div>
  );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

export default ProfileForm;
