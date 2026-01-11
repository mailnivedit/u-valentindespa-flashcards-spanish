import { useNavigate, useLocation } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

// Extract unique categories from the flashcards data
const categories = Array.from(new Set(flashcards.map(card => card.category)));

export default function CategorySelectionPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine mode from current path (e.g., "/study" or "/quiz")
  // If the component is used at "/study", mode is "study"
  const mode = location.pathname.includes('quiz') ? 'quiz' : 'study';

  const handleCategoryClick = (category: string) => {
    navigate(`/${mode}/${category}`);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Select a Category</h1>
      <p>Choose a topic to start {mode === 'study' ? 'learning' : 'quizzing'}.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-${mode}`}
            onClick={() => handleCategoryClick(category)}
            style={{ textTransform: 'capitalize' }}
          >
            {category}
          </button>
        ))}
      </div>
      
      <button 
        className="btn" 
        onClick={() => navigate('/')}
        style={{ marginTop: '2rem', backgroundColor: '#6b7280' }}
      >
        Back to Home
      </button>
    </div>
  );
}
