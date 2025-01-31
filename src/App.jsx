import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          📌 Todos List
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg shadow-md ${
                item.completed ? "bg-green-100 border-l-4 border-green-500" : "bg-red-100 border-l-4 border-red-500"
              }`}
            >
              <strong className="text-gray-700 text-lg">#{item.id}</strong>
              <p
                className={`mt-2 text-gray-800 ${
                  !item.completed && "line-through text-gray-500"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
