import type { Flashcard as FlashcardType } from '../data/flashcards';
import './Flashcard.css';

interface FlashcardProps {
  /** The flashcard data object containing Spanish/English text */
  card: FlashcardType;
  /** Whether the card is currently showing the back side */
  isFlipped: boolean;
  /** Callback function triggered when the card is clicked */
  onFlip: () => void;
}

/**
 * Renders a flip card component that shows the Spanish word on the front
 * and English translation on the back.
 */
export default function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div 
      className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} 
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onFlip();
        }
      }}
      aria-label={`Flashcard: ${isFlipped ? card.english : card.spanish}. Tap to flip.`}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h2>{card.spanish}</h2>
          <p className="hint">Tap to see meaning</p>
        </div>
        <div className="flashcard-back">
          <h2>{card.english}</h2>
        </div>
      </div>
    </div>
  );
}
