import { useSearchParams } from "react-router";

export default function ViewPage() {
    const [params] = useSearchParams();
    const msg = params.get("msg");

    return (
        <div>
            <h1>Scanned Message</h1>
            <p>{msg}</p>
        </div>
    );
}
