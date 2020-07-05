export type Book = {
  title: string;
  author: string;
  id: number | string;
};
export type AddBook = (title: string, author: string) => void;
export type RemoveBook = (id: number | string) => void;
