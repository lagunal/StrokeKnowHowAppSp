import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const button = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={{color: props.textColor}}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: '35%',
        alignSelf: 'center',
    },
});

export default button;