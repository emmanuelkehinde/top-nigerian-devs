import { TopNigerianDevsPage } from './app.po';

describe('top-nigerian-devs App', () => {
  let page: TopNigerianDevsPage;

  beforeEach(() => {
    page = new TopNigerianDevsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
