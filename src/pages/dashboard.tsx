import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const usuarioAdmin = JSON.parse(localStorage.getItem("usuarioAdmin") || "null");

    if (!usuarioAdmin) {
      // Redireciona para a página de login caso não tenha login válido
      router.push("/login");
    }
  }, [router]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bem-vindo, Administrador!</h1>
      <p>Aqui está o painel de controle do sistema.</p>
    </div>
  );
}
