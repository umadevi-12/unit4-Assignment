
import React, { useEffect, useState, useMemo } from "react";
import { Polyline } from "react-leaflet";
import axios from "axios";

const RoutePlanner = ({ origin, destination }) => {
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    if (!origin || !destination) return;

    const fetchRoute = async () => {
      try {
        const coords = `${origin[1]},${origin[0]};${destination[1]},${destination[0]}`;
        const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;

        const res = await axios.get(url);
        const route = res.data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        setRouteCoords(route);
      } catch (err) {
        console.error("Error fetching route:", err);
      }
    };

    fetchRoute();
  }, [origin, destination]);

  
  const polyline = useMemo(() => {
    if (!routeCoords.length) return null;
    return <Polyline positions={routeCoords} color="blue" weight={4} />;
  }, [routeCoords]);

  return polyline;
};

export default React.memo(RoutePlanner);
