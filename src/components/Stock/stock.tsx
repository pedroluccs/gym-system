import { useState, useEffect } from "react";
import {
  Container,
  StockContent,
  TableContainer,
  SearchBar,
  ActionButtons,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  LowStockAlert,
  AddButton,
  StockActionsContainer,
  SectionTitle,
  LinkButton,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalForm,
  ModalCloseButton,
  InputField,
  ModalActionButtons,
  InputFieldWrapper,
  InputText,
} from "./styles";
import DashboardSidebar from "../Sidebar/sidebar";
import { useRouter } from "next/router";


interface Produto {
  codigo: string;
  nome: string;
  categoria: string;
  quantidade: number;
  precoCompra: number;
  precoVenda: number;
  dataEntrada: string;
  dataValidade?: string;
  status: "ativo" | "inativo";
}

const Stock = () => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string>("");

  // Estados para controle do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoProduto, setNovoProduto] = useState<Produto>({
    codigo: "",
    nome: "",
    categoria: "",
    quantidade: 0,
    precoCompra: 0,
    precoVenda: 0,
    dataEntrada: "",
    status: "ativo",
  });

  // Mock de dados de produtos para a academia
  useEffect(() => {
    const produtosMock: Produto[] = [
      {
        codigo: "001",
        nome: "Maca para Exercícios",
        categoria: "Equipamentos",
        quantidade: 10,
        precoCompra: 300,
        precoVenda: 500,
        dataEntrada: "2025-01-01",
        status: "ativo",
      },
      {
        codigo: "002",
        nome: "Halteres 5kg",
        categoria: "Equipamentos",
        quantidade: 25,
        precoCompra: 50,
        precoVenda: 80,
        dataEntrada: "2025-01-05",
        status: "ativo",
      },
      {
        codigo: "003",
        nome: "Aparelho de Ginástica",
        categoria: "Equipamentos",
        quantidade: 5,
        precoCompra: 1500,
        precoVenda: 2000,
        dataEntrada: "2025-01-10",
        status: "ativo",
    },
    ];
    setProdutos(produtosMock);
}, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
};

    const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    produto.codigo.includes(filtro)
);

    const calcularValorTotalEstoque = (produto: Produto) => produto.quantidade * produto.precoCompra;

    const handleEntradaProduto = (codigo: string, quantidade: number) => {
    setProdutos((produtosAntigos) =>
        produtosAntigos.map((produto) =>
        produto.codigo === codigo
        ? { ...produto, quantidade: produto.quantidade + quantidade }
        : produto
    )
    );
};

const handleSaidaProduto = (codigo: string, quantidade: number) => {
    setProdutos((produtosAntigos) =>
        produtosAntigos.map((produto) =>
        produto.codigo === codigo
        ? { ...produto, quantidade: produto.quantidade - quantidade }
        : produto
    )
    );
};

  // Função para abrir o modal
const openModal = () => {
    setIsModalOpen(true);
};

  // Função para fechar o modal
const closeModal = () => {
    setIsModalOpen(false);
};

  // Função para adicionar novo produto
const handleAdicionarProduto = () => {
    setProdutos([...produtos, novoProduto]);
    setNovoProduto({
    codigo: "",
    nome: "",
    categoria: "",
    quantidade: 0,
    precoCompra: 0,
    precoVenda: 0,
    dataEntrada: "",
    status: "ativo",
    });
    closeModal();
};

  // Função para remover produto
const handleRemoverProduto = (codigo: string) => {
    setProdutos(produtos.filter((produto) => produto.codigo !== codigo));
};

return (
    <Container>
    <DashboardSidebar />
    <StockContent>
        <SectionTitle>Estoque de Produtos</SectionTitle>

        {/* Barra de Pesquisa */}
        <SearchBar
        type="text"
        placeholder="Pesquisar por nome ou código..."
        value={filtro}
        onChange={handleSearchChange}
        />

        {/* Tabela de Produtos */}
        <TableContainer>
            <Table>
            <thead>
                <TableRow>
                <TableHeader>Código</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Categoria</TableHeader>
                <TableHeader>Quantidade</TableHeader>
                <TableHeader>Preço Compra (R$)</TableHeader>
                <TableHeader>Preço Venda (R$)</TableHeader>
                <TableHeader>Valor Total (R$)</TableHeader>
                <TableHeader>Data Entrada</TableHeader>
                <TableHeader>Data Validade</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Ações</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {produtosFiltrados.map((produto) => (
                <TableRow key={produto.codigo}>
                    <TableCell>{produto.codigo}</TableCell>
                    <TableCell>{produto.nome}</TableCell>
                    <TableCell>{produto.categoria}</TableCell>
                    <TableCell>
                    {produto.quantidade}
                    {produto.quantidade <= 3 && (
                        <LowStockAlert title="Estoque baixo!">⚠️</LowStockAlert>
                    )}
                    </TableCell>
                    <TableCell>{produto.precoCompra.toFixed(2)}</TableCell>
                    <TableCell>{produto.precoVenda.toFixed(2)}</TableCell>
                    <TableCell>{calcularValorTotalEstoque(produto).toFixed(2)}</TableCell>
                    <TableCell>{produto.dataEntrada}</TableCell>
                    <TableCell>{produto.dataValidade || "N/A"}</TableCell>
                    <TableCell>{produto.status}</TableCell>
                    <TableCell>
                    <button onClick={() => handleEntradaProduto(produto.codigo, 5)}>Entrada +5</button>
                    <button onClick={() => handleSaidaProduto(produto.codigo, 2)}>Saída -2</button>
                    <button onClick={() => handleRemoverProduto(produto.codigo)}>Remover</button>
                    </TableCell>
                </TableRow>
            ))}
            </tbody>
            </Table>
        </TableContainer>

        {/* Botões de Controle */}
        <StockActionsContainer>
          <ActionButtons>
            <LinkButton onClick={() => router.push("/fornecedores")}>Gestão de Fornecedores</LinkButton>
            <AddButton onClick={openModal}>Adicionar Produto</AddButton>
            <LinkButton onClick={() => router.push("/relatorios/estoque")}>Relatório de Estoque</LinkButton>
            <LinkButton onClick={() => router.push("/relatorios/vendas-vs-estoque")}>Relatório Vendas vs Estoque</LinkButton>
            <LinkButton onClick={() => router.push("/relatorios/movimentacao")}>Relatório Movimentação</LinkButton>
          </ActionButtons>
        </StockActionsContainer>

        {isModalOpen && (
          <Modal>
          <ModalOverlay onClick={closeModal} />
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
            <ModalForm>
              <h3>Adicionar Novo Produto</h3>
        
              <InputFieldWrapper>
                <InputText>Código</InputText>
                <InputField
                  type="text"
                  value={novoProduto.codigo}
                  onChange={(e) => setNovoProduto({ ...novoProduto, codigo: e.target.value })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Nome</InputText>
                <InputField
                  type="text"
                  value={novoProduto.nome}
                  onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Categoria</InputText>
                <InputField
                  type="text"
                  value={novoProduto.categoria}
                  onChange={(e) => setNovoProduto({ ...novoProduto, categoria: e.target.value })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Quantidade</InputText>
                <InputField
                  type="number"
                  value={novoProduto.quantidade}
                  onChange={(e) => setNovoProduto({ ...novoProduto, quantidade: parseInt(e.target.value) })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Preço de Compra</InputText>
                <InputField
                  type="text"
                  value={novoProduto.precoCompra}
                  onChange={(e) => setNovoProduto({ ...novoProduto, precoCompra: parseFloat(e.target.value) })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Preço de Venda</InputText>
                <InputField
                  type="text"
                  value={novoProduto.precoVenda}
                  onChange={(e) => setNovoProduto({ ...novoProduto, precoVenda: parseFloat(e.target.value) })}
                />
              </InputFieldWrapper>
        
              <InputFieldWrapper>
                <InputText>Data de Entrada</InputText>
                <InputField
                  type="date"
                  value={novoProduto.dataEntrada}
                  onChange={(e) => setNovoProduto({ ...novoProduto, dataEntrada: e.target.value })}
                />
              </InputFieldWrapper>
        
              <ModalActionButtons>
                <button onClick={handleAdicionarProduto}>Adicionar</button>
                <button onClick={closeModal}>Cancelar</button>
              </ModalActionButtons>
            </ModalForm>
          </ModalContent>
        </Modal>
        
        )}
      </StockContent>
    </Container>
  );
};

export default Stock;
