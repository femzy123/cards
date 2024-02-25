/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'

type Props = {
  card: Card;
}

const CardItem = ({card}: Props) => {
  return (
    <div className="max-w-[200px] border border-gray-300 rounded-sm py-2 hover:shadow-lg">
      <div className="px-2 space-y-2">
        <img src={card.imageUrl} alt="image" width="200px" />
        <h3 className="text-[16px] font-semibold">{card.name}</h3>
        <p className="text-xs">{card.text}</p>
      </div>
      <hr className="my-2 border border-gray-200" />
      <p className="px-2 text-xs font-semibold">{card.types[0]}</p>
      <hr className="my-2 border border-gray-200" />
      <p className="px-2 text-xs font-semibold">{card.rarity}</p>
    </div>
  );
}

export default CardItem