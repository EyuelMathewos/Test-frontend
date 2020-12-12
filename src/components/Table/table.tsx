import React, {Component} from "react";
import styled from "styled-components";
import { Button }  from  "../../components/Container";
//import axios from 'axios';
//import qs from 'qs';
import { connect } from 'react-redux';

import { getlistEmployee, reqDeleteEmployee, updateEmployeeForm } from '../../redux/Action/empAction';
import { Dispatch } from "redux";

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


type Employees = [{
  _id:String,
  name: String,
  dateOfBirth: String,
  gender: String,
  salary: String
 }]


interface AppProps{
  onGetEmployeeList(): void;
  onReqDeleteEmployee(id:String):void;
  onUpdateEmployeeForm(emp:Object):void;
 }
 interface AppState{
  employeeState:{employees : Employees,
    formupdate: Object
  }

 }

class MainTable extends Component <AppState & AppProps> {
  constructor(props: any) {
    super(props);
    this.state = { listofempstate: Object};
  }
 
  // state = {
  //   listofempstate: this.props.employeeState.employees,
  // };
               // this.props.onGetEmployeeList();
      callforUpdate(emp:String){
          //this.props.onUpdateEmployeeForm(emp);
          
      }
      componentDidMount () {
        
       // this.callforAction();
         this.props.onGetEmployeeList()
 //console.log(  this.props)

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
                  //  console.log(this.props.employeeState.employees)
   this.props.employeeState.employees.map((content, idx) => (
  //console.log( {name:content._id,dateOfBirth:content.dateOfBirth,gender:content.gender,salary:content.salary})
        //  <h1>Hello world</h1>     


        <TR>
     
        <TD key={idx+"name"} >{content.name}</TD>
        <TD key={idx+"dateofb"} >{content.dateOfBirth}</TD>
        <TD key={idx+"gender"} >{content.gender}</TD>
        <TD key={idx+"salary"} >{content.salary}</TD>
        <TD>{<Button type="button" color="#00ff2e87" onClick={()=>{this.props.onUpdateEmployeeForm({id:content._id,name:content.name,dateOfBirth:content.dateOfBirth,gender:content.gender,salary:content.salary})}} >Edit</Button>}</TD>
        <TD>{<Button type="button" color="#ff000087" onClick={()=>{this.props.onReqDeleteEmployee(content._id)}} >Delete</Button>}</TD>
      </TR>


            ))
            }  
</Table>
</div>





    );

        
    
  }
}
const MapStateToProps = (state:AppState) : AppState => ({ ...state })
const MapDispatchToProps = (dispatch:Dispatch) => {
  return{
    onGetEmployeeList: ()=>{ dispatch(getlistEmployee())},
    onReqDeleteEmployee: (id:string)=>{ dispatch(reqDeleteEmployee(id))},
    onUpdateEmployeeForm: (emp:Object)=>{ dispatch(updateEmployeeForm(emp))}
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(MainTable);