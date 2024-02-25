# Cards
This is an app that lists cards with infinite scrolling and search functionality. It was built using Nextjs 14 latest features like App Router and Server Actions. [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) library was using to handle the Infinite scroll functionality.

## Components

- **HomeClientPage:** Main component responsible for managing state, data fetching, and rendering card items.
- **CardItem:** Represents an individual card with its visual presentation.

## Features

- **Infinite Scrolling:** Automatically fetches more cards as the user scrolls near the bottom of the list.
- **Search:** Filters cards based on user input in the search field.
- **Loading Indicator:** Displays "Loading..." while fetching additional cards.

## Implementation Details

- Uses React hooks for state management:
    - `useState` for search string, filtered cards, loaded cards, and hasMore flag.
    - `useEffect` for applying initial search filter and fetching initial cards.
- Employs `react-infinite-scroll-component` for infinite scrolling functionality.
- Introduces a 500ms delay to simulate network requests when fetching more cards.

## Additional Notes

- API route should support pagination.

## Getting Started

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

https://cards-pearl-seven.vercel.app/
