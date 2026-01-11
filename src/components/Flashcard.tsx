import type { Flashcard as FlashcardType } from '../data/flashcards';
import './Flashcard.css';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  return (
    <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
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
