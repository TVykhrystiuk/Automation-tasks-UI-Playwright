export const userInfo = {
    valid: {
        username: "tomsmith",
        password: "SuperSecretPassword!"
    },
    
    invalidUsername: {
        username: "name",
        password: "SuperSecretPassword!"
    },
    
    invalidPassword: {
        username: "tomsmith",
        password: "wrongPassword"
    },

    missingUsername: {
        username: "",
        password: "SuperSecretPassword!"
    }, 

    missingPassword: {
        username: "tomsmith",
        password: ""
    }
}