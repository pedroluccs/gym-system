import { useEffect } from "react";
import { useRouter } from "next/router";
import PageBox from "@/components/DashMainScreen/PageBox";



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
    <>
    <PageBox/>
    </>
  );
}

