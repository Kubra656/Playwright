import { Page } from "@playwright/test";
import { DetailsPageLocators } from "../locators/deatilsPageLocators";


export default class detailsPage {

    constructor(private page:Page){}

    async fillDetailsPage(titleName:string, lastName:string, description:string, categories:string){

        
        await this.page.locator(DetailsPageLocators.bookTitle).fill(titleName);
        await this.page.locator(DetailsPageLocators.authorLastName).fill(lastName);
        const editorFrame = this.page.frameLocator('.cke_wysiwyg_frame ');
        await editorFrame.locator('body').click();
        await editorFrame.locator('body').pressSequentially(description);
        await this.page.locator(DetailsPageLocators.nonPublicDomain).click();
        await this.page.locator(DetailsPageLocators.primaryAudienceNo).click();
        await this.page.locator(DetailsPageLocators.categoriesModalBtn).click();
        await this.page.locator(DetailsPageLocators.selectCategories).selectOption(categories);
        await this.page.locator(DetailsPageLocators.clickSaveCategory).click();
        await this.page.locator(DetailsPageLocators.clickSaveAndContinue).click();
    }
}