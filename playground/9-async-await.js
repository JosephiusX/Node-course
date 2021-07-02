const add = (a, b ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

const doWork = async() => {
    const sum = await add(1, -99) // getting access to the value that the promise is fufilled with
    const sum2 = await add(sum, 50) // ech time i await the function above it adds 2 seconds to the wait time
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e',e)
})