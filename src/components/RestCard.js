import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRatingString, costForTwo, deliveryTime } = resData?.info;
    return (
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="rest-logo"
                alt="err" src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join()}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};
export default RestCard;