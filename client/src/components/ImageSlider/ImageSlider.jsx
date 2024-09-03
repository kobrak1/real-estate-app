import { useState } from "react";
import { Modal } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

const ImageSlider = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider">
      <Modal
        title={null} // No title, you can customize or set it as needed
        open={open}
        onCancel={handleClose}
        footer={null} // Remove footer if not needed
        centered // Center the modal
        width="120rem"
        styles={{
          body: { height: "80rem"},
        }}
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "75rem" }}
              />
            </div>
          ))}
        </Slider>
      </Modal>

      <div className="big-image" onClick={handleOpen}>
        <img src={images[0]} alt="Main image" />
      </div>
      <div className="small-images">
        {images.slice(1).map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Thumbnail ${index + 1}`}
            onClick={handleOpen}
            className="thumbnail-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
