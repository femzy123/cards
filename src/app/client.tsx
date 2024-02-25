"use client";

import CardItem from "@/components/CardItem";
import { useState } from "react";

type Props = {
  cards: Card[];
};

const HomeClientPage = ({ cards }: Props) => {
  const [search, setSearch] = useState("");

  const filteredList = cards.filter((card) =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 px-20">
      <div className="flex items-center justify-end gap-4 mb-8">
        <p>{search ? filteredList.length : cards.length}</p>
        <input
          placeholder="search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded text-sm"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {search ? (
          filteredList.length > 0 ? (
            filteredList.map((card) => (
              <div key={card.id}>
                <CardItem card={card} />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No results found.</div>
          )
        ) : cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id}>
              <CardItem card={card} />
            </div>
          ))
        ) : (
          // Display a message when there are no cards at all
          <div className="text-center text-gray-500">No cards available.</div>
        )}
      </div>
    </div>
  );
};

export default HomeClientPage;
