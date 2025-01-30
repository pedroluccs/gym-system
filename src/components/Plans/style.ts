import styled from "styled-components";

export const PlanosContainer = styled.div`
text-align: center;
font-family: Roboto, sans-serif;
padding: 40px 20px;

h1 {
font-size: 2.5rem;
margin-bottom: 40px;
}

.plan-cards {
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
}
`;

export const PlanCard = styled.div<{ backgroundImage?: string }>`
background: ${({ backgroundImage }) => backgroundImage || "linear-gradient(to bottom, #151a2d, #000)"};
color: ${({ backgroundImage }) => (backgroundImage ? "#fff" : "#fff")};
width: 300px;
border-radius: 4px;
padding: 16px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin: 20px;
text-align: center;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const PlanTitle = styled.h2`
font-size: 1.8rem;
margin-bottom: 16px;
`;

export const PlanPrice = styled.p`
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 16px;
`;

export const SubscribeButton = styled.button`
background-color: #6421ff;
color: #151a2d;
padding: 10px 16px;
border: none;
cursor: pointer;
border-radius: 4px;
font-size: 1rem;

&:hover {
background-color: #6f30ff;
}
`;

export const BenefitsList = styled.ul`
list-style: none;
padding: 0;
margin-top: 16px;

li {
    margin: 8px 0;
    font-size: 0.9rem;
}
`;
