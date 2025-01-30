import DashboardSidebar from "@/components/Sidebar/sidebar";
import { ActionButton, InputGrid, ProfileBox, ProfilePage } from "@/styles/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Aluno = {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  dataNascimento: string;
  plano: string;
  cartao?: string;
  validade?: string;
  cvv?: string;
  dataPagamento?: string; // Incluímos essa propriedade
};

const CheckoutPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [aluno, setAluno] = useState<Aluno | null>(null);

  useEffect(() => {
    if (id) {
      const alunoTemp = JSON.parse(localStorage.getItem("alunoTemp") || "{}");
      if (alunoTemp.id === id) {
        setAluno(alunoTemp);
      }
    }
  }, [id]);

  const handleInputChange = (field: keyof Aluno, value: string) => {
    if (aluno) {
      setAluno({ ...aluno, [field]: value });
    }
  };

  const handlePagamento = () => {
    if (!aluno?.cartao || !aluno.validade || !aluno.cvv) {
      alert("Preencha todos os dados de pagamento!");
      return;
    }

    // Adiciona a data atual ao registro do aluno
    const updatedAluno = { ...aluno, dataPagamento: new Date().toISOString() };

    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunos.push(updatedAluno);

    localStorage.setItem("alunos", JSON.stringify(alunos));
    localStorage.removeItem("alunoTemp");

    alert("Pagamento efetuado com sucesso e aluno registrado!");
    router.push("/dashboard");
  };

  if (!aluno) {
    return <p>Carregando...</p>;
  }

  return (
    <ProfilePage>
      <DashboardSidebar />
      <ProfileBox>
        <h2>Checkout</h2>
        <InputGrid>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={aluno.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
            />
          </div>
          <div>
            <label>Telefone:</label>
            <input
              type="text"
              value={aluno.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={aluno.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div>
            <label>Data de Nascimento:</label>
            <input
              type="date"
              value={aluno.dataNascimento}
              onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
            />
          </div>
        </InputGrid>
        <p style={{ margin: "10px 0" }}>Plano escolhido: {aluno.plano}</p>
        <h3 style={{ margin: "16px 0" }}>Dados do Cartão</h3>
        <InputGrid>
          <div>
            <label>Cartão:</label>
            <input
              type="text"
              value={aluno.cartao || ""}
              onChange={(e) => handleInputChange("cartao", e.target.value)}
            />
          </div>
          <div>
            <label>Validade:</label>
            <input
              type="text"
              value={aluno.validade || ""}
              onChange={(e) => handleInputChange("validade", e.target.value)}
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              value={aluno.cvv || ""}
              onChange={(e) => handleInputChange("cvv", e.target.value)}
            />
          </div>
        </InputGrid>
        <ActionButton>
          <button onClick={handlePagamento}>Efetuar pagamento</button>
        </ActionButton>
      </ProfileBox>
    </ProfilePage>
  );
};

export default CheckoutPage;
