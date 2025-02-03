import styled from "styled-components";

export const Body = styled.div`
height: 100vh;
background-image: url('/images/mainpage.jpg');
background-size: cover; 
background-position: center;
background-repeat: no-repeat; 

@media (max-width: 769px) {
height: 110vh;
max-width: 100%;
background-image: url('/images/index.jpeg');
background-position: right;
`