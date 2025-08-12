import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveUI from "./ResponsiveUI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ResponsiveUI />
    </ChakraProvider>
  </React.StrictMode>
);
