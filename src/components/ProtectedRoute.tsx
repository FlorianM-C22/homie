"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react"

const ProtectedRoute: React.FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Vérification de l'état de connexion
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  // Rendre le contenu protégé si l'utilisateur est connecté
  return <>{children}</>;
};

export default ProtectedRoute;
