/**
 * @file App.tsx
 * @description Main application file handling routing using React Router.
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Game from "./pages/Game";

/**
 * @function App
 * @description Defines application routes and handles navigation.
 * @returns {JSX.Element} React component with defined routes.
 */
const App : React.FC = () => {
  return (
    <Routes>
      {/* Define the landing page route */}
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
