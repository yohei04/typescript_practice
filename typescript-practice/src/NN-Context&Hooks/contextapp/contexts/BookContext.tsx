import React, { useState, createContext } from 'react';

interface BookContextProps { }

interface Books {
  title: string
  id: number
}

const initialBooks = [
  { title: 'name of the wind', id: 1 },
  { title: 'the way of kings', id: 2 },
  { title: 'the final empire', id: 3 },
  { title: 'the hero of ages', id: 4 },
];

// export const BookContext: Books[] = createContext();

const BookContext: React.FC<BookContextProps> = ({children}) => {
  const [books, setBooks] = useState(initialBooks);
  return (
    <>
      {/* <BookContext.Provider value={ books }>{children}</BookContext.Provider> */}
    </>
  );
};
export default BookContext;
