"use server";

type CardsApiResponse = {
  cards: Card[]
}

export const fetchCards = async (): Promise<Card[]> => {
  const response = await fetch("https://api.magicthegathering.io/v1/cards");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: CardsApiResponse = await response.json();

  return data.cards;
};