export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", color: "red" }}>User Management</h1>
      {children}
    </div>
  );
}