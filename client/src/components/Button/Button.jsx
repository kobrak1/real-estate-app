import "./Button.scss";

const Button = ({src, alt, name}) => {
    return (
        <button>
            <img src={src} alt={alt} />
            {name}
        </button>
    )
}

export default Button