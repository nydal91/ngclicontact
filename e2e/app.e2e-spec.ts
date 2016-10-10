import { YodaPage } from './app.po';

describe('yoda App', function() {
  let page: YodaPage;

  beforeEach(() => {
    page = new YodaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
