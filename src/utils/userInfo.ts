import { supabase } from "@/lib/supabase";

// Function to fetch user information
export async function fetchUserInfo() {
    try {
        // Fetch user info from Supabase
        const { data: { user } } = await supabase.auth.getUser();

        // Return user info in an object
        return user;
    } catch (error) {
        console.error('Error while fectching user data :');
        throw error;
    }
}
