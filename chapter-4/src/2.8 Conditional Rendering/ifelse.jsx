import { useEffect, useState } from "react";

export default function FetchData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // giả lập API
      const success = false; // đổi thành true để thử lỗi

      if (success) {
        setData({ name: "React" });
      } else {
        setError(true);
      }
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return <h2>Data: {data.name}</h2>;
}
