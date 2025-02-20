/**
 * @file App.tsx
 * @description Main application file handling routing using React Router.
 */
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

/**
 * @function App
 * @description Defines application routes and handles navigation.
 * @returns {JSX.Element} React component with defined routes.
 */
const App = (): JSX.Element => {
  return (
    <Routes>
      {/* Define the landing page route */}
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default App;
