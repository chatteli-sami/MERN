import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
