// const { $, expect } = require('@wdio/globals')
// const page = require('./page');

// class homePage extends page {
//     get iconCart () { return $('.shopping_cart_link'); }

//     async validatehomePage() {
//         await expect(browser).toHaveUrlContaining('/inventory.html')
//         await expect(this.iconCart).toBeDisplayed()
//     }


//     async validatehomePageProblemUser() {
//         expect(browser).toHaveUrlContaining('/inventory.html')
//         expect(this.iconDogImage).toBeDisplayed()  
//     }

//     async validatehomePageError(){
        
//     }
//     open () {
//         return super.open('/cart.html');
//     }
// }

// module.exports = new homePage();