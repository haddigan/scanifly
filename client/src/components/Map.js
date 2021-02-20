import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = ({ coords }) => {
  const mapElement = useRef(null);
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapElement.current,
      center: [-96.4247, 31.51073],
      zoom: 2,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
    });
  }, []);

  useEffect(() => {
    if (coords) {
      const marker = new mapboxgl.Marker();
      marker.setLngLat(coords);
      marker.addTo(mapRef.current);
      mapRef.current.flyTo({
        center: coords,
        zoom: 18,
      });
    }
  }, [mapRef, coords]);

  return <div ref={mapElement} className="map-container" />;
};
