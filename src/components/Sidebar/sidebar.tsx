import { HamburgerMenu, Overlay, Sidebar, SidebarHeader, SideBarNav } from "./style";
import Link from "next/link";
import { useEffect, useState } from "react";

interface UsuarioLogado {
nome: string;
email: string;
isAdmin?: boolean;
}

const DashboardSidebar = () => {
const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);
const [sidebarOpen, setSidebarOpen] = useState(false);

useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    setUsuario(usuarioLogado);
}, []);

const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

return (
    <>
    <HamburgerMenu onClick={toggleSidebar}>
        ☰
    </HamburgerMenu>

    {sidebarOpen && <Overlay onClick={toggleSidebar} />}

    <Sidebar open={sidebarOpen}>
    <SidebarHeader>
        <span className="nav-icon material-symbols-outlined">person</span>
        <p>Olá, {usuario?.nome || "Usuário"}</p>
    </SidebarHeader>
    <nav>
        <SideBarNav>
        <li>
            <Link href="/dashboard" className="nav-link">
            <span className="nav-icon material-symbols-outlined">dashboard</span>
            <span className="nav-label">Dashboard</span>
            </Link>
        </li>
        <li>
            <Link href="/lista" className="nav-link">
            <span className="nav-icon material-symbols-outlined">group</span>
            <span className="nav-label">Clientes</span>
            </Link>
        </li>

        {usuario?.isAdmin && (
            <>
            <li>
                <Link href="/colaborador" className="nav-link">
                <span className="nav-icon material-symbols-outlined">group</span>
                <span className="nav-label">Colaborador</span>
                </Link>
            </li>
            <li>
                <Link href="/financeiro" className="nav-link">
                <span className="nav-icon material-symbols-outlined">analytics</span>
                <span className="nav-label">Financeiro</span>
                </Link>
            </li>
            </>
        )}
        {/*
        <li>
        <Link href="/estoque" className="nav-link">
        <span className="nav-icon material-symbols-outlined">analytics</span>
        <span className="nav-label">Estoque</span>
        </Link>
        </li> 
        */}
        <li>
            <Link href="/registro" className="nav-link">
            <span className="nav-icon material-symbols-outlined">settings</span>
            <span className="nav-label">Cadastrar Cliente</span>
            </Link>
        </li>
        </SideBarNav>
        <SideBarNav style={{ position: "absolute", bottom: "30px", width: "100%" }}>
        <li>
            <Link href="/perfil" className="nav-link">
            <span className="nav-icon material-symbols-outlined">account_circle</span>
            <span className="nav-label">Perfil</span>
            </Link>
        </li>
        <li>
            <Link href="/" className="nav-link">
            <span className="nav-icon material-symbols-outlined">logout</span>
            <span className="nav-label">Logout</span>
            </Link>
        </li>
        </SideBarNav>
    </nav>
    </Sidebar>
        </>
);
};

export default DashboardSidebar;
