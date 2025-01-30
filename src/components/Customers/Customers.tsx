import { useState, useEffect } from "react";
import Link from "next/link";
import { AnalyticsBox, MainBox } from "../DashMainScreen/styles";
import DashboardSidebar from "../Sidebar/sidebar";


type Aluno = {
id: string;
nome: string;
telefone: string;
email: string;
dataNascimento: string;
foto: string;
inadimplente: boolean;
};

const List = () => {

    
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
    <MainBox>
        <DashboardSidebar/>
        <AnalyticsBox>
        <header style={{ marginTop: "16px"}}>
    <h1>Lista de Alunos</h1>
        <label>
        Pesquisar:
        <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            style={{ marginLeft: "16px" }}
            />
        </label>
            </header>
    <ul>
        {alunosFiltrados.length > 0 ? (
            alunosFiltrados.map((aluno) => (
                <li key={aluno.id} style={{ margin: "24px", display: "flex" }}>
            <Link href={`/perfil/${aluno.id}`} style={{ width: "25vh", textAlign: "left" }}>
                {aluno.nome}
            </Link>
            <p style={{ maxWidth:"100%" }}>Idade: {calcularIdade(aluno.dataNascimento)} anos</p>
            <button onClick={() => removerAluno(aluno.id)} style={{ marginLeft: "16px"}}>
                Remover
            </button>
            </li>
        ))
    ) : (
        <p>Nenhum aluno encontrado.</p>
    )}
    </ul>
    </AnalyticsBox>
    </MainBox>
    
);

}

export default List