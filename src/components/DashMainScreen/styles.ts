import styled from "styled-components";

export const MainBox = styled.div`
margin: 0;
text-align: center;
display: flex;
font-family: Roboto, sans-serif;

}
`

export const AnalyticsBox = styled.div`
width: 1200px;
height: 500px;
margin: 0 auto;
border-radius: 8px;
margin-top: 16px;
background: #151a2d;
display: block;

h2 {
padding: 10px 50px;
background: #151a4d;
text-align: left;
}
header {
width: 100%;
height: 5%;
margin-bottom: 40px;
}

@media (max-width: 769px) {
height: 100%;


h2 {
margin-left: 10px;
background: none;
}
}
`
export const Graphic = styled.div`
display: flex;
justify-content: space-between;
margin: 50px;

@media (max-width: 769px) {
display: block;
}
`

export const Status = styled.div`
flex: 1;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1e2237;
border-radius: 8px;

h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    margin: 0;
}

@media (max-width: 769px) {
padding: 10px;
margin-bottom: 16px;
}
`
