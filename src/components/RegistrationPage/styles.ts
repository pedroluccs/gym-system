import styled from "styled-components";

export const RegisterPage = styled.div`
margin: 0;
display: flex;
font-family: Roboto, sans-serif;
`;

export const RegisterBox = styled.div`
box-sizing: border-box;
width: 1000px;
height: auto;
margin: 0 auto;
padding: 20px;
border-radius: 8px;
margin-top: 16px;
background: #151a2d;
color: white;
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

`;

export const RegisterButton = styled.div`
margin-top: 20px;

button {
padding: 10px 16px;
background: #151a5d;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
background: #fff;
color: #151a2d;
}
}
`;
