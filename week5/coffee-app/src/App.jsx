import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee } from "./coffeeSlice";
import {
  Box,
  Grid,
  Text,
  Select,
  Spinner,
  Heading,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.coffee);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(fetchCoffee(sortBy));
  }, [dispatch, sortBy]);

  return (
    <Flex p={5} gap={5}>
      <Box
        w={{ base: "100%", md: "200px" }}
        border="1px solid lightgray"
        p={4}
        borderRadius="md"
      >
        <Heading size="md" mb={4}>
          Sort Options
        </Heading>
        <Select
          placeholder="Sort by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </Select>
      </Box>

      <Box flex="1">
        {loading && (
          <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
        )}
        {error && <Text color="red.500">Error: {error}</Text>}

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
          mt={4}
        >
          {data.map((coffee) => (
            <Box
              key={coffee.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              boxShadow="md"
            >
              <Image
                src={coffee.image}
                alt={coffee.title}
                boxSize="150px"
                objectFit="cover"
                mx="auto"
                mb={4}
              />
              <VStack spacing={2} align="start">
                <Heading size="sm">{coffee.title}</Heading>
                <Text fontWeight="bold">${coffee.price}</Text>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
