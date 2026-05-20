import test from "@playwright/test";
import signIn from "../pages/signIn";
import bookShelf from "../pages/bookshelfPage";

let BookShelf : bookShelf;

test.describe('Bookshelf tests',()=>{
    test.beforeEach(async ({ page }) =>{
        const SignIn = new signIn(page);
        await SignIn.goToKdp();
        await SignIn.enterEmailId(process.env.userid!);
        await SignIn.enterPassword(process.env.password!);
        BookShelf = new bookShelf(page);
        await BookShelf.verifyBookshelfPageIsLoaded();
    })

    test('Check UI of Bookshelf page', async () =>{
        await BookShelf.verifyBookshelfPageIsLoaded();
        await BookShelf.verifyBookShelfTextVisible();
    })

    test('Click create new title or series', async () =>{
        await BookShelf.clickCreateNewTitle();
    })

    test.only('Verify whether help links navigate properly', async() =>{
        await BookShelf.checkLinkNavigation();
    })

    
})