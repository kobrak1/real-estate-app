import { Carousel } from "antd"
import "./Slider.scss"

const Slider = ({images}) => {
    return (
        <div className="slider">
            <Carousel arrows infinite={false}>
                {images.map((item, index) => (
                    <img key src={item} alt="item not found" />
                ))}
            </Carousel>
            <div className="big-image">
                <img src={images[0]} alt="big image not found" />
            </div>
            <div className="small-images">
                {images.slice(1).map((item, index) => (
                    <img key={index} src={item} alt="small image not found" />
                ))}
            </div>
        </div>
    )
}

export default Slider