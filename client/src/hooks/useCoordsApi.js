import { useState } from "react";

export const useCoordsApi = () => {
  const [response, setCoordinates] = useState({
    coordinates: null,
    file: null,
  });

  const makeRequest = async (formData) => {
    const result = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });
    const response = await result.json();
    setCoordinates(response);
  };

  return [response, makeRequest];
};
