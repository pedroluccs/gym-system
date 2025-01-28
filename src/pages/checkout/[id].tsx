import DashboardSidebar from "@/components/Sidebar/sidebar";
import { ActionButton, InputGrid, ProfileBox, ProfilePage } from "@/styles/styles";
import { useRouter } from "next/router";


const CheckoutPage = () => {
const router = useRouter();
const { id } = router.query; 


if (!id) {
    return <p>Carregando...</p>;
}


const aluno = JSON.parse(localStorage.getItem("alunoTemp") || "{}");

if (!aluno || aluno.id !== id) {
    return <p>Aluno não encontrado ou dados inválidos!</p>;
}

const handlePagamento = () => {

    if (!aluno.cartao || !aluno.validade || !aluno.cvv) {
    alert("Preencha todos os dados de pagamento!");
    return;
    }

    // Recupera todos os alunos salvos no localStorage
    const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");

    // Registra o aluno permanentemente
    alunos.push(aluno);

    // Salva no localStorage permanentemente
    localStorage.setItem("alunos", JSON.stringify(alunos));

    localStorage.removeItem("alunoTemp");

    alert("Pagamento efetuado com sucesso e aluno registrado!");
    router.push("/dashboard");
};

return (
    <>
    <DashboardSidebar/>
    <ProfilePage>
    <ProfileBox>
    <h2>Checkout</h2>
    <p style={{ margin: "10px 0" }}>Nome: {aluno.nome}</p>
    <p style={{ margin: "10px 0" }}>Telefone: {aluno.telefone}</p>
    <p style={{ margin: "10px 0" }}>Email: {aluno.email}</p>
    <p style={{ margin: "10px 0" }}>Data de Nascimento: {aluno.dataNascimento}</p>
    <p style={{ margin: "10px 0" }}>Plano escolhido: {aluno.plano}</p>
    <h3 style={{ margin: "16px 0" }}>Dados do Cartão</h3>
    <InputGrid>
    <div>
        <label>Cartão:</label>
        <input
        type="text"
        value={aluno.cartao}
        onChange={(e) => (aluno.cartao = e.target.value)}
        />
    </div>
    <div>
        <label>Validade:</label>
        <input
        type="text"
        value={aluno.validade}
        onChange={(e) => (aluno.validade = e.target.value)}
        />
    </div>
    <div>
        <label>CVV:</label>
        <input
        type="text"
        value={aluno.cvv}
        onChange={(e) => (aluno.cvv = e.target.value)}
        />
    </div>
        </InputGrid>
        <ActionButton>
            
    <button onClick={handlePagamento}>Efetuar pagamento</button>
        </ActionButton>
    </ProfileBox>
    </ProfilePage>
        </>
);
};

export default CheckoutPage;
