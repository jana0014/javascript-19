class Product {
    name
    price

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ShoppingCart {
    #products
    #budget

    constructor(products, budget) {
        this.#products = products
        this.#budget = budget
    }

    addItem(newProduct) {
        const newList = [...this.#products, newProduct]
        const totalPrice = newList.reduce((sum, currentProduct) => {return sum += currentProduct.price}, 0)
        if(totalPrice > this.#budget) {
            console.log('Budget has been reached, please remove some items in order to add more.')
            return
        }

        this.#products = newList
    }

    getItems() {
        return this.#products
    }

    removeItem(productName) {
        this.#products = this.#products.filter(product => product.name !== productName)
    }
}

const Cart = new ShoppingCart([], 1000)
const Banana = new ShoppingCart('Banana', 10)
const Orange = new ShoppingCart('Orange', 20)
const Milk = new ShoppingCart('Milk', 40)
const Bread = new ShoppingCart('Bread', 20)
const Wine = new ShoppingCart('Wine', 1000)

Cart.removeItem('Bread')
Cart.addItem(Banana)
Cart.addItem(Orange)
Cart.addItem(Milk)
Cart.addItem(Bread)
Cart.addItem(Wine)

console.log(Cart.getItems())
