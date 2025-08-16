import React, { useState, useCallback } from "react";
import MapView from "./components/MapView";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [currentLocation, setCurrentLocation] = useState([28.6139, 77.209]); // example Delhi
  const [destination, setDestination] = useState(null);
  const [poiList, setPoiList] = useState([]);

  const handleSearch = useCallback((query) => {
    // Call a geocoding API to get coordinates
    console.log("Search query:", query);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">📍 Optimized Map App</h1>
      <SearchBox onSearch={handleSearch} />
      <MapView currentLocation={currentLocation} destination={destination} poiList={poiList} />
    </div>
  );
}
