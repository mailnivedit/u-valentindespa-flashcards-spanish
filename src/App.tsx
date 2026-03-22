import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategorySelectionPage from './pages/CategorySelectionPage';
import Study from './pages/Study';
// Quiz page component reserved for future dedicated quiz UI (see TODO Phase 4).
// Category selection for quiz currently uses CategorySelectionPage at /quiz.
import Stats from './pages/Stats';
import './App.css';

/**
 * Root route table. Study and Quiz both use CategorySelectionPage first;
 * only /study/:category mounts the flashcard Study flow.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study" element={<CategorySelectionPage />} />
      <Route path="/study/:category" element={<Study />} />
      <Route path="/quiz" element={<CategorySelectionPage />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}

export default App;
