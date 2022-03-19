import SignUpFormComponent from "../sign-up-form/sign-up-form.component";
import SignInFormComponent from "../sign-in-form/sig-in-form-component";
import './authentication.styles.scss';

const AuthenticationComponent = () => {

    return (
        <div className="auth-container">
            <SignInFormComponent />
            <SignUpFormComponent/>
        </div>
    );

}

export default AuthenticationComponent

