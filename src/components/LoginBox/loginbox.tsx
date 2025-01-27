import "@/styles/globals.css";
import { Box, Button, LeftBox, LoginInput, RightBox } from "./style";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; 


const LoginBox = () => {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [erro, setErro] = useState("");
const router = useRouter();

useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: "ease-in-out",  
      once: true, 
    });
}, []);


const handleLogin = () => {
    const usuarioAdmin = JSON.parse(localStorage.getItem("usuarioAdmin") || "null");

    if (!usuarioAdmin) {
        setErro("Usuário administrador não encontrado.");
        return;
    }

    // Validar as credenciais
    if (email === usuarioAdmin.email && senha === usuarioAdmin.senha) {
      // Se as credenciais estiverem corretas, redireciona para a página principal (ou outra página)
        router.push("/dashboard");
    } else {
        setErro("Credenciais inválidas.");
    }
};
    return (
        <Box data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <Link href="/">
        <Image
        src="/icon/arrow.png"      
        alt="back"                  
        width={24}                  
        height={24}                 
        />
        </Link>
        <LeftBox>
        <h1>Login to dashboard</h1>
            <LoginInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            />
            <LoginInput
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            />
        <Button onClick={handleLogin}>Entrar</Button>
        {erro && <p style={{ color: "red", margin: "45px 70px" }}>{erro}</p>}
            </LeftBox>
            <RightBox />
        </Box>
    )
}

export default LoginBox