function isValidField(field, filedLength) {
    return field.trim().length >= filedLength
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

function isValidConfirm(field1, field2) {
    return field1 === field2
}

function msgError(fieldType, fieldLength) {
    switch (fieldType) {
        case 'txt':
            return `Informar no mínimo ${fieldLength} caracteres!`;
        default:
            return `Campo com preenchimento inválido!`;
    }
}

export { msgError, isValidConfirm, isValidEmail, isValidField}