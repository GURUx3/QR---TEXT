import { useState } from "react";
import QRCode from "qrcode";

export default function HomePage() {
    const [value, setValue] = useState("");
    const [imgData, setImgData] = useState("");

    async function handleQRGeneration() {
        const text = value.trim();
        if (!text) return alert("Please enter some text!");

        const pageUrl = `${window.location.origin}/view?msg=${encodeURIComponent(text)}`;

        const data = await QRCode.toDataURL(pageUrl, {
            width: 300,
            margin: 2,
            color: { dark: "#000", light: "#fff" }
        });

        setImgData(data);
        setValue("");
    }

    return (
        <div>
            <h2>QR Code Generator</h2>
            <input
                type="text"
                placeholder="Message..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleQRGeneration}>Make QR</button>

            {imgData && (
                <div>
                    <img src={imgData} alt="QR Code" />
                    <a href={imgData} download="qr.png">
                        <button>Download</button>
                    </a>
                </div>
            )}
        </div>
    );
}
