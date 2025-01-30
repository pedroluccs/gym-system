import { useEffect, useState } from "react";
import DashboardSidebar from "../Sidebar/sidebar";
import { v4 as uuidv4 } from "uuid";
import { ButtonContainer, Container, Content, Modal, ModalContent, SearchBar, Table } from "./style";

type Colaborador = {
  id: string;
  nome: string;
  cpf: string;
  funcao: string;
  endereco: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  status: string;
  senha: string;
  dataAdmissao: string;
};

const ColaboradoresPage = () => {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [colaboradorAtual, setColaboradorAtual] = useState<Colaborador | null>(null);

  useEffect(() => {
    const colaboradoresSalvos = JSON.parse(localStorage.getItem("colaboradores") || "[]");
    setColaboradores(colaboradoresSalvos);
  }, []);

  const salvarColaboradores = (colaboradoresAtualizados: Colaborador[]) => {
    setColaboradores(colaboradoresAtualizados);
    localStorage.setItem("colaboradores", JSON.stringify(colaboradoresAtualizados));
  };

  const handleCadastro = () => {
    const novoColaborador: Colaborador = {
      id: uuidv4(),
      nome: "",
      cpf: "",
      funcao: "",
      endereco: "",
      email: "",
      telefone: "",
      dataNascimento: "",
      status: "ativo",
      senha: "",
      dataAdmissao: new Date().toISOString().split("T")[0],
    };
    setColaboradorAtual(novoColaborador);
  };

  const handleSalvar = () => {
    if (!colaboradorAtual) return;

    const colaboradorExistente = colaboradores.find((colab) => colab.id === colaboradorAtual.id);
    if (colaboradorExistente) {
      const colaboradoresAtualizados = colaboradores.map((colab) =>
        colab.id === colaboradorAtual.id ? colaboradorAtual : colab
      );
      salvarColaboradores(colaboradoresAtualizados);
    } else {
      salvarColaboradores([...colaboradores, colaboradorAtual]);
    }
    setColaboradorAtual(null);
  };

  const handleRemover = (id: string) => {
    const colaboradoresFiltrados = colaboradores.filter((colab) => colab.id !== id);
    salvarColaboradores(colaboradoresFiltrados);
  };

  const handleEditar = (colaborador: Colaborador) => {
    setColaboradorAtual(colaborador);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
        <DashboardSidebar />
      <Content>
        <h2>Gestão de Colaboradores</h2>
        <div style={{ width: "60%"}}>
        <SearchBar
          type="text"
          placeholder="Pesquisar colaborador pelo nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Admissão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {colaboradoresFiltrados.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.nome}</td>
                <td>{colaborador.dataAdmissao}</td>
                <td>
                  <button onClick={() => handleEditar(colaborador)}>Editar</button>
                  <button onClick={() => handleRemover(colaborador.id)}>Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
            </div>

        <ButtonContainer>
          <button onClick={handleCadastro}>Cadastrar Novo Colaborador</button>
        </ButtonContainer>

        {colaboradorAtual && (
          <Modal>
            <ModalContent>
              <h3>{colaboradorAtual.id ? "Editar Colaborador" : "Novo Colaborador"}</h3>
              <label>Nome:</label>
              <input
                type="text"
                value={colaboradorAtual.nome}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, nome: e.target.value })
                }
              />
              <label>CPF:</label>
              <input
                type="text"
                value={colaboradorAtual.cpf}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, cpf: e.target.value })
                }
              />
              <label>Função:</label>
              <input
                type="text"
                value={colaboradorAtual.funcao}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, funcao: e.target.value })
                }
              />
              <label>Endereço:</label>
              <input
                type="text"
                value={colaboradorAtual.endereco}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, endereco: e.target.value })
                }
              />
              <label>Email:</label>
              <input
                type="email"
                value={colaboradorAtual.email}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, email: e.target.value })
                }
              />
              <label>Telefone:</label>
              <input
                type="text"
                value={colaboradorAtual.telefone}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, telefone: e.target.value })
                }
              />
              <label>Data de Nascimento:</label>
              <input
                type="date"
                value={colaboradorAtual.dataNascimento}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, dataNascimento: e.target.value })
                }
              />
              <label>Status:</label>
              <select
                value={colaboradorAtual.status}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, status: e.target.value })
                }
              >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
              <label>Senha:</label>
              <input
                type="password"
                value={colaboradorAtual.senha}
                onChange={(e) =>
                  setColaboradorAtual({ ...colaboradorAtual, senha: e.target.value })
                }
              />
              <ButtonContainer>
                <button onClick={handleSalvar}>Salvar</button>
                <button onClick={() => setColaboradorAtual(null)} style={{ backgroundColor: "#ff4a6b"}} >Cancelar</button>
              </ButtonContainer>
            </ModalContent>
          </Modal>
        )}
      </Content>
    </Container>
  );
};

export default ColaboradoresPage;
