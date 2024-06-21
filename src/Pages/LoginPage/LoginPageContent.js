import './LoginPage.css'
import Subheading from "../../Components/Title/Subheading.tsx";

const LoginPageContent = () => {
    return (
        <div>
            <p className={"secondary-text"}>
                Remember we won't share any of your login details with Bank of Scotland. <br />
                This only authorises us to share your TSB data with them.
            </p>
            <Subheading text={"User ID"} />
        </div>
    );
}

export default LoginPageContent;