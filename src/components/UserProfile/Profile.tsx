import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
ProfileHeader,
ProfileInfo,
InfoField,
EditableField,
EditButton,
UpdateButton,
CancelButton,
PhotoWrapper,
PhotoUploadButton,
ActionButtonsContainer,
} from "./styles";
import { Container, Content } from "../Employee/style";
import DashboardSidebar from "../Sidebar/sidebar";

interface Usuario {
nome: string;
cpf: string;
funcao?: string;
endereco: string;
email: string;
telefone: string;
dataNascimento: string;
senha: string;
foto?: string;
isAdmin?: boolean;
}

const Profile = () => {
const [usuario, setUsuario] = useState<Usuario | null>(null);
const [foto, setFoto] = useState<string>("");
const [endereco, setEndereco] = useState("");
const [email, setEmail] = useState("");
const [telefone, setTelefone] = useState("");
const [senha, setSenha] = useState("");
const [editMode, setEditMode] = useState(false);
const router = useRouter();

useEffect(() => {
    const usuarioLogado: Usuario | null = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    if (!usuarioLogado) {
    alert("Nenhum usuário logado. Redirecionando...");
    router.push("/");
    } else {
    setUsuario(usuarioLogado);
    setFoto(usuarioLogado.foto || "/default-avatar.png");
    setEndereco(usuarioLogado.endereco);
    setEmail(usuarioLogado.email);
    setTelefone(usuarioLogado.telefone);
    setSenha(usuarioLogado.senha);
    }
}, [router]);

const handleAtualizar = () => {
    if (usuario) {
    const usuarioAtualizado: Usuario = {
        ...usuario,
        endereco,
        email,
        telefone,
        senha,
        foto,
    };

    let colaboradores: Usuario[] = JSON.parse(localStorage.getItem("colaboradores") || "[]");

    if (usuario.isAdmin) {
        localStorage.setItem("usuarioAdmin", JSON.stringify(usuarioAtualizado));
    } else {
        colaboradores = colaboradores.map((colaborador) =>
        colaborador.email === usuario.email ? usuarioAtualizado : colaborador
        );
        localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
}

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
    alert("Dados atualizados com sucesso!");
    setEditMode(false);
    }
};

const handleCancelarEdicao = () => {
    if (usuario) {
    setEndereco(usuario.endereco);
    setEmail(usuario.email);
    setTelefone(usuario.telefone);
    setSenha(usuario.senha);
    setEditMode(false);
    }
};

const handleFotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
        setFoto(reader.result as string);
};
        reader.readAsDataURL(file);
    }
};

return (
    <>
        <Container>
        <DashboardSidebar />
        <Content>
            {usuario && (
            <>
                <ProfileHeader>
                <PhotoWrapper>
                    <Image src={ "/images/defaultavatar.png"} alt="Foto de Perfil" width={150} height={150} />
                    <PhotoUploadButton>
                        <input type="file" accept="image/*" onChange={handleFotoUpload} />
                        Upload Foto
                    </PhotoUploadButton>
                </PhotoWrapper>
                <ProfileInfo>
                    <h2>{usuario.nome}</h2>
                    <p>CPF: {usuario.cpf}</p>
                    <p>Função: {usuario.funcao || "Administrador"}</p>
                </ProfileInfo>
                </ProfileHeader>

                <EditableField>
                <InfoField>
                    <label>Endereço:</label>
                    <input value={endereco} onChange={(e) => setEndereco(e.target.value)} disabled={!editMode} />
                </InfoField>
                <InfoField>
                    <label>Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} disabled={!editMode} />
                </InfoField>
                <InfoField>
                    <label>Telefone:</label>
                    <input value={telefone} onChange={(e) => setTelefone(e.target.value)} disabled={!editMode} />
                </InfoField>
                <InfoField>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} disabled={!editMode} />
                </InfoField>
                </EditableField>
                {!editMode && <EditButton onClick={() => setEditMode(true)}>Editar Dados</EditButton>}
                {editMode && (
                <ActionButtonsContainer>
                    <UpdateButton onClick={handleAtualizar}>Atualizar Dados</UpdateButton>
                    <CancelButton onClick={handleCancelarEdicao}>Cancelar</CancelButton>
                </ActionButtonsContainer>
                )}
            </>
            )}
        </Content>
        </Container>
    </>
);
};

export default Profile;
