import { Page } from "@playwright/test";
import preLogin from "./preLogin";

export default class signIn {
    private readonly emailidInput = '#ap_email';
    private readonly continueBtn = 'input#continue';
    private readonly passwordInput = '#ap_password';
    private readonly signInBtn = '#auth-signin-button';

    constructor(private page: Page) {}

    async enterEmailId(username: string){
        await this.page.locator(this.emailidInput).fill(username);
        await this.page.locator(this.continueBtn).click();
    }

    async enterPassword(password: string){
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.signInBtn).click();
    }

    async goToKdp(){
        const PreLogin = new preLogin(this.page);
        await PreLogin.navigateToPreLoginPage();
        await PreLogin.clickSignInButton();
    }
}