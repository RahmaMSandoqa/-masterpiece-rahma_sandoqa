//======================================================================//
import React from "react";
import PhotoGrid from "./PhotoGrid";
import { Link } from "react-router-dom";
//=======================PHOTOS GRID CONTAINER==========================//
const GridContainer = ({ data }) => (
  <div className="container">
    <h1 style={{ color: "#ffebcd" }}>Top sights in Jordan</h1>
    <h5>
      A safe haven in a region of conflict, Jordan has delighted visitors for
      centuries with its World Heritage Sites, friendly towns and inspiring
      desert landscapes.
    </h5>
    <div className="row ml-5">
      {/* mapping Link URL with ID and Photos to PhotoGrid Component */}
      {data.map((place, i) => (
        <Link key={i} to={`/place/${place._id}`}>
          <PhotoGrid place={place} />
        </Link>
      ))}
    </div>
  </div>
);

export default GridContainer;
