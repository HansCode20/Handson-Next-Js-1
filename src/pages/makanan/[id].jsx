import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  console.log(res?.data?.data);
  return { props: { food: res?.data?.data } };
}

export default function DetailFood({ food }) {
  return (
    <div>
      <h1>Makanan : {food.name} </h1>
    </div>
  );
}
