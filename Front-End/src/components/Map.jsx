//======================================================================//
import React from "react";
//======================================================================//
const Map = ({ name }) => (
  <div>
    <iframe
      style={{
        padding: "20px",
        float: "right"
      }}
      title="map"
      width="100%"
      height="900"
      id="gmap_canvas"
      src={`https://maps.google.com/maps?q=${name}%20jordan&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    ></iframe>
  </div>
);
export default Map;
