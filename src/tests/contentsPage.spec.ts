import test from "@playwright/test";
import signIn from "../pages/signIn";
import bookShelf from "../pages/bookshelfPage";
import contentsPage from "../pages/contentsPage";

let BookShelf : bookShelf; 
let ContentPage : contentsPage;

test.describe('Content Page Tests', ()=>{
    test.beforeEach(async ({page})=>{
        const SignIn = new signIn(page);
        await SignIn.goToKdp();
        await SignIn.enterEmailId(process.env.userid!);
        await SignIn.enterPassword(process.env.password!);
        BookShelf = new bookShelf(page);
        await BookShelf.searchATitle('My Life, My Rules');
        (await BookShelf.ellipsisButton('07DFMNPB2ZJ')).click();
        (await BookShelf.editContent('6NRD111VR7H')).click();
        
    })

    test('Check whether ISBN section is present and check its UI', async({page})=>{
        ContentPage = new contentsPage(page);
        await ContentPage.checkUIforIsbn();
        
    })

})