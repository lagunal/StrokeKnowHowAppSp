import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";

const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');

class BladderControlScreen extends Component {
    constructor(props) {
        super(props);
        
    }


    render() {
  

        return (
          <View style={styles.container}>
            <ScrollView >

                <HeadingText>Control de la Vejiga</HeadingText>

                <Image source={bladderImage} style={styles.image}/>

                <MainText style={styles.bullets}>  
                {`\u2022`} Pídale a un médico o enfermera que lo ayude a restablecer el control de la vejiga. El cerebro y la vejiga necesitan controlar la micción en ciertos horarios.
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} Al principio, orine cada hora, no espere el impulso, hasta controlar la micción. Con mayor control, orine cada 3 a 4 horas.  
                </MainText>

                <HeadingText>Control Intestinal</HeadingText>

                <MainText style={styles.bullets}>  
                {`\u2022`} Se necesita ayuda para re-entrenar al cerebro en la capacidad de controlar los movimientos intestinales. Al principio, vacíe de forma rutinaria. Luego, aumente el tiempo para aliviarse. 
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} El estreñimiento es un efecto del derrame cerebral, también causado por ciertos medicamentos, el envejecimiento, la inactividad y el bajo consumo de fibra. 
                </MainText>

                <HeadingText>Bebiendo Agua</HeadingText>

                <MainText>  
                {`\u2022`} Dependemos del consumo de agua para vivir. Después de un derrame cerebral, puede ser difícil tragar; beba sorbos de agua con frecuencia para evitar la deshidratación. No use una pajilla o sorbete.                 
                </MainText>

                <HeadingText>Tragando</HeadingText>

                <Image source={swallowingImage} style={styles.imageDefault} />

                <MainText>  
                    Un terapeuta del habla o enfermera le pueden ayudar en el re-entrenamiento de tragar o deglutir. 
                </MainText>
                <MainText style={styles.bullets}>
                {`\u2022`} Actúe rápidamente en una emergencia de deglución. Aprenda RCP. 
                </MainText>
                <MainText style={styles.bullets}>   
                {`\u2022`} Después de comer, revise si tiene comida en las mejillas, debajo de la lengua, en la parte superior del paladar.              
                </MainText>

                <HeadingText>Preguntas para Hacerle a su Doctor</HeadingText>

                <MainText style={styles.bullets}>  
                {`\u2022`} ¿Qué debemos saber sobre el derrame cerebral? ¿Presión arterial alta? ¿Diabetes? ¿Números para informar?
                </MainText>  
                <MainText style={styles.bullets}>  
                {`\u2022`} ¿Efectos secundarios de la medicina para reportar?
                </MainText>
                <MainText style={styles.bullets}>  
                {`\u2022`} ¿Ha sido enviado mi informe del hospital a mis otros doctores?
                </MainText>

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
    image: {
      //width: 250,
      width: wp('80%'),
      height: 200,
      //marginTop: 5,
      alignSelf: 'center'
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
    bullets: {
      marginVertical: 5,
    },
  });

  

export default BladderControlScreen;