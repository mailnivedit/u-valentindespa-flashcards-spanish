import { test, expect } from '@playwright/test';

test.describe('Spanish Flashcards App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Home page should have correct title and navigation buttons', async ({ page }) => {
    await expect(page).toHaveTitle(/Spanish Flashcards/);
    await expect(page.getByRole('heading', { name: 'Spanish Flashcards' })).toBeVisible();
    
    await expect(page.getByRole('button', { name: 'Study Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Quiz Mode' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Stats' })).toBeVisible();
  });

  test('Study Mode flow', async ({ page }) => {
    // 1. Navigate to Study Mode
    await page.getByRole('button', { name: 'Study Mode' }).click();
    await expect(page).toHaveURL('/study');
    await expect(page.getByRole('heading', { name: 'Select a Category' })).toBeVisible();

    // 2. Select 'animals' category
    await page.getByRole('button', { name: 'animals' }).click();
    await expect(page).toHaveURL('/study/animals');
    await expect(page.getByRole('heading', { name: 'Studying: animals' })).toBeVisible();

    // 3. Check first card (Front)
    // Assuming first card is "el gato" based on data
    await expect(page.getByRole('heading', { name: 'el gato' })).toBeVisible();
    await expect(page.getByText('Tap to see meaning')).toBeVisible();
    
    // Buttons should NOT be visible yet
    await expect(page.getByRole('button', { name: '✅ Right' })).not.toBeVisible();

    // 4. Flip the card
    await page.locator('.flashcard-container').click();
    
    // 5. Check back of card
    await expect(page.getByRole('heading', { name: 'the cat' })).toBeVisible();
    
    // 6. Check buttons are visible
    await expect(page.getByRole('button', { name: '✅ Right' })).toBeVisible();
    await expect(page.getByRole('button', { name: '❌ Wrong' })).toBeVisible();

    // 7. Mark as Right and move to next
    await page.getByRole('button', { name: '✅ Right' }).click();

    // 8. Check next card appears
    // Second card is "el perro"
    await expect(page.getByRole('heading', { name: 'el perro' })).toBeVisible();
    // Buttons should be hidden again
    await expect(page.getByRole('button', { name: '✅ Right' })).not.toBeVisible();

    // 9. Complete the session (3 cards total in animals)
    // Card 2: el perro -> flip -> Right
    await page.locator('.flashcard-container').click();
    await page.getByRole('button', { name: '✅ Right' }).click();

    // Card 3: el pájaro -> flip -> Wrong
    await expect(page.getByRole('heading', { name: 'el pájaro' })).toBeVisible();
    await page.locator('.flashcard-container').click();
    await page.getByRole('button', { name: '❌ Wrong' }).click();

    // 10. Check completion screen
    await expect(page.getByRole('heading', { name: 'Session Complete!' })).toBeVisible();
    await expect(page.getByText('Wrong answers: 1')).toBeVisible();
    
    await expect(page.getByRole('button', { name: 'Restart Session' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back to Categories' })).toBeVisible();
  });
});
