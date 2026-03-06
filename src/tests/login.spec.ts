import { test, expect } from '@playwright/test';
import signIn from '../pages/signIn';
import bookShelf from '../pages/bookshelfPage';

test('Login to KDP', async ({ page }) => {
  const SignIn = new signIn(page);
  await SignIn.goToKdp();
  await SignIn.enterEmailId('sakeenathulkubrak@gmail.com');
  await SignIn.enterPassword('testtest');
  const BookShelf = new bookShelf(page);
  await BookShelf.verifyBookshelfPageIsLoaded();
});
