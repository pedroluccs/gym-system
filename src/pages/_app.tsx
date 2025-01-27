import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const salvarAdministrador = () => {
      const usuarioAdmin = {
        email: "pedro@admin.com",
        senha: "123",
        nome: "Administrador",
        isAdmin: true,
      };
      // Salva o administrador no localStorage
      localStorage.setItem("usuarioAdmin", JSON.stringify(usuarioAdmin));
    };


    salvarAdministrador();
  }, []); 

  return <Component {...pageProps} />;
};

export default App;
