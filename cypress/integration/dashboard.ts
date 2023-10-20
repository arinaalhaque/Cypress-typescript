import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test Sauce Demo Sauce labs add item', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addItemToCart() 
    dashboardPage.assertItemCart()
    dashboardPage.removeItemCart()
    dashboardPage.assertRemoveItem()
})
