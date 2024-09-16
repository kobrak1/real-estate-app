import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import Feature from "../../components/Feature/Feature.jsx";
import Button from "../../components/Button/Button.jsx";
import Map from "../../components/Map/Map.jsx";
import "./SinglePage.scss";

import { singlePostData, userData } from "../../lib/dummyData.js";

const SinglePage = () => {
  return (
    <div className="single-page">
      <div className="details">
        <div className="wrapper">
          <ImageSlider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin.png not found" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user image not found" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <Feature  
              src="/utility.png"
              alt="utility img not found"
              title="Utility"
              desc="Renter is responsible"
            />
            <Feature
              src="/pet.png"
              alt="pet img not found"
              title="Pet Policy"
              desc="Pets Allowed"
            />
            <Feature
              src="/fee.png"
              alt="fee img not found"
              title="Property Fees"
              desc="Must have 3x the rent in total household income"
            />
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <Feature
              src="/school.png"
              alt="school img not found"
              title="School"
              desc="250m away"
            />
            <Feature
              src="/bus.png"
              alt="bus img not found"
              title="Bus Stop"
              desc="100m away"
            />
            <Feature
              src="/restaurant.png"
              alt="restaurant img not found"
              title="Restaurant"
              desc="200m away"
            />
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <Button
              src="/chat.png"
              alt="chat img not found"
              name="Send a message"
            />
            <Button
              src="/save.png"
              alt="save img not found"
              name="Save the place"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
