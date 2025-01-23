import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Biblioteca para gerar IDs únicos

export default function Registro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleRegistro = () => {
    if (!nome || !telefone || !email || !dataNascimento) {
      alert("Preencha todos os campos!");
      return;
    }

    // Recupera os alunos salvos no localStorage
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");

    // Adiciona o novo aluno com ID único
    const novoAluno = {
      id: uuidv4(),
      nome,
      telefone,
      email,
      dataNascimento,
      foto: "", // Placeholder para a foto
      inadimplente: false, // Estado inicial
    };
    alunos.push(novoAluno);

    // Salva novamente no localStorage
    localStorage.setItem("alunos", JSON.stringify(alunos));

    // Limpa os campos
    setNome("");
    setTelefone("");
    setEmail("");
    setDataNascimento("");
    alert("Aluno registrado com sucesso!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registro de Alunos</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegistro();
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Telefone:
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Data de Nascimento:
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
