import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItems({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => { pressHandler(item.key) }}>
            <View style={styles.item}>
                <MaterialIcons size={18} color={'#333'} name='delete' />
                <Text style={styles.textStyle} >    {item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    textStyle: {
        fontSize: 25
    }
})