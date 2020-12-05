import React from "react";
import styled from "styled-components";
import { Button }  from  "../../components/Container";
import axios from 'axios';

export const TH = styled.th`
  padding: 0.75em;
  height: 100%;
`;

export const TR = styled.tr`

`;

export const TD = styled.td`
  border-top: 1px solid #dee2e6;
  text-align: center;
  padding: 8px;
`;

export const Table = styled.table`
  table-layout: fixed;
  font-weight: 400;
  //border-collapse: collapse;
  width: 100%;
  display: table;
  //box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;
const data = [
  {
    Name: "Anssam",
    Age: "20"
  },
  {
    Name: "Rihab",
    Age: "12"
  },
  {
    Name: "Amir",
    Age: "3"
  }
];

type Employees = [{
  
  name: String,
  dateOfBirth: String,
  gender: String,
  salary: String
 }]
let arrysdata : Array<object>=[]; 
let tableName : Array<string>=[]; 
export class MainTable extends React.Component {
        state = {
          Employees: [{name: String,dateOfBirth: String,gender: String,salary: String}]
            
        };
      
       componentDidMount () {
        let component = this;
        // let projectSelected = localStorage.getItem("projectSelected");
       

    
        axios.get('http://localhost:4000/getemployeelist')
        .then(function (res) {
          component.setState({ Employees: res.data });
          console.log("hello world")
          
          console.log(component.state.Employees);
          component.state.Employees.map((content, idx) => (
            // console.log(content)
            arrysdata.push({"name":content.name,"dateOfBirth":content.dateOfBirth,"gender":content.gender,"salary":content.salary})
          ))
          console.log(arrysdata[0])
          arrysdata.map((content, idx) => ( 
            console.log(content)
             
          ));
          {Object.keys(arrysdata[0]).map((tname, idx) => (
            tableName.push(tname)
            
          ))
          console.log(tableName)
          }
          console.log(data[0])

        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

  render() { 

    return(

<div>
<div style={{"background": "#c4c4f5","width":"100%","height":"40px","color":"#333"}}>{arrysdata.map((el, idx) => (
                // <TH key={idx}>
                //   <label>{el}</label>
                // </TH>
                
<h1>Hello world</h1>

              ))
              }</div>
<Table>
<TR>
              {data.map((el, idx) => (
                // <TH key={idx}>
                //   <label>{el}</label>
                // </TH>
               console.log(el)
              ))
              }
                {/* <TH>
                  <label>{"Delete"}</label>
                </TH> */}

    </TR>
            </Table>


{/* {data.map((content, idx) => (
              <div>
      <Table key={idx}>
        <TR>
      {Object.values(content).map((content, idx) => (
        <TD key={idx} >{content}</TD>
      ))}
       <TD>{<Button color="#ff000087" >Delete</Button>}</TD>
      </TR>
    </Table>
              </div> 
            ))
            } */}
</div>





    );

        
    
  }
}