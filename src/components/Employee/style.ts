import styled from "styled-components";

export const Container = styled.div`
margin: 0;
text-align: center;
display: flex;
font-family: Roboto, sans-serif;
`

export const Content = styled.div`
margin-top: 20px;
background-color: #151a2d;
color: #000;
border-radius: 8px;
max-width: 100%;
width: 100vh;
height: 500px;
margin-left: 200px;
display: flex;
flex-direction: column;
text-align: left;
align-items: center;

h2 {
color: #fff;
margin: 16px;
}
`

export const SearchBar = styled.input`
padding: 10px;
width: 100%;
max-width: 600px;
margin-bottom: 20px;
`

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #fff;

th, td {
border: 1px solid #ddd;
padding: 10px;
text-align: left;

}

th {
background-color: #f4f4f4;

}

button {
margin: 5px;
}
`

export const ButtonContainer = styled.div`
margin-top: 20px;
display: flex;
gap: 10px;

button {
padding: 10px 16px;
cursor: pointer;
background-color: #82ca9d;
border-radius: 4px;
border: none;

&:hover {
background-color: #6dbd81;
}
}
`

export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
display: flex;
align-items: center;
justify-content: center;
`

export const ModalContent = styled.div`
background: white;
padding: 30px;
border-radius: 8px;
max-width: 500px;
width: 100%;

label {
display: block;
margin-top: 10px;
}

input, select {
width: 100%;
padding: 8px;
margin-top: 5px;
}
`;
