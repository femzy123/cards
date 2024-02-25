"use client";

import CardItem from "@/components/CardItem";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  cards: Card[];
};

const HomeClientPage: React.FC<Props> = ({ cards }: Props) => {
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [loadedCards, setLoadedCards] = useState<Card[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Apply initial search filter
    setFilteredCards(
      cards.filter((card) =>
        card.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    // Fetch initial 20 cards
    setLoadedCards(filteredCards.slice(0, 20));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const fetchMoreCards = async () => {
    if (!hasMore) return;

    const nextIndex = loadedCards.length;
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newCards = cards.slice(nextIndex, nextIndex + 20); // Simulate fetching next 20 cards

    // Apply search filter to newly fetched cards
    const filteredNewCards = newCards.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );

    setLoadedCards([...loadedCards, ...filteredNewCards]);

    // Check if there are more cards to load
    setHasMore(filteredNewCards.length === 20);
  };

  return (
    <div className="py-6 sm:py-10 px-10 sm:px-20">
      <div className="flex items-center justify-center sm:justify-end gap-4 mb-8">
        <p className="text-xs text-gray-400">
          {search
            ? loadedCards.length
            : filteredCards.length > 0
            ? filteredCards.length
            : cards.length}
        </p>
        <input
          placeholder="search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded text-sm"
        />
      </div>
      <InfiniteScroll
        dataLength={loadedCards.length}
        next={fetchMoreCards}
        hasMore={hasMore}
        loader={
          search ? (
            ""
          ) : (
            <div className="text-center text-gray-500">Loading...</div>
          )
        }
        endMessage={
          loadedCards.length === 0 && filteredCards.length === 0 ? (
            <div className="text-center text-gray-500">No cards available.</div>
          ) : (
            <div className="text-center text-gray-500">
              No more cards to load.
            </div>
          )
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {loadedCards.map((card) => (
            <div key={card.id}>
              <CardItem card={card} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomeClientPage;
