import { HomePage, LoginPage } from '../pages';

describe('Login', () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('should login with valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await HomePage.validate();
  });
});
