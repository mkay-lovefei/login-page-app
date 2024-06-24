import './Footer.css'
import Hyperlink from "../Hyperlinks/Hyperlink.tsx";

const Footer = () => {
    return (
        <footer className={"the-footer"}>
            <Hyperlink
                text={"Legal"}
                style={{left: '500px', textDecoration: 'none'}}/>
            <span className={"sep-one"}>|</span>
            <Hyperlink
                text={"Privacy"}
                style={{left: '620px', textDecoration: 'none'}}/>
            <span className={"footer-separator"}>|</span>
            <Hyperlink
                text={"Security"}
                style={{left: '750px', textDecoration: 'none'}}/>
            <span className={"footer-separator"}>|</span>
            <Hyperlink
                text={"Rates and Charges"}
                style={{left: '870px', textDecoration: 'none'}}/>
        </footer>
    );
}

export default Footer;