import { Alert, Platform } from 'react-native'


const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://10.0.2.2:3000' 

function showError(err) {
    if (err.response && err.response.data) {
        console.log('err1', err.response.data)
        Alert.alert('ops! Ocorreu um problema!', `Mensagem: ${err.response}`)
    } else {
        console.log('err2', err)
        Alert.alert('ops! Ocorreu um problema!', `Mensagem: ${err}`)
    }
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess}