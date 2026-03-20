import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/app/about">About</Link>
        <Link to="/product/1">Product 1</Link>
      </div>
    </div>
  );
};

export default Home;
