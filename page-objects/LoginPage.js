export class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameField = page.getByLabel('Username');
        this.passwordField = page.getByLabel('Password');
        this.userInfo = {
            username: "tomsmith",
            password: "SuperSecretPassword!"
        }
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async visit(){
        await this.page.goto('/login');
    }

    async fillCredentials(){
        await this.usernameField.fill(this.userInfo.username);
        await this.passwordField.fill(this.userInfo.password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}
    