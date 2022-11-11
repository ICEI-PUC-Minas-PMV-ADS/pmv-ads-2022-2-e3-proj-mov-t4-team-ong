import { StyleSheet } from "react-native"

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerBackground: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        margin: 10,
    },
    containerImage: {
        flex: 4,
    },
    containerScreen: {
        flex: 11,
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginBottom: 10,
        paddingHorizontal: 25,

    },

    iconAlign: {
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        marginTo: Platform.OS === 'ios' ? 40 : 10,
    },
    iconImage: {
        color: 'white',
        fontSize: 35,
    },



    titleLarge: {
        fontFamily: 'Lato',
        fontSize: 50,
        color: 'white',
        marginLeft: 15,
        marginBottom: 10,
    },




    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },


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



    subtitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 15,
    },
    titleAlign: {
        flex: 1,
        justifyContent: 'flex-end',
    },


    backgroundOverlay: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default commonStyles