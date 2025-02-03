import styled from "styled-components";

export const Box = styled.div`
width: 1200px;
height: 600px;
margin: 0 auto;
border-radius: 8px;
margin-top: 100px;
display: flex;
overflow: hidden;
background-color:#333;
font-family: Roboto, sans-serif;


img {
position: relative;
top: 20px;
left: 20px;
}

@media (max-width: 769px) {
align-items: center;
width: 100%;
max-height: 100%;
margin: 16px 0;

h1 {
text-align: center;
margin: 0;
}

img {
top: -165px;
left: 20px;
}
`
export const LeftBox = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: flex-start;

h1 {
font-size: 32px;
margin: 80px;
margin-left: 48px;

}
@media (max-width: 769px) {
align-items: center;
margin: 0;
`
export const RightBox = styled.div`
flex: 2;
background-image: url("/images/gym.jpeg");
background-size: cover;
background-position: center;
height: 100%;

@media (max-width: 769px) {
display: none;
`

export const LoginInput = styled.input`
text-align: left;
background-color: transparent;
border: none;
border-bottom: 1px solid #ccc;
outline:none;
padding: 4px 12px;
font-size: 16px;
margin-bottom: 60px;
margin-left: 48px;

&::placeholder {
position: relative;
right: 12px;
transition: opacity 0.3 ease;
}

&:focus {
background-color: #333;
}

&:focus::placeholder {
opacity: 0;
}

@media (max-width: 769px) {
text-align: center;
margin: 10px 0;
`
export const Button = styled.button`
padding: 12px 80px;
font-size: 16px;
border: none;
border-radius: 24px;
color: #ccc;
cursor: pointer;
background: linear-gradient(to right, #151a2d, #666);
background-size: 150%; 
background-position: left;
transition: background-position 0.8s ease; 
margin-left: 48px;

&:hover {
background-position: right;
}

@media (max-width: 769px) {
margin-left: 0;
margin-bottom: 16px;
margin-top: 16px;

`
