import styled from "styled-components";

export const Sidebar = styled.aside<{open: boolean}>`
position: sticky;
top: 0;
width: 270px;
display: flex;
flex-direction: column;
z-index: 1000;
background: #151a2d;
margin: 16px;
border-radius: 16px;
height: calc(100vh - 32px);
font-family: Roboto, sans-serif;

@media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    height: 550px;
    width: 250px;
    transform: translateX(${({ open }) => (open ? "0px" : "-300px")});
    transition: transform 0.3s ease;
}
`

export const SidebarHeader = styled.header`
padding: 25px 20px;
align-items: center;
text-align: center;

p, span {
font-size: 20px;
margin: 10px;
}

span {
font-size: 36px;
}
`

export const SideBarNav = styled.ul`
display: flex;
gap: 4px;
padding: 0 15px;
flex-direction: column;
transform: translateY(15px);

span {
margin-right: 20px;
}

.nav-link {
display: flex;
align-items: center;
padding: 12px 15px;
transition: 0.4s ease;
border-radius: 8px;

&:hover {
color: #151a2d;
background: #fff;
}
}
`
export const HamburgerMenu = styled.button`
position: fixed;
top: 20px;
left: 12px;
background: transparent;
color: white;
font-size: 28px;
border: none;
cursor: pointer;
z-index: 1100;

@media (min-width: 769px) {
    display: none;
}
`

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
z-index: 900;
`
