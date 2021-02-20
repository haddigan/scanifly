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
      style: "mapbox://styles/mapbox/satellite-streets-v11",
    });
  }, []);

  useEffect(() => {
    if (coords) {
      const marker = new mapboxgl.Marker();
      // todo fix coords order
      marker.setLngLat([coords[1], coords[0]]);
      marker.addTo(mapRef.current);
      mapRef.current.flyTo({
        center: [coords[1], coords[0]],
        zoom: 18,
      });
    }
  }, [mapRef, coords]);

  return <div ref={mapElement} className="map-container" />;
};
