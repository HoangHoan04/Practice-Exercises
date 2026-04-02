import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  //* 1. GET: Lấy danh sách bài viết
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?_limit=5`);
      setPosts(response.data);
      setStatusMessage("Đã tải danh sách bài viết thành công!");
    } catch (err) {
      setError("Không thể tải dữ liệu từ API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //* 2. POST: Thêm bài viết mới
  const addPost = async () => {
    try {
      const newPost = {
        title: "Bài viết mới",
        body: "Nội dung bài viết mới",
        userId: 1,
      };
      const response = await axios.post(API_URL, newPost);
      //* Giả thêm vào mảng dữ liệu cũ để cập nhật UI chứ không được thêm vào api thật
      setPosts([response.data, ...posts]);
      setStatusMessage("Đã thêm bài viết mới thành công!");
    } catch (err) {
      setStatusMessage("Lỗi khi thêm bài viết.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Quản lý bài viết với Axios
        </h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={addPost}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Thêm bài mới (POST)
          </button>
          <button
            onClick={fetchPosts}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Làm mới (GET)
          </button>
        </div>

        {statusMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {statusMessage}
          </div>
        )}

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Đang tải dữ liệu...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border p-4 rounded-xl hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg text-blue-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-1">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
