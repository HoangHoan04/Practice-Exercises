import { useSearchParams } from "react-router";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Search Page</h1>
      <p>Searching for: {query}</p>
    </div>
  );
};

export default SearchPage;
