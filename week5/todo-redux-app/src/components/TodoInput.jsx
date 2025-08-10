import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { Input, Button, HStack } from '@chakra-ui/react';

function TodoInput() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() !== '') {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <HStack mb={4}>
      <Input
        placeholder="Enter todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleAdd}>
        Add
      </Button>
    </HStack>
  );
}

export default TodoInput;
