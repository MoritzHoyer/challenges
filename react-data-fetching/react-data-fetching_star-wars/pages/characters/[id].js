import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we will still try to parse and throw it.

  if (!res.ok) {
    const error = new Error("An error occured while fetching the data.");
    // Attach extra info to the error Object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Character() {
  // const id = 1;
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, Error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );
  // console.log("data", data)

  if (isloading) return <h1>is loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
