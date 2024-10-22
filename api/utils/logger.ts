const info = (...params: any[]): void => {
    console.log(...params)
}

const error = (...params: any[]): void => {
    console.error(...params)
}

export {
    info,
    error
}