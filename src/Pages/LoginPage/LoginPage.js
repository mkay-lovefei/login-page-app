import PageTemplate from "../PageTemplate";
import LoginPageContent from "./LoginPageContent";

function LoginPage () {
    return (
        <div>
            <PageTemplate
                title={"Please enter your User ID"}
                children={<LoginPageContent />}
            />
        </div>
    );
}

export default LoginPage;