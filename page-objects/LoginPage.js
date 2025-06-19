export class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameField = page.getByLabel('Username');
        this.passwordField = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.successMessage = page.locator('.flash.success');
        this.invalidMessage = page.locator('.flash.error')
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async visit(){
        await this.page.goto('/login');
    }

    async fillCredentials(username, password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async getSuccessMessage(){
        return this.successMessage;
    }

    async getInvalidMessage(){
        return this.invalidMessage;
    }

    async clickLogoutButton(){
        await this.logoutButton.click();
    }
}
    