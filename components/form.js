import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Text } from "react-native";


export default function FormInput({ subHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <View style={styles.container}>

            <TextInput onChangeText={changeHandler} placeholder="New Todo" style={styles.textInput} />
            <Button onPress={() => { subHandler(text) }} title="Add Todo" color={'green'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        alignSelf: 'center'
    },
    textInput: {
        width: 350,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 6,
        margin: 6,
        justifyContent: 'center',
        alignSelf: 'center'


    }
})