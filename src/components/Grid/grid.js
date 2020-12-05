import React from "react";
import styled from "styled-components";
import "./gridStyle.css";

export  const  FlexContainer  =  styled.div`
    position: relative;
    display: flex; 
    `;
    
    export  const  CardContainer  =  styled.div`
    display:grid;
    grid-template-columns: 35% 65%; 
    height: 100%;
    width:100%;

    @media (max-width: 1440px) {
         grid-template-columns: 25% 75%; 
        
      }
      @media (max-width: 1200px) {
          grid-template-columns: 25% 75%; 
        
      }
      @media (max-width: 1024px) {
       
          grid-template-columns: 25% 75%;
        
      }
      @media (max-width: 768px) {
          
          grid-template-columns: 25% 75%;
        
      }
      @media (max-width: 480px) {
          grid-template-columns: 100%;
      }

    `;

    export  const  Card  =  styled.div`

    background-size: cover;
    background-position: center;
    background-image: url('${props => props.content}');
    // font-size: 24px;
    // font-weight: bold;


    /* padding: 50px 0px;*/
    margin: 6px;
    width:100%;
    background-color: white;
    border-radius: 1px;
    
    
    @media (max-width: 1440px) {
        width:${props => (props.swidth)/4}px;
       
     }
     @media (max-width: 1200px) {
        width:${props => (props.swidth)/4}px;
       
     }
     @media (max-width: 1024px) {
      
        width:${props => (props.swidth)/4}px;
       
     }
     @media (max-width: 768px) {
         
        width:${props => (props.swidth)-9/3}px;
       
     }
     @media (max-width: 480px) {
        width:${props => (props.swidth)}px;
     }
      `;
      export  const  Cardfull  =  styled.div`
    position: relative;
    display:flex;
    width:100%;
    `;

export class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
       }
      


  render() { 
    
    return(

        <FlexContainer>
        <CardContainer>

          {/* {content.map((_slide, i) => (
              <Card swidth={this.state.width} width={this.state.width} key={i} content={_slide}/> 
            ))
            } */}


        </CardContainer>
        </FlexContainer>
    );

        
    
  }
}