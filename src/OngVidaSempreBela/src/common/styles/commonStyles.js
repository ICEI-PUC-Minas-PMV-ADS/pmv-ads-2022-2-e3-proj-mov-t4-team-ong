import { StyleSheet } from "react-native"

const commonStyles = StyleSheet.create({
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    containerBackground: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    containerImage: {
        flex: 3,
    },
    containerScreen: {
        flex: 11,
        height: '100%'
    },
    dateDisplay: {
        fontSize: 18,
        margin: 15,
    },
    iconAlign: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
    },
    iconImage: {
        fontSize: 35,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        margin: 10,
    },
    textAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleAlign: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})

export default commonStyles