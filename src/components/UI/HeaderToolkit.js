import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import MainText from '../UI/MainText';
import SubHeadingText from '../UI/SubHeadingText';

const { height } = Dimensions.get("window");

const HeaderToolkit = (props) => [
        <View style={styles.titleWrap}>
            <MainText><SubHeadingText style={[styles.textTitle, props.style]}>{props.title}</SubHeadingText></MainText>
        </View>,
        <View style={styles.instructionsWrap}>
            <Text style={styles.textInstructions}> {props.instructions}</Text>
            <Text style={styles.textInstructions}>Rote el celular de lado para tener una mejor visibilidad.</Text>
        </View>
];

const styles = StyleSheet.create({
    titleWrap: {
        margin: 20,
    },
    instructionsWrap: {
        marginBottom: 15
    },
    textTitle: {
        fontSize: height > 700 ? wp('5.3%') : wp('5%')
    },
    textInstructions: {
        fontSize: wp('4%'),
    }
});

export default HeaderToolkit;






