
export const cleanInputColor = (input) => {
    if (typeof input === 'object') {
        return `rgba(${input.r} ${input.g} ${input.b} / ${(input.a || 1)*100}% )`
    }
    if (typeof input === 'string') {
        return input.trim()
    }
}