import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FinanceContainer,
  ChartContainer,
  CostsContainer,
  CostsTable,
  FormContainer,
} from "./styles";
import DashboardSidebar from "../Sidebar/sidebar";

type Aluno = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  dataNascimento: string;
  plano: string;
  dataPagamento: string;
};

type CustoVariavel = {
  id: string;
  nome: string;
  valor: number;
};

const planoValores: Record<string, number> = {
  mensal: 99.9,
  semestral: 499.9,
  anual: 999.9,
};

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Maio",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const Financeiro = () => {
  const [dadosFinanceiros, setDadosFinanceiros] = useState<
    { mes: string; receita: number; custos: number }[]
  >([]);
  const [custosVariaveis, setCustosVariaveis] = useState<CustoVariavel[]>([]);
  const [nomeCusto, setNomeCusto] = useState("");
  const [valorCusto, setValorCusto] = useState<number | string>("");

  useEffect(() => {
    carregarDadosFinanceiros();
  }, []);

  const carregarDadosFinanceiros = () => {
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const custosSalvos = JSON.parse(localStorage.getItem("custosVariaveis") || "[]");
    setCustosVariaveis(custosSalvos);

    const receitasMensais = Array(12).fill(0);
    const custosMensais = Array(12).fill(0);

    alunos.forEach((aluno: Aluno) => {
      const planoValor = planoValores[aluno.plano] || 0;
      const dataPagamento = aluno.dataPagamento ? new Date(aluno.dataPagamento) : new Date();
      const mes = dataPagamento.getMonth();
      receitasMensais[mes] += planoValor;
    });

    custosSalvos.forEach((custo: CustoVariavel) => {
      const mesAtual = new Date().getMonth();
      custosMensais[mesAtual] += custo.valor;
    });

    const dados = meses.map((mes, index) => ({
      mes,
      receita: receitasMensais[index],
      custos: custosMensais[index],
    }));

    setDadosFinanceiros(dados);
  };

  const handleAdicionarCusto = () => {
    if (!nomeCusto || !valorCusto || isNaN(Number(valorCusto))) {
      alert("Preencha o nome e o valor do custo corretamente!");
      return;
    }

    const novoCusto: CustoVariavel = {
      id: `${Date.now()}`,
      nome: nomeCusto,
      valor: Number(valorCusto),
    };

    const novosCustos = [...custosVariaveis, novoCusto];
    setCustosVariaveis(novosCustos);
    localStorage.setItem("custosVariaveis", JSON.stringify(novosCustos));

    setNomeCusto("");
    setValorCusto("");
    carregarDadosFinanceiros();
  };

  const handleRemoverCusto = (id: string) => {
    const novosCustos = custosVariaveis.filter((custo) => custo.id !== id);
    setCustosVariaveis(novosCustos);
    localStorage.setItem("custosVariaveis", JSON.stringify(novosCustos));
    carregarDadosFinanceiros();
  };

  return (
    <FinanceContainer>
      <DashboardSidebar/>
      <div>
      <ChartContainer>
        <h2>Fluxo de Caixa (Valores por Mês)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dadosFinanceiros}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="receita" fill="#82ca9d" name="Receita" />
            <Bar dataKey="custos" fill="#ff726f" name="Custos" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <CostsContainer>
        <h3>Adicionar Custos</h3>
        <FormContainer>
          <div>
            <label>Nome do Custo:</label>
            <input
              type="text"
              value={nomeCusto}
              onChange={(e) => setNomeCusto(e.target.value)}
              />
          </div>
          <div>
            <label>Valor:</label>
            <input
              type="number"
              value={valorCusto}
              onChange={(e) => setValorCusto(e.target.value)}
              />
          </div>
          <button onClick={handleAdicionarCusto}>Adicionar Custo</button>
        </FormContainer>
        <CostsTable>
          <thead>
            <tr>
              <th>Nome do Custo</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {custosVariaveis.map((custo) => (
              <tr key={custo.id}>
                <td>{custo.nome}</td>
                <td>R$ {custo.valor.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemoverCusto(custo.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </CostsTable>
      </CostsContainer>
            </div>
    </FinanceContainer>
  );
};

export default Financeiro;
