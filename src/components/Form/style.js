

import { StyleSheet } from "react-native"

export default StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    errorMessage: {
        fontSize: 12,
        color: "#ff0043",
        fontWeight: "bold",
        paddingLeft: 20
    },
    exibitionResultImc: {
        width: "100%",
        height: "50%"
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 26,
        color: "#ff0043",
        height: 50,
        width: "100%",
        paddingRight: 20
    },
    textResultItemList: {
        fontSize: 16,
        color: "#ff0043",
    },
})