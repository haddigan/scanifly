import { useState } from "react";
import "./App.css";

function App() {
  const [coords, setCoords] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img_upload", e.target.img_upload.files[0]);
    const result = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });
    const coords = await result.json();
    setCoords(coords);
  };
  return (
    <div className="App">
      <header className="App-header">Scanifly</header>
      <section>
        {coords && (
          <div>
            <p>
              Coordinates to map:
              {coords.join(",")}
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            File: <input type="file" name="img_upload" />
          </div>
          <input type="submit" value="Upload" />
        </form>
      </section>
    </div>
  );
}

export default App;
