import { Page } from "@playwright/test";

export default class preLogin{
 private readonly signInBtn = 'div>a.link.button.button-size-medium.button-type-tertiary.button-theme-square.button-type-tertiary-light.font-size-small.ember';
 private readonly joinKDPBtn = 'div.align-center>a.link.button.button-size-medium.button-type-secondary.button-theme-square.button-type-secondary-light.font-size-small.ember';

   constructor(private page: Page) {}

  async clickSignInButton() {
    await this.page.locator(this.signInBtn).click();
  }

  async navigateToPreLoginPage(){
    await this.page.goto('https://kdp.amazon.com/en_US/');
  }

  
}