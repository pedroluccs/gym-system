import "@/styles/globals.css";
import { HomeBar, HoverLink, Nav } from "./style"


const Header = () => {
    return (
        <HomeBar>
            <HoverLink href="/">Monsters Lair</HoverLink>
            <Nav>
                <HoverLink href="/login">Login</HoverLink>
                <HoverLink href="/planos">Planos</HoverLink>
            </Nav>
        </HomeBar>
    )
}

export default Header