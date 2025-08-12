export default function ViewPage() {
  const params = new URLSearchParams(window.location.search);
  const msg = params.get("msg");

  return (
    <div>
      <h2>QR Message</h2>
      <p>{msg || "No message found."}</p>
    </div>
  );
}
