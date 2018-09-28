import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import ImageContainer from "../components/UI/ImageContainer";

const skinImage = require('../assets/skin-care1.png');

class SkinCareScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {

        return (
          <View style={styles.container}>
            <ScrollView>

                      <HeadingText>Cuidado de la Piel</HeadingText>

                      <Image source={skinImage} style={styles.imageDefault} />

                      <MainText style={styles.bullets}>
                      {`\u2022`} Revise la piel todos los días en busca de enrojecimiento y lesiones, especialmente cuando la piel es frágil, tiene mala circulación o es diabética.
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Dolor por presión o hematoma, requiere atención inmediata para la medicación y el tratamiento.
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Reposicione <Text style={{textDecorationLine: 'underline'}}>al menos cada dos horas</Text>cuando esté en la cama por un tiempo prolongado. 
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Los ayudantes <Text style={{textDecorationLine: 'underline'}}>deben levantar y no tirar</Text>del paciente a través de la sábana, para evitar lesiones por fricción. 
                      </MainText>

                      <MainText style={styles.bullets}>
                      {`\u2022`} Las úlceras por presión y la rotura de la piel, se producen por infrecuentes giros o cambios de posición del cuerpo.  
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
    bullets: {
      marginVertical: 5,
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default SkinCareScreen;