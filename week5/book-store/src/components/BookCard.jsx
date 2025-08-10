import { Box, Text, Button, Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleRead, deleteBook } from "../features/books/booksSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <Box border="1px" borderRadius="md" p={4}>
      <Text fontWeight="bold">{book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Genre: {book.genre}</Text>
      <Checkbox
        isChecked={book.isRead}
        onChange={() => dispatch(toggleRead(book.id))}
      >
        Read
      </Checkbox>
      <Button colorScheme="red" mt={2} onClick={() => dispatch(deleteBook(book.id))}>
        Delete
      </Button>
    </Box>
  );
};

export default BookCard;
