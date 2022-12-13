// Write your solution here!
let cats = ['Milo', `Otis`, 'Garfield']


function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}   

function  destructivelyRemoveLastCat(name) {
    cats.pop(name)
}


function appendCat(name) {
    const nameOne = [...cats, name]
    return nameOne
}

function prependCat(name) {
    const nameTwo = [name, ...cats]
    return nameTwo
}

function removeLastCat() {
    const kittens = cats.slice(0, cats.length - 1)
    return kittens
}

function removeFirstCat() {
    const lions = cats.slice(1)
    return lions
}
