import React, { Component } from "react";
//import logo from './components/img/logo.png';
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  FormInput, SFormLable, Button, FormContainer  }  from  "./components/Container";
  import {FlexContainer, CardContainer, Card} from "./components/Grid/grid";
  import {MainTable} from "./components/Table/table";
  //let data:string;
  //let values:string;
 

  export default class App extends Component {
    constructor(props:string) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = (event: React.SyntheticEvent ) => {
      console.log(event)
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
      console.log(target)
      let data = {
        "name":target.name.value,
        "dateOfBirth": target.dateOfBirth.value,
        "gender": target.gender.value,
        "salary": target.salary.value
      };
      console.log(data)
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
  
    };

  

    render() { 
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
            <Button type="submit" color="#00b3ff" >Add employee</Button>
            <Button type="submit" color="#ffa800d6" >update employee</Button>
            </div>
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

//export default App;
