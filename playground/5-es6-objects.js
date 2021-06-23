// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// destructuring
// const { label:productLabel, stock } = product // same result as 2 lines above
// // finds variables in product obj with corrisponding names
// console.log(stock)
// console.log(productLabel, stock)

const transaction = (type, {label, stock}) => { // if we know the arg is a object we cam destructure it right in line
    console.log(type, label, stock)
}

transaction('order', product)