import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

const ImageSlider = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // Slider Settings
  const SLIDER_SETTINGS = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }), [])

  // Keyboard navigation logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === "ArrowLeft") sliderRef.current?.slickPrev();
      if (e.key === "ArrowRight") sliderRef.current?.slickNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Modal content
  const ModalContent = () => (
    <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
      {images.map((img) => (
        <div key={img}>
          <img
            src={img}
            alt={`Slide`}
            style={{ width: "100%", height: "60rem", objectFit: "contain" }}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="slider">
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
        width="120rem"
        styles={{ body: { height: "85%", padding: "1rem" } }}
      >
        <ModalContent />
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