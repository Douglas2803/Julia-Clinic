import React from "react";
import "./style.scss";
import { GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDyPR9GYH9NUO_o79XWxx7YhphlSpLjqRM",
  });

  const position = {
    lat: -29.16901039959064,
    lng: -51.18467115498618,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -29.16901039959064,
            lng: -51.18467115498618,
          }}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Map;
