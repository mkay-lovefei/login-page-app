import './Footer.css'

const Footer = () => {
    return (
        <footer className={"the-footer"}>
            <button className={"footer-button"}>Legal</button>
            <span className={"footer-separator"}>|</span>
            <button className={"footer-button"}>Privacy</button>
            <span className={"footer-separator"}>|</span>
            <button className={"footer-button"}>Security</button>
            <span className={"footer-separator"}>|</span>
            <button className={"footer-button"}>Rates and Charges</button>
        </footer>
    );
}

export default Footer;