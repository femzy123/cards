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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {cards &&
          cards.map((card) => (
            <div key={card.id}>
              <CardItem card={card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeClientPage;
