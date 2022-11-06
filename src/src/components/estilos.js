import React from "react";
import { StyleSheet, Platform,StatusBar } from "react-native";

const Estilos = StyleSheet.create({
    fonteTexto: {
        fontSize: 24
    },
    fonteTitulo: {
        fontSize: 48
    },
    fonteSubTitulo: {
        fontSize: 36
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        }
    });

export default Estilos