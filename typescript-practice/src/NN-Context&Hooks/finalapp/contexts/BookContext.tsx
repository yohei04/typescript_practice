import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Book, AddBook, RemoveBook } from '../types';

interface BookContextProps {
  books: Book[]
  addBook: AddBook
  removeBook: RemoveBook
}

export const BookContext = createContext({} as BookContextProps);

const BookContextProvider = (props: any) => {
  const [books, setBooks] = useState<Book[]>([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
  ]);
  const addBook: AddBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook: RemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
