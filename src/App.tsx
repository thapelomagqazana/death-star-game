import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import Game from "./pages/Game";
// import GameOver from "./pages/GameOver";
// import NotFound from "./pages/NotFound";

/**
 * Main Application Component
 *
 * - Sets up the React Router for page navigation.
 * - Ensures the animated starry background remains consistent.
 * - Defines all routes: Landing, Game, Game Over, and 404.
 */
const App = () => {
  return (
    <Router>
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Starry Background (Persistent across all pages) */}
        <div className="absolute inset-0 z-0">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        {/* Main Content: Routes */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/game" element={<Game />} />
            <Route path="/game-over" element={<GameOver />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
