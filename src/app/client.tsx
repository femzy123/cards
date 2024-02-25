"use client"

import CardItem from "@/components/CardItem"
import { useState } from "react"

type Props = {
  cards : Card[]
}

const HomeClientPage = ({cards}: Props) => {
  const [search, setSearch] = useState("")

  const filteredList = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="py-10 px-20">
      <CardItem card={cards[0]} />
    </div>
  )
}

export default HomeClientPage;