export interface Flashcard {
  id: string;
  category: 'animals' | 'food' | 'verbs';
  spanish: string;
  english: string;
  quiz: {
    type: 'multiple-choice' | 'fill-in-the-blank';
    options?: string[];
  };
}

export const flashcards: Flashcard[] = [
  // Animals
  {
    id: 'a1',
    category: 'animals',
    spanish: 'el gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the cat', 'the bird', 'the mouse']
    }
  },
  {
    id: 'a2',
    category: 'animals',
    spanish: 'el perro',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the dog', 'the cow', 'the pig']
    }
  },
  {
    id: 'a3',
    category: 'animals',
    spanish: 'el pájaro',
    english: 'the bird',
    quiz: {
      type: 'multiple-choice',
      options: ['the bird', 'the fish', 'the horse', 'the lion']
    }
  },
  // Food
  {
    id: 'f1',
    category: 'food',
    spanish: 'la manzana',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the banana', 'the orange', 'the apple', 'the grape']
    }
  },
  {
    id: 'f2',
    category: 'food',
    spanish: 'el pan',
    english: 'the bread',
    quiz: {
      type: 'multiple-choice',
      options: ['the bread', 'the milk', 'the cheese', 'the water']
    }
  },
  {
    id: 'f3',
    category: 'food',
    spanish: 'la leche',
    english: 'the milk',
    quiz: {
      type: 'multiple-choice',
      options: ['the juice', 'the coffee', 'the milk', 'the tea']
    }
  },
  // Verbs
  {
    id: 'v1',
    category: 'verbs',
    spanish: 'hablar',
    english: 'to speak',
    quiz: {
      type: 'fill-in-the-blank'
    }
  },
  {
    id: 'v2',
    category: 'verbs',
    spanish: 'comer',
    english: 'to eat',
    quiz: {
      type: 'fill-in-the-blank'
    }
  },
  {
    id: 'v3',
    category: 'verbs',
    spanish: 'vivir',
    english: 'to live',
    quiz: {
      type: 'fill-in-the-blank'
    }
  }
];
