import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        justifyContent: "center",
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 20,
        paddingRight: 60,
        borderRadius: 50,
    },
    degreeText: {
        fontSize: 30,
    },
    DisplayText: {
        fontSize: 70,
        color: "#fff",
    },
    degreeTouch: {
        position: 'absolute',
        right: 20,
        top: 12,
    },
    button: {
        backgroundColor: "black",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 50,
        width: 250,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
});
