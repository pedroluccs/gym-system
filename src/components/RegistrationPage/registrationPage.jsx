
import { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { MainBox } from "../DashMainScreen/styles"; 
import { RegisterBox, RegisterButton, RegisterGrid, RegisterPage } from "./styles";

const RegistroPage = () => {
const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");
const [email, setEmail] = useState("");
const [dataNascimento, setDataNascimento] = useState("");
const [plano, setPlano] = useState("");
const router = useRouter();

const handleRegistro = () => {
    if (!nome || !telefone || !email || !dataNascimento || !plano) {
    alert("Preencha todos os campos!");
    return;
    }

    const id = uuidv4();

    const aluno = {
    id,
    nome,
    telefone,
    email,
    dataNascimento,
    plano,
    foto: "",
    inadimplente: false,
    };


    localStorage.setItem("alunoTemp", JSON.stringify(aluno));

    setNome("");
    setTelefone("");
    setEmail("");
    setDataNascimento("");
    setPlano("");

    router.push(`/checkout/${id}`);
};

return (
    <RegisterPage>
    <RegisterBox>
        <h1>Registro de Alunos</h1>
        <RegisterGrid>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleRegistro();
        }}
        >
        <div>
            <label>
            Nome:
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </label>
        </div>
        <div>
            <label>
            Telefone:
            <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                />
            </label>
        </div>
        <div>
            <label>
            E-mail:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
        </div>
        <div>
            <label>
            Data de Nascimento:
            <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                />
            </label>
        </div>
        <div>
            <label>
            Plano:
            <select
                value={plano}
                onChange={(e) => setPlano(e.target.value)}
                >
                <option value="">Selecione um plano</option>
                <option value="mensal">Mensal - R$ 99,90</option>
                <option value="semestral">Semestral - R$ 499,90 </option>
                <option value="anual">Anual - R$ 999,90</option>
            </select>
            </label>
        </div>
        <RegisterButton>
        <button type="submit">Prosseguir com o pagamento</button>
        </RegisterButton>
        </form>
    </RegisterGrid>
    </RegisterBox>
    </RegisterPage>
);
};

export default RegistroPage;
