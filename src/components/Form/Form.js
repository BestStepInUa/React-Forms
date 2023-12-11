import { Component } from "react";
import { nanoid } from "nanoid";
import FormStyled from "./Form.styled";

export default class Form extends Component {
    state = {
        name: '',
        nickname: '',
        experience: 'junior',
        licence: false
    }
    
    nameId = nanoid()
    nicknameId = nanoid()

    handelChange = evt => {
        const { name, value } = evt.currentTarget
        // console.log(evt.currentTarget)
        // console.log(name)
        // console.log(value);
        this.setState({[name]: value})
    }
    
    handelFormSubmit = evt => {
        evt.preventDefault()       
        this.props.onFormSubmit(this.state)
        this.reset()
    }
    
    handelLicenceAgreement = evt => {
        console.log(evt.currentTarget.checked);
        this.setState({licence: !this.state.licence})
    }
  
    reset = () => {
        this.setState({name: '', nickname: ''})
    }

    render() {
        return (
            <FormStyled onSubmit={this.handelFormSubmit}>
                <label htmlFor={this.nameId}>Name:</label>
                <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handelChange}
                    id={this.nameId} />
                
                <label htmlFor={this.nicknameId}>Nickname:</label>
                <input type="text"
                    name="nickname"
                    value={this.state.nickname}
                    onChange={this.handelChange}
                    id={this.nicknameId} />
                                               
                
                <p>Your level:</p>

                <label>
                    <input type="radio" 
                    value="junior" 
                    name="experience" 
                    onChange={this.handelChange}
                    checked={this.state.experience === 'junior'}/>Junior
                </label>
                <label>
                    <input type="radio" 
                    value="middle" 
                    name="experience" 
                    onChange={this.handelChange}
                    checked={this.state.experience === 'middle'}/>Middle
                </label>
                <label>
                    <input type="radio"
                    value="senior" 
                    name="experience" 
                    onChange={this.handelChange}
                    checked={this.state.experience === 'senior'}/>Senior
                </label>

                <label>
                    <input type="checkbox"
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.handelLicenceAgreement}
                    />I agree with the terms of the license agreement
                </label>
                
                
                <button type="submit" disabled={!this.state.licence}>Send</button>
                                        
            </FormStyled>)
    }
} 