import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Study from './pages/Study';
import Quiz from './pages/Quiz';
import Stats from './pages/Stats';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study" element={<Study />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}

export default App;
