import { expect } from '@playwright/test';
import { ProductPage } from '../../pages/product-page';
import { HeaderPage } from '../../pages/header-page';
import Tag from '../../support/tag';
import { SearchPage } from '../../pages/search-page';
import { fixtures as test } from '../../fixture';

test.describe('Product page', () => {
  let productPage: ProductPage;
  let headerPage: HeaderPage;
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    headerPage = new HeaderPage(page);
    searchPage = new SearchPage(page);
  });

  test(`Add product to cart from search input ${Tag.TAG_SECTION}${Tag.WEBAPP}${Tag.ALL}${Tag.SMOKE_TEST}`, async ({
    page,
    baseURL,
  }) => {
    const searchProduct = 'Raven Airborne Split MX Helmet Kit Black-Gray';
    await page.goto(baseURL!);
    await headerPage.mobileSearchInput.fill(searchProduct);
    await page.keyboard.press('Enter');
    await searchPage.productTitle.filter({ hasText: searchProduct }).click();
    await productPage.sizeSelect.click();
    await productPage.productSize.first().click();
    await productPage.addToCart.click();
    await expect(productPage.addToCartMsg).toBeInViewport();
  });
});
