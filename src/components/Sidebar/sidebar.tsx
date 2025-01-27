import { Sidebar, SidebarHeader, SideBarNav } from "./style";
import Link from "next/link";



const DashboardSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
            <span className="nav-icon material-symbols-outlined">person</span>
                <p>Olá, Adminstrador</p>
            </SidebarHeader>
            <nav>
                <SideBarNav>
                    <li>
                        <Link href="/dashboard"  className="nav-link">
                        <span className="nav-icon material-symbols-outlined">dashboard</span>
                        <span className="nav-label">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                        <span className="nav-icon material-symbols-outlined">notifications</span>
                        <span className="nav-label">Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lista" className="nav-link">
                        <span className="nav-icon material-symbols-outlined">group</span>
                        <span className="nav-label">Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                        <span className="nav-icon material-symbols-outlined">group</span>
                        <span className="nav-label">Funcionários</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                        <span className="nav-icon material-symbols-outlined">analytics</span>
                        <span className="nav-label">Financeiro</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/registro" className="nav-link">
                        <span className="nav-icon material-symbols-outlined">settings</span>
                        <span className="nav-label">Cadastrar Cliente</span>
                        </Link>
                    </li>
                </SideBarNav>
                <SideBarNav style={{ position: "absolute", bottom: "30px", width: "100%" }}>
                <li>
                        <Link href="#" className="nav-link">
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
    )
}

export default DashboardSidebar