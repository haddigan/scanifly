import { useState } from "react";

export const useCoordsApi = () => {
  const [coordinates, setCoordinates] = useState(null);

  const makeRequest = async (formData) => {
    const result = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });
    const { coordinates } = await result.json();
    setCoordinates(coordinates);
  };

  return [coordinates, makeRequest];
};
