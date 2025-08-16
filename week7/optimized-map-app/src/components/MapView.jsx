
import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutePlanner from "./RoutePlanner";

const MapView = React.memo(({ currentLocation, destination, poiList }) => {
  const markers = useMemo(() => {
    const items = [];

    if (currentLocation) {
      items.push(
        <Marker key="current" position={currentLocation}>
          <Popup>Current Location</Popup>
        </Marker>
      );
    }

    if (destination) {
      items.push(
        <Marker key="dest" position={destination}>
          <Popup>Destination</Popup>
        </Marker>
      );
    }

    poiList.forEach((poi, index) => {
      items.push(
        <Marker key={`poi-${index}`} position={poi.position}>
          <Popup>{poi.name}</Popup>
        </Marker>
      );
    });

    return items;
  }, [currentLocation, destination, poiList]);

  return (
    <MapContainer
      center={currentLocation || [0, 0]}
      zoom={13}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers}

      {currentLocation && destination && (
        <RoutePlanner origin={currentLocation} destination={destination} />
      )}
    </MapContainer>
  );
});

export default MapView;
