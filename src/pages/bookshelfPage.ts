import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
export default class bookShelf {
    private readonly bookshelfHeadingLocator = '.a-text-center.bookshelf-header';
    private readonly bookshelfHeadingtext = 'Create. Manage. Publish.';

    constructor(private page: Page) {}
    async verifyBookshelfPageIsLoaded(){
        await expect(this.page.getByText(this.bookshelfHeadingtext)).toBeVisible();
    }
}