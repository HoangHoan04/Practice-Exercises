export default function RoleUI() {
  const role = "user"; // hoặc "admin"

  return (
    <div>
      <h2>Dashboard</h2>

      {role === "admin" && (
        <button style={{ color: "red" }}>Delete User</button>
      )}
    </div>
  );
}
