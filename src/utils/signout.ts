import { supabase } from "@/lib/supabase";

 // Signout function
export const signOut = async () => {
  await supabase.auth.signOut();
};
