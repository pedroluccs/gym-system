import styled from "styled-components";

export const ProfilePage = styled.div`
margin: 0;
display: flex;
font-family: Roboto, sans-serif;
height: 100%;
`;

export const ProfileBox = styled.div`
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
margin-top: 30px;
max-height: 100%;
`;

export const InputGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
margin-top: 16px;

div {
display: flex;
flex-direction: column;

label {
margin-bottom: 8px;
font-weight: bold;
}

input {
padding: 8px;
border-radius: 4px;
border: 1px solid #ddd;
}
}

button {
max-width: 20vh;
}

@media (max-width: 769px) {
display: block;

input {
margin-bottom: 12px;
}
`

export const ActionButton = styled.div`
margin-top: 20px;

button {
padding: 10px 16px;
background-color: #82ca9d;
color: #000;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
background-color: #6dbd81;
}
}
`;
