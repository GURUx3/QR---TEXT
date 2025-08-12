import { useState } from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [value, setValue] = useState("");
  const [imgData, setImgData] = useState("");

  async function handleQRGeneration() {
    try {
      const text = value.trim();
      if (!text) return alert("Please enter some text!");

      const pageUrl = `https://my-qr-app.vercel.app/view?msg=${encodeURIComponent(text)}`;

      const data = await QRCode.toDataURL(pageUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });

      setImgData(data);
      setValue(""); // clear input after QR generated
    } catch (err) {
      console.error(err);
    }
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "qr-code.png";
    link.click();
  }

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <input
          type="text"
          placeholder="Message..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleQRGeneration}>Make QR</button>
      </div>

      {imgData && (
        <div className="qr-container">
          <h3>Scan Me</h3>
          <img src={imgData} alt="QR Code" />
          <button onClick={handleDownload} style={{ marginTop: "12px" }}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
