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
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const medicationsImage = require('../assets/medications.png');
const medicationIcon = require('../assets/FormularioMedicacion.jpg');

class MedicationsScreen extends Component {
    constructor(props) {
        super(props);
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }


    handleMedication = () => {
      this.props.navigator.push({
        screen: "strokeAppSp.MedicationsToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView> 
                <HeadingText>Organizando Medicamentos</HeadingText>

                <Image source={medicationsImage} style={styles.imageDefault} />

                <MainText>
                    Ruth, M. de 78 años, usa un organizador de píldoras y el Formulario Interactivo de Medicación. La hija de Ruth, también puede ver el Formulario.
                </MainText>

                <LinkToolkitWrapper 
                  text={'Comparte con la familia el Formulario de Medicación. (haga click abajo).'}
                  source={medicationIcon}
                  onPress={this.handleMedication}
                />
              
            </ScrollView>                    

          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default MedicationsScreen;