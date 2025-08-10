import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  Text,
  HStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <List spacing={3}>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <HStack justify="space-between">
            <Checkbox
              isChecked={todo.status}
              onChange={() => dispatch(toggleTodo(todo.id))}
            >
              <Text as={todo.status ? 's' : ''}>{todo.title}</Text>
            </Checkbox>
            <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              size="sm"
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
