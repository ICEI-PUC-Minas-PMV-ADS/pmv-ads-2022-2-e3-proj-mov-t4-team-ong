function isValidField(field, filedLength) {
    return field.trim().length >= filedLength
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

function isValidConfirm(field1, field2) {
    return field1 === field2
}

function msgError(field, fieldType, fieldLength) {
    console.log(field,fieldType, fieldLength)

    let msg = ''

    switch (fieldType) {
        case 'txt':
            return `${field} deve conter no mínimo ${fieldLength} caracteres!`;
        default:
            return `${field} com erro!`;
    }
}

export { msgError, isValidConfirm, isValidEmail, isValidField}