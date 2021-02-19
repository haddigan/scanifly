import { useState } from "react";

export const useCoordsApi = () => {
  const [coords, setCoords] = useState(null);

  const makeRequest = async (formData) => {
    const result = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });
    const coords = await result.json();
    setCoords(coords);
  };

  return [coords, makeRequest];
};
