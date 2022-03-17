import { signInWithGooglePopup } from '../../utils/firebase/firebaseConfig.component'
const SignInComponent = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return <>
        <h3>Sign-in working</h3>
        <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
}

export default SignInComponent

