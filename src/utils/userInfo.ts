import { supabase } from "@/lib/supabase";

// Fonction pour récupérer les informations de l'utilisateur
export async function fetchUserInfo() {
    try {
        // Récupérer les informations de l'utilisateur depuis Supabase
        const { data: { user } } = await supabase.auth.getUser();

        // Retourner l'objet user
        return user;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :');
        throw error;
    }
}
