import styled from "styled-components";


export const FinanceContainer = styled.div`
margin: 0 auto;
display: flex;
font-family: Roboto, sans-serif;
max-width: 100%;
max-height: 100vh;
`;

export const ChartContainer = styled.div`
margin-top: 20px;
background-color: #fff;
color: #fff;
border-radius: 8px;
max-width: 100%;
width: 120vh;
margin-left: 200px;
display: flex;
flex-direction: column;
text-align: left;
align-items: center;


h2 {
padding: 10px;
width: 100%;
background:#151a4d;
text-align: center;
}

@media (max-width: 769px) {
margin: 10px 0;
width: 100%;
`;

export const CostsContainer = styled.div`
margin-top: 20px;
background-color: #151a2d;
color: #fff;
border-radius: 8px;
width: 120vh;
margin-left: 200px;
display: flex;
flex-direction: column;
text-align: left;
align-items: center;
padding: 20px;


h3 {
margin-top: 16px;
}

@media (max-width: 769px) {
display: block;
margin: 24px 0;
height: 70vh;
width: 100%;
`;

export const CostsTable = styled.table`
border-collapse: collapse;
margin: 20px 0;


th, td {
border: 1px solid #ddd;
padding: 10px;
width: 20%;
color: #151a2d;
background-color: #fff;
}

th {
background-color: #f4f4f4;

}

@media (max-width: 769px) {
display: block;
text-align: center;
`

export const FormContainer = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;

div {
display: flex;
flex-direction: column;
margin-top: 20px;
}

input {
width: 250px;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
margin-top: 10px;
background-color: #fff;
color: #151a2d;
}

button {
align-self: flex-end;
padding: 8px 12px;
background-color: #82ca9d;
border: none;
color: #151a2d;
cursor: pointer;
border-radius: 4px;

&:hover {
background-color: #6dbd81;
}
}

@media (max-width: 769px) {
text-align: center;
`;
