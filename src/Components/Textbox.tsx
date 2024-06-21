
const Textbox = ({value, onChange}) => {
    return (
        <input
            type={"text"}
            value={value}
            onChange={onChange}
            placeholder={"Jonsti2024"}
        />
    );
}

export default Textbox;