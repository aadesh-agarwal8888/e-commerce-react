import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import './sign-up.styles.scss';


class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
         const {displayName , email, password, confirmPassword} = this.state;

         if(password !== confirmPassword) {
             alert("Password doesn't match");
             return;
         }

         try {
             const {user} = await auth.createUserWithEmailAndPassword(email, password);

             await createUserProfileDocument(user, {displayName});

             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
             })

         } catch(error) {
             console.log("Error:", error.message)
         }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName , email, password, confirmPassword} = this.state;
        return(
            <div className = "sign-up">
                <h2>I do not have a Account</h2>
                <span>Sign Up with Email and Password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput type="text" onChange = {this.handleChange} label = "Display Name" name = "displayName" value = {displayName} />
                    <FormInput type="email" onChange = {this.handleChange} label = "Email" name = "email" value = {email} />
                    <FormInput type="password" onChange = {this.handleChange} label = "Password" name = "password" value = {password} />
                    <FormInput type="password" onChange = {this.handleChange} label = "Confirm password" name = "confirmPassword" value = {confirmPassword} />
                    <CustomButton type="submit" >Submit</CustomButton>
                </form>
            </div>
        );
    }

}

export default Signup;