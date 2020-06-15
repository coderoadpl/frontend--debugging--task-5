try {
    const x = 2
    x++
} catch (error) {
    if (error.name === 'ReferenceError') {
        console.error('Do not use vars without declaration!')
    } else {
        console.error(error)
    }
} finally {
    console.log('Always')
}

try {
    throw new Error('My error')
} catch (error) {
    if (error.name === 'Error') {
        console.error(error)
    }
}

console.log('The script goes on')