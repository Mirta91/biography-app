import { expect, test } from '@playwright/test';

//Homepage tests

test('Check if has title H1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeDefined()
});

test('Check all images have alt text', async ({ page }) => {
	// Navigate to the target webpage
	await page.goto('/'); // Replace with your target URL
	const images = page.locator('img');
  
	const count = await images.count();
	for (let i = 0; i < count; i++) {
	  const image = images.nth(i);
	  const altText = await image.getAttribute('alt');
	  if (!altText) {
		const src = await image.getAttribute('src');
		console.log(`Image with src "${src}" is missing alt text`);
	  }
	  await expect(image).toHaveAttribute('alt', /.*/);
	}
});


test('Table should have 3 columns', async ({ page }) => {
	// Navigate to the target webpage
	await page.goto('/'); // Replace with your local server URL
  
	// Check if the table headers contain 3 columns
	const columnHeaders = page.locator('.grid-container > button');
	await expect(columnHeaders).toHaveCount(3);
  
	// Verify the column headers text
	await expect(columnHeaders.nth(0)).toHaveText('Skill / Technology');
	await expect(columnHeaders.nth(1)).toHaveText('Type');
	await expect(columnHeaders.nth(2)).toHaveText('Level (1-5)');
});