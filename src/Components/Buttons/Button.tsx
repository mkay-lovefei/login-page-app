import './Button.css'

const Button = ({buttonName}) => {
    return (
        <div className={"button"}>
            {buttonName}
        </div>

    );
}

export default Button;