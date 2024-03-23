import axios from "axios";
import { useEffect, useState } from "react";

export default function FoodPage() {
  const [data, setData] = useState([]);
  const getFoods = async () => {
    const response = await axios.get(
      "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
      { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
    );

    setData(response.data.data);
  };

  useEffect(() => {
    getFoods();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Food</h1>
      <div className="flex flex-wrap gap-4 ">
        {data.map((item) => (
          <div className="w-1/4 bg-slate-300 p-4" key={item.id}>
            <h1>{item.name}</h1>
            <img
              src={item.imageUrl}
              alt={item.name}
              width={300}
              height={100}
              className="w-full"
            />
            <p>Igendrients : {item.ingredients.join(", ")}</p>
            <p>Rating : {item.rating}</p>
            <p>Likes : {item.totalLikes}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
