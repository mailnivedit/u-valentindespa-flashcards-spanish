import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

/**
 * Component displayed when the requested category does not exist or has no cards.
 */
function CategoryNotFound({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Category Not Found</h1>
      <button className="btn" onClick={onBack}>
        Back to Categories
      </button>
    </div>
  );
}

/**
 * Component displayed when the study session is finished.
 */
function StudySessionComplete({ 
  wrongCount, 
  onRestart, 
  onBack 
}: { 
  wrongCount: number; 
  onRestart: () => void; 
  onBack: () => void; 
}) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Session Complete!</h1>
      <p>You have reviewed all cards in this category.</p>
      <p>Wrong answers: {wrongCount}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' }}>
        <button className="btn btn-study" onClick={onRestart}>
          Restart Session
        </button>
        <button className="btn" onClick={onBack}>
          Back to Categories
        </button>
      </div>
    </div>
  );
}

/**
 * Main Study Page component.
 * Handles the logic for iterating through flashcards, tracking results,
 * and managing the study session state.
 */
export default function Study() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Filter cards for the selected category
  const categoryCards = flashcards.filter(card => card.category === category);

  // Handle invalid category
  if (categoryCards.length === 0) {
    return <CategoryNotFound onBack={() => navigate('/study')} />;
  }

  /**
   * Handles the user's input (Right/Wrong) for the current card.
   * Updates tracking state and advances to the next card.
   * @param result - 'right' or 'wrong'
   */
  const handleCardResult = (result: 'right' | 'wrong') => {
    if (result === 'wrong') {
      setWrongAnswers(prev => [...prev, categoryCards[currentIndex].id]);
    }

    if (currentIndex < categoryCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setIsFinished(true);
    }
  };

  /**
   * Resets the session state to start over with the same category.
   */
  const restartSession = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setWrongAnswers([]);
    setIsFinished(false);
  };

  // Render Completion Screen
  if (isFinished) {
    return (
      <StudySessionComplete 
        wrongCount={wrongAnswers.length} 
        onRestart={restartSession} 
        onBack={() => navigate('/study')} 
      />
    );
  }

  const currentCard = categoryCards[currentIndex];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Studying: {category}</h1>
      <p>Card {currentIndex + 1} of {categoryCards.length}</p>
      
      <Flashcard 
        card={currentCard} 
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />
      
      {isFlipped ? (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button 
            className="btn" 
            style={{ backgroundColor: '#ef4444', maxWidth: '150px' }}
            onClick={(e) => {
              e.stopPropagation();
              handleCardResult('wrong');
            }}
          >
            ❌ Wrong
          </button>
          <button 
            className="btn" 
            style={{ backgroundColor: '#22c55e', maxWidth: '150px' }}
            onClick={(e) => {
              e.stopPropagation();
              handleCardResult('right');
            }}
          >
            ✅ Right
          </button>
        </div>
      ) : (
        <div style={{ marginTop: '2rem', height: '52px' }}>
          {/* Placeholder to prevent layout jump */}
          <p style={{ color: '#666' }}>Tap card to flip</p>
        </div>
      )}

      <div style={{ marginTop: '3rem' }}>
        <button className="btn" style={{ backgroundColor: '#6b7280', maxWidth: '200px' }} onClick={() => navigate('/study')}>
          Back to Categories
        </button>
      </div>
    </div>
  );
}
