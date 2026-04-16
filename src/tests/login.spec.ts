import { test, expect } from '@playwright/test';
import signIn from '../pages/signIn';
import bookShelf from '../pages/bookshelfPage';

test('Login to KDP', async ({ page }) => {
  const SignIn = new signIn(page);
  await SignIn.goToKdp();
  //await SignIn.enterEmailId('sakeenathulkubrak@gmail.com');
  //await SignIn.enterPassword('testtest');
  await SignIn.enterEmailId(process.env.userid!);
  await SignIn.enterPassword(process.env.password!);
  //await SignIn.enterEmailId('sakeenathulkubrak@gmail.com');
  //await SignIn.enterPassword('testtest');
  await SignIn.enterEmailId(process.env.userid!);
  await SignIn.enterPassword(process.env.password!);
  const BookShelf = new bookShelf(page);
  await BookShelf.verifyBookshelfPageIsLoaded();
});

test.skip('Login using dotenv', async({page}) =>{

  console.log(process.env.NODE_ENV);
  console.log(process.env.userid);
  console.log(process.env.password);
})

test('Verify the UI of login page', async ({page})=>{
  const SignIn = new signIn(page);
  await SignIn.goToKdp();
  await SignIn.checkUI();
})