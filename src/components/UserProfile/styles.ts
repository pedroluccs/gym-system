import styled from "styled-components";

export const ProfileHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 20px;
margin: 20px;
color: #fff;
`;

export const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
color: #fff;
margin-left: 10px;

h2 {
margin-bottom: 8px;
margin-left: -1px;
}
`

export const PhotoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 36px;

img {
border-radius: 50%;
object-fit: cover;
}
`

export const PhotoUploadButton = styled.label`
display: block;
background: #82ca9d;
color: #000;
padding: 8px;
text-align: center;
cursor: pointer;
border-radius: 8px;
margin: 10px 29px;;
font-size: 14px;

&:hover{
background: #6dbd81;
}

input[type="file"] {
display: none;
}
`

export const InfoField = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0;
color: #fff;

label {
margin-bottom: 4px;
}

input {
padding: 8px;
border: 1px solid #ddd;
border-radius: 4px;
width: 100%;
}
`

export const EditableField = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
width: 90%;
`

export const EditButton = styled.button`
padding: 10px 20px;
margin-top: 20px;
background: #82ca9d;
color: #000;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover {
    background: #6dbd81;
}
`

export const ActionButtonsContainer = styled.div`
display: flex;
gap: 10px;
margin-top: 20px;
`

export const UpdateButton = styled.button`
padding: 10px 20px;
background: #82ca9d;
color: #000;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover {
    background: #6dbd81;
}
`

export const CancelButton = styled.button`
padding: 10px 20px;
background: #ff4a6b;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover {
background: #E30B5C;
}
`
