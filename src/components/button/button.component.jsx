import './button.styles.scss';

const ButtonComponent = ({children, buttonType, ...otherProps}) => {
    const BUTTON_TYPES = {
        default: 'default',
        google: 'google-sign-in',
        inverted: 'inverted'
    }
    return (
        <button className={ `${BUTTON_TYPES[buttonType]} button-container`}
                {...otherProps}
        >
            {children}
        </button>
    );
};

export default ButtonComponent;
