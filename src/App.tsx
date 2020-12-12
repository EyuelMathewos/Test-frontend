import React, { Component, createRef } from "react";
//import logo from './components/img/logo.png';
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  FormInput, SFormLable, Button, FormContainer  }  from  "./components/Container";
  import {FlexContainer, CardContainer, Card} from "./components/Grid/grid";

  import { connect } from 'react-redux';

import { getlistEmployee, reqAddEmployee, reqEditEmployee} from './redux/Action/empAction';
import MainTable from "./components/Table/table";


// import {Employees} from "./redux/type"
import { Dispatch } from "redux";

  //let data:string;
  //let values:string;
 interface AppProps{
  // onListEmployee(empstate:Object): void;
  onGetEmployee(): void;
  reqAddEmployee(emp:object):void;
  reqEditEmployee(emp:object):void;
 }
 interface AppState{
  employeeState:{
    employees : Object,
    formupdate: {
      id:String,
      name: String,
      dateOfBirth: String,
      gender: String,
      salary: String
    }
  }
 }
 
 let data: Object;
 let name: String;
 let date: String;
 let gender: String;
 let salary: String;
 let id: String;

class App extends Component<AppProps & AppState> {

  private ref:any = createRef<HTMLFormElement>();
  private date:any = createRef<HTMLFormElement>();
  private gender:any = createRef<HTMLFormElement>();
  private salary:any = createRef<HTMLFormElement>();
  
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
setFormData(){
  name = this.props.employeeState.formupdate.name;
  date = this.props.employeeState.formupdate.dateOfBirth;
  gender = this.props.employeeState.formupdate.gender;
  salary = this.props.employeeState.formupdate.salary;
  id = this.props.employeeState.formupdate.id;
}
    componentDidUpdate(){
    //  let formupdatedata:Object = this.props.employeeState.formupdate
     
      // console.log("hello world on update");
      // console.log(this.ref)
      // console.log("the value of ref")
      

if(this.props.employeeState.formupdate !== undefined)


this.setFormData();

if(name !== undefined){
  this.ref.current.value = name;
}
if(date !== undefined){
  this.date.current.value = date;
}
if(gender !== undefined){
  this.gender.current.value = gender;
}
if(salary !== undefined){
  this.salary.current.value = salary;
}




    }

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
             
              <form  onSubmit={this.handleSubmit}>
<FlexContainer>
  <CardContainer>


            <Card>
            <div>

              <div style={{"display":"flex"}} ><SFormLable>Name</SFormLable>
                  <FormInput ref={this.ref}
                    name="name"
                    width="100%"
                  /></div>

              <div style={{"display":"flex"}}>
              <SFormLable >Date of Birth</SFormLable> 
                  <FormInput ref={this.date}
                    name="dateOfBirth"
                    type="date"
                    width="100%"
                  />
                </div>
                

            <div> 
            <div style={{"display":"flex"}}><SFormLable>Gender</SFormLable>
            <SFormLable>Male</SFormLable>
                  <FormInput ref={this.gender}
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
                    ref={this.gender}
                  /></div>
                  <div style={{"display":"flex"}}>
              <div > <SFormLable >salary</SFormLable></div>
                  <FormInput ref={this.salary}
                    name="salary"
                    width="100%"
                  /></div>
              
            </div>
            </div>
            <div style={{"display":"flex"}}>
            <Button type="submit" color="#00b3ff">Add employee</Button>
            <Button type="button" color="#ffa800d6" onClick={()=>{this.props.reqEditEmployee({"id":id,"name":this.ref.current.value,"dateOfBirth":this.date.current.value,"gender":this.gender.current.value,"salary":this.salary.current.value})}}>update employee</Button>
            {/* <Button type="button" color="#ffa800d6" onClick={()=>{this.props.onGetEmployee()}}>get list employee</Button> */}
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
    reqAddEmployee: (emp:object)=>{ dispatch(reqAddEmployee(emp))},
    reqEditEmployee: (emp:object)=>{ dispatch(reqEditEmployee(emp))}
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
//export default App;
