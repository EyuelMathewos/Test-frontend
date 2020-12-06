import React from "react";
import styled from "styled-components";
import { Button }  from  "../../components/Container";
import axios from 'axios';
import qs from 'qs';
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
let tableName : object=[]; 
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
          //arrysdata= res.data;
          console.log(arrysdata)
          console.log(qs.stringify(res, { filter: ['name','dateOfBirth','gender','salary'],arrayFormat: 'comma' }))
          //console.log(component.state.Employees);
          component.state.Employees.map((content, idx) => (
            // console.log(content)
            arrysdata.push({"name":content.name,"dateOfBirth":content.dateOfBirth,"gender":content.gender,"salary":content.salary})
          ))
          //console.log(arrysdata[0])
          // arrysdata.map((content, idx) => ( 
          //   console.log(content)
             
          // ));
        //   {Object.keys(arrysdata[0]).map((tname, idx) => (
        //     tableName.push(tname)
            
        //   ))
        // }
        tableName=arrysdata[0];
          //console.log(tableName)
          
          //console.log(data[0])

        })
        .catch(function (error) {
          console.log(error);
        });
    
      }

  render() { 

    return(

<div>


<Table>

                <TH>
                  <label>Name</label>
                </TH>
                <TH>
                  <label>Date of birth</label>
                </TH>
                <TH>
                  <label>Gender</label>
                </TH>
                <TH>
                  <label>Salary</label>
                </TH>



{
this.state.Employees.map((content, idx) => (
  //console.log(content)
              


        <TR>
     
        <TD key={idx+"name"} >{content.name}</TD>
        <TD key={idx+"dateofb"} >{content.dateOfBirth}</TD>
        <TD key={idx+"gender"} >{content.gender}</TD>
        <TD key={idx+"salary"} >{content.salary}</TD>
      
        <TD>{<Button color="#ff000087" >Delete</Button>}</TD>
      </TR>


            ))
            }
</Table>
</div>





    );

        
    
  }
}