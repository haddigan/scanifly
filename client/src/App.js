import { useCoordsApi } from "./hooks/useCoordsApi";
import { PageLayout } from "./components/PageLayout";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { ImagePlotter } from "./components/ImagePlotter";
import "./App.css";

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
        <ImagePlotter onUploadImage={handleSubmit} coords={coords} />
        <Map coords={coords} />
      </PageLayout>
    </div>
  );
}

export default App;
