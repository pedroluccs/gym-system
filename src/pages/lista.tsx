import { useState, useEffect } from "react";
import Link from "next/link";

type Aluno = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  dataNascimento: string;
  foto: string;
  inadimplente: boolean;
};

export default function Lista() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const alunosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(alunosSalvos);
  }, []);

  const calcularIdade = (dataNascimento: string) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const removerAluno = (id: string) => {
    const alunosAtualizados = alunos.filter((aluno) => aluno.id !== id);
    localStorage.setItem("alunos", JSON.stringify(alunosAtualizados));
    setAlunos(alunosAtualizados);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Alunos</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Pesquisar:
          <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <ul>
        {alunosFiltrados.length > 0 ? (
          alunosFiltrados.map((aluno) => (
            <li key={aluno.id} style={{ marginBottom: "10px" }}>
              <Link href={`/perfil/${aluno.id}`}>
                {aluno.nome}
              </Link>
              <p>Idade: {calcularIdade(aluno.dataNascimento)} anos</p>
              <button onClick={() => removerAluno(aluno.id)} style={{ marginLeft: "10px" }}>
                Remover
              </button>
            </li>
          ))
        ) : (
          <p>Nenhum aluno encontrado.</p>
        )}
      </ul>
    </div>
  );
}
