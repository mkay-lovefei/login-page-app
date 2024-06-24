import './TextBox.css'


const TextBox = ({value, onChange}) => {
    return (
        <input
            type={"text"}
            value={value}
            onChange={onChange}
            placeholder={"Jonsti2024"}
            className={"text-box"}
        />
    );
}

export default TextBox;