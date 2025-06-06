import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Category from "./Pages/Category.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <Router>
      <Routes>
         <Route path="/" element={<App />}/>
        <Route path="/category/:categoryName" element={<Category />}>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
