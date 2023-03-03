import styled from "@emotion/styled";
import theme from "./Color";
import Reg from './imagss/register-bg.jpg'
export const Regist = styled("div")`
label:Regist;
background:url(${Reg}) fixed;
background-repeat: no-repeat;
background-size:cover;
height: 450px;
padding: 3rem 0;


`;
export const Titel = styled("span")`
label:Titel;
color: white;
font-size: 1.2rem;
padding-right:0.3rem ;
`;
export const Colortitel = styled("span")`
label:Colortitel;
color:${theme.primary};
font-size: 1.2rem;

`;
export const Text2 = styled("p")`
label:Text2;
color:${theme.gray};
font-size: 1.2rem;
`;
export const Form = styled("div")`
label:Form;
display: flex;
flex-direction: column;
gap: 1rem;
`;
export const Input = styled("input")`
label:Input;
padding: 0.5rem;
border-radius: 5px;
background-color: transparent;
border: 1px solid white;
color: white;
`;
export const Text = styled("p")`
label:Text;
color:white;
font-size: 1.5rem;
`;
export const Btn = styled("button")`
label:Btn;
color:white;
background-color:${theme.primary};
font-size: 1.5rem;
border-radius: 5px;
border: 1px solid white;

`;




export const Regist2 = styled("div")`
label:Regist2;
display: flex;
align-items:flex-start;
justify-content: space-between;`

;