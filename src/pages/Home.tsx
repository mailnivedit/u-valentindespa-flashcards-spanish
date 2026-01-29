import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Spanish Flashcards</h1>
      <p>Choose a mode to start learning.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
        <Link to="/study">
          <button className="btn btn-study">Study Mode</button>
        </Link>
        <Link to="/quiz">
          <button className="btn btn-quiz">Quiz Mode</button>
        </Link>
        <Link to="/stats">
          <button className="btn btn-stats">Stats</button>
        </Link>
      </div>
    </div>
  );
}
