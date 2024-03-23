import axios from "axios";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const response = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  return {
    props: {
      foods: response.data.data,
    },
  };
}

export default function FoodPage({ foods }) {
  console.log(foods);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {foods.map((item) => (
          <div className="bg-gray-400 p-4 rounded-lg" key={item.id}>
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover mb-2 "
            />
            <p className="mb-2">
              <strong>Ingredients:</strong> {item.ingredients.join("/ ")}
            </p>
            <p className="mb-2">
              <strong>Rating:</strong> {item.rating}
            </p>
            <p className="mb-2">
              <strong>Likes:</strong> {item.totalLikes}
            </p>
            <p className="mb-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
