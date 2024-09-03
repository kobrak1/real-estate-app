import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx"
import "./SinglePage.scss";
import { singlePostData, userData } from "../../lib/dummyData.js"

const SinglePage = () => {
  return (
    <div className="single-page">
      <div className="details">
        <div className="wrapper">
          <ImageSlider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin.png not found"/>
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user image not found" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
};

export default SinglePage;
