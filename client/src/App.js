import "./App.css";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img_upload", e.target.img_upload.files[0]);
    const result = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });
    const coords = await result.json();
    console.log(coords);
  };
  return (
    <div className="App">
      <header className="App-header">Scanifly</header>
      <section>
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
