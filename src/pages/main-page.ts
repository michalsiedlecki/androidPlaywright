import { Page } from "@playwright/test";

export default class MainPage {
  constructor(public readonly page: Page) {}
}
