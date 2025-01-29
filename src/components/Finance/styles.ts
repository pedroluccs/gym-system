import styled from "styled-components";


export const FinanceContainer = styled.div`
margin: 0;
display: flex;
flex-direction: column;
font-family: Roboto, sans-serif;
max-height: calc(100vh - 60px);
  overflow-y: auto;
  padding-bottom: 20px;
`;

export const ChartContainer = styled.div`
width: 1100px;
height: 500px;
margin: 0 auto;
padding: 20px;
border-radius: 8px;
margin-top: 16px;
background-color: white;
padding: 10px;
color: #151a2d;
background-color: #eee;
border-radius: 8px;

h2 {
margin: 32px;
text-align: center;
}
`;

export const CostsContainer = styled.div`
margin: 0 auto;
margin-top: 100px;
background-color: #151a2d;
color: #fff;
border-radius: 8px;
width: 1100px;
display: flex;
flex-direction: column;
text-align: left;
align-items: center;

h3 {
margin-top: 16px;
}


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
`;
