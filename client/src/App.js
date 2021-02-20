import { useCoordsApi } from "./hooks/useCoordsApi";
import { PageLayout } from "./components/PageLayout";
import "./App.css";
import { Header } from "./components/Header";
import { Map } from "./components/Map";

function App() {
  const [coords, requestCoords] = useCoordsApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img_upload", e.target.img_upload.files[0]);
    requestCoords(formData);
  };

  return (
    <div className="App">
      <Header />
      <PageLayout>
        <>
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
        </>
        <>
          <Map />
        </>
      </PageLayout>
    </div>
  );
}

export default App;
