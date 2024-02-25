import { fetchCards } from "./actions";


export default async function  Home() {
  const data = await fetchCards();

  console.log(data)
  return (
    <main>
      Hello
    </main>
  );
}
