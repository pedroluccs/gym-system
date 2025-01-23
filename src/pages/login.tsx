import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Buscar o usuário administrador no localStorage
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
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}
