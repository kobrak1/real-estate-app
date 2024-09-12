import "./Feature.scss";

const Feature = ({src, alt, title, desc}) => {
    return (
        <div className="feature">
            <img src={src} alt={alt} />
            <div className="featureText">
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Feature