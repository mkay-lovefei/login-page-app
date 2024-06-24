import './Hyperlink.css'

const Hyperlink = ({text,style}) => {
    return (
        <a href={"https://www.example.com"}
           className={"hyperlink"}
           style={style}>
            {text}
        </a>
    );
}

export default Hyperlink;