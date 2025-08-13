import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, fetchQuestions, submitAnswer, skipQuestion, resetQuiz } from "./redux/actions";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";

export default function App() {
  const dispatch = useDispatch();

  // Auth state
  const token = useSelector((state) => state.auth.token);
  const authError = useSelector((state) => state.auth.error);

  // Quiz state
  const { loading, questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);

  // Local login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login submit handler
  const handleLogin = () => {
    dispatch(loginUser(email, password));
  };

  // Fetch questions after login
  useEffect(() => {
    if (token) dispatch(fetchQuestions());
  }, [token, dispatch]);

  if (!token) {
    return (
      <Box p={6} maxW="400px" mx="auto" mt="10">
        <VStack spacing={4}>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          {authError && <Text color="red.500">{authError}</Text>}
          <Text>Use email: eve.holt@reqres.in and any password</Text>
        </VStack>
      </Box>
    );
  }

  if (loading) return <Text p={6}>Loading questions...</Text>;

  if (questions.length === 0) return <Text p={6}>No questions found.</Text>;

  if (currentQuestionIndex >= questions.length)
    return (
      <Box p={6} textAlign="center">
        <Text fontSize="xl" mb={4}>
          Quiz Finished! Your score is {score} / {questions.length}
        </Text>
        <Button onClick={() => dispatch(resetQuiz())}>Restart Quiz</Button>
      </Box>
    );

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect) => {
    dispatch(submitAnswer(isCorrect));
  };

  return (
    <Box p={6} maxW="600px" mx="auto">
      <Text fontWeight="bold" mb={2}>
        Question {currentQuestionIndex + 1} / {questions.length}
      </Text>
      <Text mb={4}>{currentQuestion.question}</Text>
      <VStack spacing={3} align="stretch">
        {currentQuestion.options.map((option, i) => (
          <Button
            key={i}
            onClick={() => handleAnswer(option === currentQuestion.correctAnswer)}
          >
            {option}
          </Button>
        ))}
        <Button variant="outline" onClick={() => dispatch(skipQuestion())}>
          Skip
        </Button>
      </VStack>
      <Text mt={4}>Score: {score}</Text>
    </Box>
  );
}
