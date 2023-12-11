import { Component } from "react";
import AppContainer from "./App.styled";
import Form from "components/Form";

export default class App extends Component {

  formSubmitHendler = data => {
    console.log(data);
  }
  
  render() {
    return (<AppContainer>
      <Form onFormSubmit={this.formSubmitHendler} />      
    </AppContainer>)
  } 
}
