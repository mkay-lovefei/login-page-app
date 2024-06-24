import './LoginPage.css'
import Subheading from "../../Components/Title/Subheading.tsx";
import {useState} from "react";
import TextBox from "../../Components/TextBox/TextBox.tsx";
import Hyperlink from "../../Components/Hyperlinks/Hyperlink.tsx";
import Button from '../../Components/Buttons/Button.tsx'

const LoginPageContent = () => {

    const [textInput, setTextInput] = useState('');
    const handleTextChange = (e) => {
        setTextInput(e.target.value);
    }

    return (
        <div>
            <p className={"secondary-text"}>
                Remember we won't share any of your login details with Bank of Scotland. <br />
                This only authorises us to share your TSB data with them.
            </p>
            <Subheading text={"User ID"} />
            <TextBox value={textInput}
                     onChange={handleTextChange}
            />
            <Hyperlink
                text={"Recover user ID"}
                style={{top: '410px', left: '70px'}}/>
            <Hyperlink
                text={"Forgotten your password and memorable information?"}
                style={{top: '440px', left: '70px'}}/>
            <Button buttonName={"Continue"}/>
            <button className={"text-button"}>Cancel Open Banking request</button>
        </div>
    );
}

export default LoginPageContent;