
export const cleanInputColor = (input) => {
    if (typeof input === 'object') {
        return `rgba(${input.r} ${input.g} ${input.b} / ${(input.a || 1)*100}% )`
    }
    if (typeof input === 'string') {
        const reg=/^#([0-9a-f]{3}){1,2}$/i;
        if(input.length > 9) {
            return  reg.test(input) ? input.trim() : "#1677ff"
        }
    }
}