import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Linking
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";
import ImageContainer from "../components/UI/ImageContainer";

const { width, height } = Dimensions.get("window");
const emergencyIcon = require('../assets/StrokeKnowHow_Toolkit_Emergency-Spanish.jpg');
const strokeLine = require('../assets/helpline-logo.png');

class EmergencyScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    handleEmergency = () => {
      this.props.navigator.push({
        screen: "strokeAppSp.EmergencyToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView>

                            <LinkToolkitWrapper 
                              text={'Comparte con la familia el Formulario de Información de Emergencia. (haga click abajo).'}
                              source={emergencyIcon}
                              onPress={this.handleEmergency}
                            />

                            <HeadingText style={{fontWeight: 'bold'}}>No esperes, Consigue ayuda.</HeadingText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Llame al 911 o a su número de emergencia.   
                            </MainText>      

                            <MainText style={styles.bullets}>
                            {`\u2022`} Reportar un posible derrame cerebral u otra emergencia. 
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} Responda preguntas con respuestas claras y cortas. Si necesitas un traductor, solicítelo de inmediato. 
                            </MainText>    

                            <MainText style={styles.bullets}>
                            {`\u2022`} No cuelgue primero: espere las instrucciones.  
                            </MainText> 
                            
                             <View style={{height: 30}}></View>

           
                            <HeadingText >En Emergencia</HeadingText>

                            <Link />  

            </ScrollView>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    border: {
      margin: 5,
      //backgroundColor: '#e6f2ff',
      //height: 70,
    },
    boxLink: {
      //fontSize: hp('2%'), 
      //marginHorizontal: hp('3%'),
      //fontSize: wp('3.5%'),
      //marginVertical: 0, 
      //textDecorationLine: 'underline',
      fontWeight: 'bold',
      marginVertical: 0,
      alignSelf: 'center'
    },
    boxText: {
      //fontSize: hp('2%'), 
      //marginHorizontal: height > 600 ? 15 : 0,
      //marginLeft: 0,
      //fontSize: wp('3.5%'),
      //marginVertical: 0,
      //fontWeight: 'bold',
      alignSelf: 'center', 
      fontSize: wp('4%')
    },

  });

  

export default EmergencyScreen;