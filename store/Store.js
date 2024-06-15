
export class Store {
    #products;
    #customers;
    #orders;
    constructor() {
        this.#products = new Map();
        this.#customers = new Map();
        this.#orders = new Set();
    }
    addProduct(productId, name, price, stock) {
        if (this.#products.has(productId)) {
            console.log(`product with id ${productId} already exist!`);
        }
        else {
            this.#products.set(productId, { name, price, stock });
            console.log(`product ${name} added`);
        }
    }
    removeProduct(productId) {
        if (this.#products.has(productId)) {
            this.#products.delete(productId);
        }
        else {
            console.log(`product with id ${productId} not found`);
        }
    }
    updateProduct(productid, newDetails) {
        if (this.#products.has(productId)) {
            this.#products.set(productid, newDetails);
        }
        else {
            console.log(`product with id ${productId} not found`);
        }
    }
    listproducts() {
        if (this.#products.size > 0) {
            this.#products.forEach((product) => {
                console.log(`
        Id : ${product.productId} 
        Name : ${product.name}
        price : ${product.price}
        Stock : ${product.stock}
        `);
                console.log("--------------------------******-----------------------")
            })
        } else {
            console.log(`No product available!`);
        }
    }
    //Customet management
    addCustomer(customerId, name, email) {
        if (this.#customers.has(customerId)) {
            console.log(`customer with id ${customerId} already exist!`);
        }
        else {
            this.#customers.set(customerId, { name, email });
            console.log(`customer with id ${customerId} added`);
        }
    }
    removeCustomer(customerId) {
        if (this.#customers.has(customerId)) {
            this.#customers.delete(customerId);
        }
        else {
            console.log(`Customer with id ${customerId} not found!`);
        }
    }
    listCustomers() {
        if (this.#customers.size == 0) {
            console.log(`No customer record found`);
        }
        else {
            this.#customers.forEach(({ customerId, name, email }) => {
                console.log(`${customerId} | ${name} | ${email}`);
            })
        }
    }
    placeOrder(orderId, customerId, productIds) {
        if (this.#orders.has(orderId)) {
            console.log(`order with id ${orderId} already exist!`);
        }
        else if (!this.#customers.has(customerId)) {
            console.log(`Customer with id ${customerId} not found!`);
        }
        else {
            const orderProducts = productIds.filter((productId) => {//productId of my order
                return this.#products.has(productId);
            })
            if (orderProducts.length != productIds.length) {//productIds are actual products in my order cart + post filter order items
                console.log(`Some of the items in your order not found`);
            }
            else {
                this.#orders.add({ orderId, customerId, products: orderProducts, date: new Date() });
                console.log(`Order ${orderId} placed successfully!`);
            }

        }
    }

    listOrders() {
        if (this.#orders.size == 0) {
            console.log(`No order placed`);
        }
        else {
            this.#orders.forEach(({ orderId, customerId, products, date }) => {
                console.log(`
            Order ID : ${orderId} , Customer Id : ${customerId} , Products : ${products.join(', Date : ${date}')}
            `);
            })
        }
    }
    getproduct(productId) {
        return this.#products.get(productId);
    }
    getCustomer(customerId) {
        return this.#customers.get(customerId);
    }
    getOrder(orderId) {
        return this.#orders.get(orderId);
    }
}

