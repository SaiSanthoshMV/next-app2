export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <h1 style={{ fontSize: "4rem", color: "#e63946", marginBottom: "20px" }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "10px" }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#1d4ed8",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}
