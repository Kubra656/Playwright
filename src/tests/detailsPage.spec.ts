import test from "@playwright/test";
import signIn from "../pages/signIn";
import bookShelf from "../pages/bookshelfPage";
import createNewTitle from "../pages/createNewPage";
import detailsPage from "../pages/detailsPage";

import detailspageData from '../data/detailspageData.json';

let BookShelf : bookShelf;
let CreateNew : createNewTitle;
let DetailsPage : detailsPage;

type TestData = {
     Book1:{
        Title : string,
        Author_name : string,
        Description : string,
        Categories : string
    },

    Book2:{
        Title : string,
        Author_name : string,
        Description : string,
        Categories : string
    }
}
const typedTestData = detailspageData as TestData;
for (const dataSet in typedTestData) {
    const Book = typedTestData[dataSet as keyof TestData];
    

test.describe('Details Page tests', ()=>{
    test.beforeEach(async ({page})=>{
        const SignIn = new signIn(page);
        await SignIn.goToKdp();
        await SignIn.enterEmailId(process.env.userid!);
        await SignIn.enterPassword(process.env.password!);
        BookShelf = new bookShelf(page);
        await BookShelf.verifyBookshelfPageIsLoaded();
        await BookShelf.clickCreateNewTitle();
        CreateNew = new createNewTitle(page);
        await CreateNew.clickCreatePaperback();  
    })

    test.only(`Fill in Details page : ${Book.Title}`, async({page})=>{
        DetailsPage = new detailsPage(page);
        await DetailsPage.fillDetailsPage(Book.Title, Book.Author_name, Book.Description,Book.Categories);
    })
})

}