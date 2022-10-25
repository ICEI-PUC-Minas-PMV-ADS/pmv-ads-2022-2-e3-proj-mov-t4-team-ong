import { Alert, Platform } from 'react-native'

const server = Platform.os === 'ios'
    ? 'http://localhost:3000' : 'http://10.0.2.2:300'

function showError(err) {
    Alert.alert('ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSucess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSucess }