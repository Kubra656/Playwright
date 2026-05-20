import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { CreateNewTitleText } from "../constants/createNewTitleText";
import { createNewTitleLocators } from "../locators/createNewTitleLocators";

export default class createNewTitle {

    constructor(private page:Page){}

    async clickCreatePaperback(){
        await expect(this.page.getByText(CreateNewTitleText.CREATE_PAPERBACK)).toBeVisible();
        await this.page.locator(createNewTitleLocators.CREATE_PAPERBACK_BUTTON).click();
        await expect(this.page).toHaveURL(/paperback\/new\/details/);
    }
}