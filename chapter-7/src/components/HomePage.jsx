import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/search">Search</Link>
      </nav>
    </div>
  );
};

export default HomePage;
