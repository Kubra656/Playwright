import { Page } from "@playwright/test";
import preLogin from "./preLogin";
import { expect } from "@playwright/test";

export default class signIn {
    private readonly emailidInput = '#ap_email';
    private readonly continueBtn = 'input#continue';
    private readonly passwordInput = '#ap_password';
    private readonly signInBtn = '#auth-signin-button';
    private readonly signInText = 'Sign in with your Amazon login';
    private readonly signInText1 ='If you are new to KDP, you can use an Amazon login to register. Just sign in with your existing Amazon login or create a new account.';
    private readonly enterMobileNumText = 'Enter mobile number or email';
    private readonly termsConditionsText = "By continuing, you agree to Amazon's Conditions of Use. You can find the privacy notice that applies to you here.";
    private readonly needHelpText = 'Need help?';
    private readonly newToKdpText = 'New to KDP?';
    private readonly createYourKdpAccount = 'Create your KDP account';
    private readonly createKdpAccountLocator = 'a#createAccountSubmit';

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

    async checkUI(){
        await expect(this.page.getByText(this.signInText)).toBeVisible();
        await expect(this.page.getByText(this.signInText1)).toBeVisible();
        await expect(this.page.getByText(this.enterMobileNumText)).toBeVisible();
        await expect(this.page.locator(this.continueBtn)).toBeVisible();
        await expect(this.page.locator(this.continueBtn)).toBeEnabled();
        await expect(this.page.getByText(this.termsConditionsText)).toBeVisible();
        await expect(this.page.getByText(this.needHelpText)).toBeVisible();
        await expect(this.page.getByText(this.newToKdpText)).toBeVisible();
        await expect(this.page.getByText(this.createYourKdpAccount)).toBeVisible();
        await expect(this.page.locator(this.createKdpAccountLocator)).toBeEnabled();
        await this.page.locator(this.createKdpAccountLocator).click();
        await expect(this.page.getByText('Create account')).toBeVisible();
    }
}