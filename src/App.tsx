import React, { Component } from "react";
//import logo from './components/img/logo.png';
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  FormInput, SFormLable, Button, FormContainer  }  from  "./components/Container";
  import {FlexContainer, CardContainer, Card} from "./components/Grid/grid";

  import { connect } from 'react-redux';

import {listEmployee, getlistEmployee, reqAddEmployee} from './redux/Action/empAction';
import MainTable from "./components/Table/table";


// import {Employees} from "./redux/type"
import { Dispatch } from "redux";
  //let data:string;
  //let values:string;
 interface AppProps{
  // onListEmployee(empstate:Object): void;
  onGetEmployee(): void;

  reqAddEmployee(emp:object):void;
 }
 interface AppState{
  employees : Object;
 }
 let data: Object;
class App extends Component<AppProps,AppState> {
    // constructor(props:AppProps) {
    //   super(props);
    //   //this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit = (event: React.FormEvent<HTMLFormElement> ): Object => {
     // console.log(event)
      event.preventDefault();
      const target = event.target as typeof event.target & {
        name: { value: string };
        dateOfBirth: { value: string };
        gender:{value: string};
        salary:{value: string};
      };
     //let data = new FormData(event.target);
      // const data = e.target as typeof e.target & {
      //   name: { value: string };
      //   dateOfBirth: { value: string };
      // };
     // console.log(target)
       data = {
        "name":target.name.value,
        "dateOfBirth": target.dateOfBirth.value,
        "gender": target.gender.value,
        "salary": target.salary.value
      };
      console.log(data)
      console.log(this.props)
      this.props.reqAddEmployee(data)
       //value = e.target.value
      //console.log(data.get("username"))
      //console.log(data.get("password"))
  //console.log(data)
  // console.log("this is excuted")
  //     for (let [key, value] of data) {
  //      // console.log(key +":"+ value);
  //       values[key]=value
  //       console.log(values)
  //   }
  
  
      //  this.props.form.validateFields((err, values) => {
      //   if (!err) {
      //     console.log(values)
      //   }
      // })
  return data
    };

  

    render() {
  //console.log(this.props)
  return (
    <Container>
    <Nav>
                <NavBrand>
                Test
                 </NavBrand>
                <NavItems>

                </NavItems>
            </Nav>
            <FormContainer>
             
              <form onSubmit={this.handleSubmit}>
<FlexContainer>
  <CardContainer>


            <Card>
            <div>

              <div style={{"display":"flex"}} ><SFormLable>Name</SFormLable>
                  <FormInput
                    name="name"
                    width="100%"
                  /></div>

              <div style={{"display":"flex"}}>
              <SFormLable >Date of Birth</SFormLable> 
                  <FormInput
                    name="dateOfBirth"
                    type="date"
                    width="100%"
                  />
                </div>
                

            <div> 
            <div style={{"display":"flex"}}><SFormLable>Gender</SFormLable>
            <SFormLable>Male</SFormLable>
                  <FormInput
                    name="gender"
                    type="radio"
                    value="male"
                    width="25px"
                  />

               <SFormLable>Female</SFormLable>
                  <FormInput
                    name="gender"
                    type="radio"
                    value="female"
                    width="25px"
                  /></div>
                  <div style={{"display":"flex"}}>
              <div > <SFormLable >salary</SFormLable></div>
                  <FormInput
                    name="salary"
                    width="100%"
                  /></div>
              
            </div>
            </div>
            <div style={{"display":"flex"}}>
            <Button type="submit" color="#00b3ff">Add employee</Button>
            {/* <button type="button" color="#ffa800d6" onClick={()=>{this.props.onListEmployee([{"new":"he"}])}}>update employee</button> */}
            <button type="button" color="#ffa800d6" onClick={()=>{this.props.onGetEmployee()}}>get list employee</button>
            </div>
            {/* {console.log(this.props)} */}
            </Card>

            <Card> 
              {/* <div style={{"background": "black","width":"100%","height":"40px"}}></div> */}
              <MainTable/>
             </Card>
            </CardContainer>
              </FlexContainer>



            
              </form>
            </FormContainer>
    </Container>

    
  );
}
}
const MapStateToProps = (state:AppState) : AppState => ({ ...state })
const MapDispatchToProps = (dispatch:Dispatch) => {
  return{
    // onListEmployee: (empstate:Array<object>)=>{ dispatch(listEmployee(empstate))},
    onGetEmployee: ()=>{ dispatch(getlistEmployee())},
    reqAddEmployee: (emp:object)=>{ dispatch(reqAddEmployee(emp))}
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
//export default App;
