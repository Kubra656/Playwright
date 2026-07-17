import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { contentsPageConstants } from "../constants/contentsPage";
import { ContentPageLocators } from "../locators/contentPageLocators";

export default class contentsPage {
    constructor(private page: Page) {}

    async checkUIforIsbn(){
        await expect(this.page.locator(ContentPageLocators.ISBNHeading)).toBeVisible();
        await expect(this.page.getByText(contentsPageConstants.ISBNText)).toBeVisible();
    }
}