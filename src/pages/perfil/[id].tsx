import DashboardSidebar from "@/components/Sidebar/sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ProfileBox, ProfilePage, InputGrid, ActionButton } from "../../styles/styles";

type Aluno = {
id: string;
nome: string;
telefone: string;
email: string;
dataNascimento: string;
foto: string;
inadimplente: boolean;
};

export default function Perfil() {
const router = useRouter();
const { id } = router.query;

const [aluno, setAluno] = useState<Aluno | null>(null);
const [isEditing, setIsEditing] = useState(false);

useEffect(() => {
    if (id) {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const alunoEncontrado = alunos.find((aluno: Aluno) => aluno.id === id);
    if (alunoEncontrado) {
        setAluno(alunoEncontrado);
    }
    }
}, [id]);

const toggleInadimplente = () => {
    if (aluno) {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const alunosAtualizados = alunos.map((a: Aluno) =>
        a.id === aluno.id ? { ...a, inadimplente: !a.inadimplente } : a
    );
    localStorage.setItem("alunos", JSON.stringify(alunosAtualizados));
    setAluno({ ...aluno, inadimplente: !aluno.inadimplente });
    }
};

const handleEdit = () => {
    setIsEditing(true);
};

const handleSave = () => {
    if (aluno) {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const alunosAtualizados = alunos.map((a: Aluno) =>
        a.id === aluno.id ? aluno : a
    );
    localStorage.setItem("alunos", JSON.stringify(alunosAtualizados));
    setIsEditing(false);
    }
};

const handleChange = (field: string, value: string) => {
    if (aluno) {
    setAluno({ ...aluno, [field]: value });
    }
};

if (!aluno) return <p>Carregando...</p>;

return (
    <>
        <ProfilePage>
        <DashboardSidebar />
        <ProfileBox>
        <h1>Perfil de {aluno.nome}</h1>
        <InputGrid>
            <div>
            <label>Nome:</label>
            {isEditing ? (
                <input
                type="text"
                value={aluno.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                />
            ) : (
                <p>{aluno.nome}</p>
            )}
            </div>
            <div>
            <label>Telefone:</label>
            {isEditing ? (
                <input
                type="text"
                value={aluno.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                />
            ) : (
                <p>{aluno.telefone}</p>
            )}
            </div>
            <div>
            <label>Email:</label>
            {isEditing ? (
                <input
                type="email"
                value={aluno.email}
                onChange={(e) => handleChange("email", e.target.value)}
                />
            ) : (
                <p>{aluno.email}</p>
            )}
            </div>
            <div>
            <label>Data de Nascimento:</label>
            {isEditing ? (
                <input
                type="date"
                value={aluno.dataNascimento}
                onChange={(e) => handleChange("dataNascimento", e.target.value)}
                />
            ) : (
                <p>{aluno.dataNascimento}</p>
            )}
            </div>
            <div>
            <label>Inadimplente:</label>
            <p>{aluno.inadimplente ? "Sim" : "Não"}</p>
            <button onClick={toggleInadimplente}>
                {aluno.inadimplente ? "Em dia" : "Inadimplente"}
            </button>
            </div>
            <div>
            <label>Foto:</label>
            {aluno.foto ? (
                <Image src={aluno.foto} alt={aluno.nome} width="100" height="100" />
            ) : (
                <p>Sem foto cadastrada</p>
            )}
            </div>
            </InputGrid>
            <ActionButton>
            {isEditing ? (
            <button onClick={handleSave}>Salvar alterações</button>
            ) : (
            <button onClick={handleEdit}>Editar</button>
            )}
            </ActionButton>
            </ProfileBox>
        </ProfilePage>
    </>
);
}
