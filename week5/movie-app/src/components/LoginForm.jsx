import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { Box, Input, Button, Heading } from '@chakra-ui/react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (name && email) {
      dispatch(login({ name, email }));
      alert('Logged in successfully!');
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="50px" p="4" borderWidth="1px" borderRadius="md">
      <Heading size="md" mb="4">Login</Heading>
      <Input
        placeholder="Name"
        mb="3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        mb="3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
