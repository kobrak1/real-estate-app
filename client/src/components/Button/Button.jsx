import "./Button.scss";

const Button = ({src, alt, name}) => {
    return (
        <button className="custom-button">
            {src && <img src={src} alt={alt} />}
            {name}
        </button>
    )
}

export default Button