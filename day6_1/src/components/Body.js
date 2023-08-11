import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard ';
import Shimmer from './Shimmer';

// import fakeAPI from '../utils/fakeAPI';

const filter = (hotels) => hotels?.filter((hotel) => hotel.info.avgRating > 4);

export const Body = () => {
  const [hotels, setHotels] = useState();


  {
    /*call after the component rendered*/
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const responseJson = await response.json();
    setHotels(responseJson.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
  };

  if (!hotels){
    return ( <div className="shimmer-container">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>)
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => setHotels(filter(hotels))}
        >
          Top Rated Restaurant
        </button>
      </div>
     
      <div className="res-container">
        {hotels?.map((items, index) => (
          <RestaurantCard key={items.info.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
