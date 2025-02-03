import styled from "styled-components";

export const RegisterPage = styled.div`
margin: 0;
display: flex;
font-family: Roboto, sans-serif;

@media (max-width: 769px) {
height: 100%;
`;

export const RegisterBox = styled.div`
box-sizing: border-box;
width: 1000px;
max-height: 100vh;
height: 50%;
margin: 0 auto;
padding: 20px;
border-radius: 8px;
margin-top: 16px;
background: #151a2d;
color: white;

@media (max-width: 769px) {
h1 {
margin-left: 24px;
margin-top: -12px;
}
`;

export const RegisterGrid = styled.div`
align-items: left;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
margin: 16px 0;

div {
display: block;

label {
margin-bottom: 8px;

}

input {
padding: 6px;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 4px;
border: 1px solid #ddd;
width: 100%;
}
}

select {
padding: 8px;
display: block;
margin-top: 10px;
}

@media (max-width: 769px) {
margin-left: 24px;

`;

export const RegisterButton = styled.div`
margin-top: 20px;

button {
padding: 10px 16px;
background-color: #82ca9d;
color: #000;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
background: #fff;
background-color: #6dbd81;
}
}
`;
