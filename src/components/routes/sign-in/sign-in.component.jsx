import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebaseConfig.component'
import SignUpFormComponent from "../../sign-up-form/sign-up-form.component";

const SignInComponent = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    }

    return <>
        <h3>Sign-in working</h3>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <SignUpFormComponent/>
    </>
}

export default SignInComponent

