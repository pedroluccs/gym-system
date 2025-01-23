import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
    <div style={{ padding: "20px" }}>
        <h1>Perfil de {aluno.nome}</h1>
        <p>Telefone: 
        {isEditing ? (
            <input
            type="text"
            value={aluno.telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
            />
        ) : (
            aluno.telefone
        )}
        </p>
        <p>Email: 
        {isEditing ? (
            <input
            type="email"
            value={aluno.email}
            onChange={(e) => handleChange("email", e.target.value)}
            />
        ) : (
            aluno.email
        )}
        </p>
        <p>Data de Nascimento: 
        {isEditing ? (
            <input
            type="date"
            value={aluno.dataNascimento}
            onChange={(e) => handleChange("dataNascimento", e.target.value)}
            />
        ) : (
            aluno.dataNascimento
        )}
        </p>
        <p>
        Inadimplente:{" "}
        {aluno.inadimplente ? "Sim" : "Não"}{" "}
        <button onClick={toggleInadimplente}>
            {aluno.inadimplente ? "Marcar como em dia" : "Marcar como inadimplente"}
        </button>
        </p>
        <p>
        Foto:{" "}
        {aluno.foto ? (
            <img src={aluno.foto} alt={aluno.nome} width="100" />
        ) : (
            "Sem foto cadastrada"
        )}
        </p>
        <div>
        {isEditing ? (
            <button onClick={handleSave}>Salvar alterações</button>
        ) : (
            <button onClick={handleEdit}>Editar</button>
        )}
        </div>
    </div>
    );
}
