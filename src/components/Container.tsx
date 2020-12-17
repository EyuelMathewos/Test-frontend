import React from "react";
import styled, { css } from 'styled-components';

declare module 'styled-components' {
  export interface LableProp {
    width: string
    primary: boolean , red: boolean , orange: boolean  
  }
  
}


export  const  Container  =  styled.div`
   position: relative;
   width: 100%;
   -webkit-print-color-adjust: exact; 
`;
export  const  FormContainer  =  styled.div`
   position: relative;
     //Padding:40px;
`;
 export const Nav = styled.nav`
    display: flex;
    padding: 20px 0 20px 0;
    align-items: center;
    background-color: #00b3ff;
    width: 100%;
    height:25px;
    justify-content: space-between;
    box-sizing:initial;
    -webkit-print-color-adjust: exact; 
    

`;

export const NavBrand = styled.a`
    flex-grow: 1;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    padding-left: 20px;
    -webkit-print-color-adjust: exact; 
`;
export const BrandTitle = styled.p`
margin: 8px 0 2px;
font-family: Helvetica ,Roboto ,Dancing Script,cursive, sans-serif;
font-weight: 700;
color: #ffffff;
`;
export const NavItems = styled.ul`list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;`;

export const NavItem = styled.a`margin-right: 20px;
    cursor: pointer;
    transition: 250ms;
    cursor: pointer;
    color: #e5e5e5;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
}`;

export const NavItemButton = styled(NavItem)`padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #663399;
    /* add additional styles for primary*/
    
    `;
 export const Title = styled.h2`
    paddingLeft: 20px;
    margin: 8px 0 2px;
    font-family: Helvetica ,Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: 500;
    font-size:20px;
    color: #ffffff;
  `;
 export const Wrapper = styled.section`
  padding:2px;
  background: #181818;
`;

// const Icon = ({ type, onClick }) => (
//     <i className={`Icon fa fa-${type} ${type}`} onClick={onClick} />
//   )
  
//   Icon.defaultProps = {
//     onClick: null
//   }
//   export default Icon

export const Icon = styled.i`
font-size: 32px;
margin-right: 25px;
color:red;


  hover & {

  }
`;
export const SFormLable = styled.p<{width: string}>`
//width:150px;
padding-left: 15px;
width:${props => props.width};
`;


export const FormInput = styled.input<{width: string}>`
  // padding: 0.5em;
  // margin: 0.5em;
  height:35px;
  width:${props => props.width};
  color: #333;
  border: 2px solid #b2dfff;
  border-radius: 3px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #00b3ff;
  }

`;
export const IconWrapper = styled.div`
    
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-left:100px
      `;
      
  

      export const MemberPhoto = styled.img`
      height: 240px;
      width: 190px;
      border: 1px solid black;

    `;

    export const Logo = styled.img`
    height: 50px;
    width: 50px;
    -webkit-print-color-adjust: exact; 
  `;
    export const Button = styled.button<{color: string}>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 112px;
  background: ${props => props.color};
  color: white;
  border: 1px solid white;
  
`;

export const Select = styled.select`
height:35px;
width:150px;
color: #333;
border: 2px solid #b2dfff;
border-radius: 3px;
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
&:focus {
  outline: none;
  border-color: #00b3ff;
}
`;

//export default Icon
  export const Footer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  background-color: #00b3ff;
  width: 100%;
  color: white;
  
  

  @media (max-width: 786px) {
      flex-direction: column;
  }
`;