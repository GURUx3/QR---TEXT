// ViewPage.jsx
import { useSearchParams } from "react-router";


export default function ViewPage() {
    const [searchParams] = useSearchParams();
    const message = searchParams.get("msg");

    if (!message) {
        return <h2>No message found in QR</h2>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h2>Scanned Message</h2>
            <p style={{ fontSize: "20px" }}>{message}</p>
        </div>
    );
}
