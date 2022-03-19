import {useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebaseConfig.component";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import './sign-up-form.styles.scss';

const SignUpFormComponent = () => {

    const defaultForm = {
        displayName: '',
        email:'',
        password: '',
        confirmPassword: ''
    };
    const [form, setForm] = useState(defaultForm);
    const {displayName, email, password, confirmPassword} = form;

    const handleOnChange = ({name, value}) => {
        setForm({...form, [name]: value});
    }

    const resetForm = () => {
        setForm(defaultForm);
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetForm(defaultForm);
        } else {
            console.log('password mismatch');
        }
    }

    return <>
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={(event) => handleSignup(event)}>
                <FormInputComponent
                    label="Display Name"
                    required type='text'
                    name='displayName'
                    value={displayName}
                    onChange={(event)=>handleOnChange(event.target)}
                />

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

                <FormInputComponent
                    label="Confirm Password"
                    required type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={(event)=>handleOnChange(event.target)}
                />

                <ButtonComponent type="submit" >Submit</ButtonComponent>
            </form>
        </div>
    </>
}

export default SignUpFormComponent
