import { useState } from "react";
import { signInAuthWithEmailAndPassword, signInWithGooglePopup } from "../utils/firebase/firebaseConfig.component";
import FormInputComponent from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import ButtonComponent from "../button/button.component";

const SignInFormComponent = () => {

    const defaultForm = {
        email:'',
        password: '',
    };
    const [form, setForm] = useState(defaultForm);
    const {email, password} = form;

    const handleOnChange = ({name, value}) => {
        setForm({...form, [name]: value});
    }

    const resetForm = () => {
        setForm(defaultForm);
    }

    const handleSignIn = async (event) => {
        event.preventDefault();
        await signInAuthWithEmailAndPassword(email,password);
        resetForm(defaultForm);
    }

    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        await signInWithGooglePopup();
        resetForm(defaultForm);
    }

    return <>
        <div className="sign-in-container">
            <h2>Already have an Account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={(event) => handleSignIn(event)}>
                <FormInputComponent
                    label="Email"
                    required type='email'
                    name='email'
                    value={email}
                    onChange={(event)=>handleOnChange(event.target)}
                />

                <FormInputComponent
                    label="Password"
                    required type='password'
                    name='password'
                    value={password}
                    onChange={(event)=>handleOnChange(event.target)}
                />

               <div className="sign-in-buttons">
                   <ButtonComponent type="submit" >SIGN IN</ButtonComponent>
                   <ButtonComponent type="button" buttonType="google" onClick={handleGoogleSignIn}>GOOGLE SIGN IN</ButtonComponent>
               </div>
            </form>
        </div>
    </>
}

export default SignInFormComponent
