import React from "react"

const ValidatorFields = (nameField, ValueField) => {


}

const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

const isValidName = (name) => {
    return name.trim().length >= 3
}

const isValidPassword = (password) => {
    return password.length >= 4
}

const isValidConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword
}

export { isValidEmail, isValidName, isValidPassword, isValidConfirmPassword }
