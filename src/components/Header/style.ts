import Link from "next/link";
import styled from "styled-components";

export const HomeBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
width: 95%;
margin: 16px;
position: absolute;
font-family: Roboto, sans-serif;
`

export const Nav = styled.nav`
display: flex;
gap: 20px;
`

export const HoverLink = styled(Link)`
border-radius: 8px; 
transition: all 0.3s ease;
display: inline-block;
box-sizing: border-box;
position: relative;
text-decoration: none;

    &:hover {
padding: 4px 6px;
background-color: rgba(255, 255, 255, 0.2);
border: 2px solid white;
}
);
`

