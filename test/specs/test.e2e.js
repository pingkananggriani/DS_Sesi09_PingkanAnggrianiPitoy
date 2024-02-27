const LoginPage = require('../pageobjects/login.page')
const homePage = require('../pageobjects/home.page')

describe('Swag Labs', () => {
//LOGIN
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validatehomePage()
    })

    it('should get login error with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })

    it('should get login error with problem_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validatehomePageProblemUser() 
    })

    it('should get login error with performance_glitch_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PERFORMANCE, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validatehomePageGlitch()
            
    })

    it('should get login error with error_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_ERROR_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validatehomePageError()
    })

    it('should get login error with visual_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_VISUAL, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validatehomePageVisual()
    })
})