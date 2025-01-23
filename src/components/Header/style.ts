import Link from "next/link";
import styled from "styled-components";

export const HomeBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
width: 95%;
margin: 5vh;
position: absolute;
`

export const Nav = styled.nav`
display: flex;
gap: 20px;
`

export const HoverLink = styled(Link)`
border-radius: 8px; /* Borda arredondada */
transition: all 0.3s ease;
display: inline-block;
box-sizing: border-box;
position: relative;
text-decoration: none;

    &:hover {
padding: 4px 8px;
background-color: rgba(255, 255, 255, 0.2);
border: 2px solid white;
box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
}
);
`

