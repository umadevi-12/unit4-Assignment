import { useSelector } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
import BookCard from "./components/BookCard";

const App = () => {
  const { list, filter } = useSelector((state) => state.books);

  const filteredBooks = list.filter((book) => {
    const matchesStatus =
      filter.status === "all" || (filter.status === "read" ? book.isRead : !book.isRead);
    const matchesAuthor = !filter.author || book.author.includes(filter.author);
    const matchesGenre = !filter.genre || book.genre.includes(filter.genre);
    return matchesStatus && matchesAuthor && matchesGenre;
  });

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </SimpleGrid>
  );
};

export default App;
