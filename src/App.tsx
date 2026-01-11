import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategorySelectionPage from './pages/CategorySelectionPage';
import Study from './pages/Study';
// import Quiz from './pages/Quiz';
import Stats from './pages/Stats';
import './App.css';

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
