import styled from "@emotion/styled";
import theme from './Color'
import header from "./imagss/intro-bg.jpg"
export const HeaderApper = styled("section")`
label:HeaderApper;
height: 109vh;
padding: 25% 0;
text-align: center;
background:url(${header});
background-repeat:no-repeat;
background-size:cover;
`;
export const H3 = styled("h3")`
label:H3;
 /* color: ${theme.primary}; */
color: white;
font-size: 1.5rem;
`;
export const H1 = styled("h1")`
label:H3;
 /* color: ${theme.primary}; */
 color: white;
font-size: 2.5rem;

`;
export const Btn1  = styled("button")`
label:Btn1;
background-color: ${theme.primary};
 color: white;
font-size: 1.5rem;
border-radius: 12px 0;
border: 1px solid white;
margin-right: 2rem;
padding: 0.3rem;
margin-top:38px;
transition:  all 3s;
:hover{
    color: #080808;
    background-color: white;

}

`;
export const Btn2 = styled("button")`
label:Btn2;
 /* color: ${theme.primary}; */
 color: #080808;
font-size: 1.4rem;
border: 1px solid white;
margin-right: 2rem;
padding: 0.3rem;
border-radius: 12px 0;
transition:  all 3s;

:hover{
    color: white;
    background-color: ${theme.primary};

}

`;
export const Em = styled("em")`
label:Em;
font-size: large;
`;