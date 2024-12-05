import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [ListOfRestaurants, setListOfRestaurant] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [searchText, setSearchText] = useState("");
    // console.log("rendered again");
    useEffect(() => {
        fetchData();

    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3138804&lng=78.0295273&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );
        console.log("fetched");
        const json = await data.json();
        console.log(json);
        const restaurant = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurant(
            restaurant
        );
        setFilterList(restaurant);
    };

    return (!ListOfRestaurants || ListOfRestaurants.length === 0) ? <Shimmer /> : (

        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}>
                    </input>
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredList = ListOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterList(filteredList);
                    }
                    }>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const restfilter = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilterList(restfilter);
                }}
                >
                    Top Rated Restraunts
                </button>
            </div>
            <div className="rest-cont">
                {filterList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestCard resData={restaurant} /></Link>
                ))}

            </div>
        </div>
    )
};
export default Body;