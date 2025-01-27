import { useState, useEffect } from "react";
import { AnalyticsBox, MainBox, Graphic, Status } from "./styles";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Aluno = {
id: string;
nome: string;
telefone: string;
email: string;
dataNascimento: string;
foto: string;
inadimplente: boolean;
plano: string;
};

type FaixaEtaria = {
    faixa: string;
    quantidade: number;
};

type Plano = {
    plano: string;
    quantidade: number;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4567"];

const PageBox = () => {
const [clientesAtivos, setClientesAtivos] = useState(0);
const [faixasEtarias, setFaixasEtarias] = useState<FaixaEtaria[]>([]);
const [planos, setPlanos] = useState<Plano[]>([]);

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

useEffect(() => {
    const alunosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]") as Aluno[];

    // Contar clientes ativos
    setClientesAtivos(alunosSalvos.length);

    // Calcular faixas etárias
    const faixas = [0, 10, 20, 30, 40, 50];
    const faixasData = faixas.map((inicio, index) => {
    const fim = faixas[index + 1] || Infinity;
    const quantidade = alunosSalvos.filter((aluno) => {
        const idade = calcularIdade(aluno.dataNascimento);
        return idade >= inicio && idade < fim;
    }).length;
        return { faixa: `${inicio}-${fim === Infinity ? "mais" : fim - 1}`, quantidade };
    });
    setFaixasEtarias(faixasData);

    // Calcular planos
    const planosMap = alunosSalvos.reduce((acc, aluno) => {
        acc[aluno.plano] = (acc[aluno.plano] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
    const planosData = Object.entries(planosMap).map(([plano, quantidade]) => ({
        plano,
        quantidade,
    }));
    setPlanos(planosData);
}, []);

return (
    <MainBox>
        <AnalyticsBox>
        <header>
        <h2>Dashboard de Clientes</h2>
        </header>
        <Graphic>
            <Status>
            <h3>Clientes Ativos</h3>
            <p>{clientesAtivos} Clientes ativos</p>
            </Status>
            <div style={{ flex: 1 }}>
            <h3>Planos</h3>
            <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                data={planos}
                dataKey="quantidade"
                nameKey="plano"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={(entry) => entry.plano}
                >
                {planos.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
            </div>
            <div style={{ flex: 1 }}>
            <h3>Faixa Etária</h3>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={faixasEtarias} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <XAxis dataKey="faixa" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantidade" fill="#82ca9d" />
            </BarChart>
            </ResponsiveContainer>
            </div>
        </Graphic>
        </AnalyticsBox>
    </MainBox>
);
};

export default PageBox;
