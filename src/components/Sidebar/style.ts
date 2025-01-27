import styled from "styled-components";

export const Sidebar = styled.aside`
background: #151a2d;
width: 270px;
position: fixed;
margin: 16px;
border-radius: 16px;
height: calc(100vh - 32px);
`

export const SidebarHeader = styled.header`
display: block;
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
gap: 12x;
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
