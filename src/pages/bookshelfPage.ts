import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BookshelfPageLocators } from "../locators/bookshelfPageLocators";
export default class bookShelf {
    private readonly bookshelfHeadingLocator = '.a-text-center.bookshelf-header';
    private readonly bookshelfHeadingtext = 'Create. Manage. Publish.';
    private readonly bookshelfText = 'Bookshelf';
    private readonly pText = 'Reach readers in the format they want. Publish an eBook, paperback, hardcover, or series.';
    private readonly newToKdpText = 'New to KDP? Learn more about our resources to help you get started:';
    private readonly helpLinkText = 'How to create a book';
    private readonly helpLink = '/help/topic/G202172740';
    private readonly bookTimelineText = 'Book timelines';
    private readonly bookTimelineLink = 'help/topic/G202173620';
    private readonly createNewBtn = '#a-autoid-0-announce';
    private readonly whatWouldYouLikeToPublishTxt = 'What would you like to create?';

    constructor(private page: Page) {}

    async verifyBookshelfPageIsLoaded(){
        await expect(this.page.getByText(this.bookshelfHeadingtext)).toBeVisible();
    }

    async verifyBookShelfTextVisible(){
        await expect(this.page.locator('h2')).toHaveText(this.bookshelfText);
        await expect(this.page.locator('h2')).toBeVisible();
        await expect(this.page.getByText(this.pText)).toBeVisible();
        await expect(this.page.getByText(this.newToKdpText)).toBeVisible();
        await expect(this.page.getByText(this.helpLinkText)).toBeVisible();
        //await expect(this.page.locator('a')).toHaveAttribute('href', this.helpLink);
        await expect(this.page.getByText(this.bookTimelineText)).toBeVisible();
        //await expect(this.page.locator('a')).toHaveAttribute('href',this.bookTimelineLink);
    }

    async clickCreateNewTitle(){
        await expect(this.page.getByText('+ Create new title or series')).toBeVisible();
        await this.page.locator(this.createNewBtn).click();
        await expect(this.page.getByText(this.whatWouldYouLikeToPublishTxt)).toBeVisible();
    }

    async checkLinkNavigation(){
        const [childPage] = await Promise.all([this.page.context().waitForEvent('page'),this.page.getByText(this.helpLinkText).click({ button: 'right' }) ]);
        await childPage.waitForLoadState();
        await childPage.click('#help-topic-crumb-G202172740');
        await expect(childPage).toHaveURL(this.helpLink);
        await this.page.bringToFront();
        await expect(this.page).toHaveURL(/en_US\/bookshelf/);
    }

    async searchATitle(bookTitle: string){
        await this.page.locator(BookshelfPageLocators.searchBook).fill(bookTitle);
        await this.page.locator(BookshelfPageLocators.searchButton).click();
    }

    async ellipsisButton(bookId: string) {
    return this.page.locator(
      `#zme-indie-bookshelf-dual-print-actions-draft-book-actions-${bookId}-other-actions`
    );
    }

    async editContent(titleId: string){
        return this.page.locator(`#print_edit_content-${titleId}`);
    }




}







