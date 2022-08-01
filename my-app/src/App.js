import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
