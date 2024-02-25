import { fetchCards } from "./actions";
import HomeClientPage from "./client";


export default async function  Home() {
  const data = await fetchCards();

  
  return <HomeClientPage cards={data} />
}
