
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


class NewDayScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  render() {

    return (
      <View style={styles.container}>
      
        <StatusBar
            barStyle="light-content"
        />    

        <ScrollView>

        <Image source={require('../assets/home.png')} style={styles.imageDefault}/>  
        <MainText style={{marginBottom: 0}}>    
                            Yo era un escritor deportivo de un periódico importante, 
                            padecí un derrame cerebral en un metro de Nueva York durante la hora pico. 
                            En la ambulancia, escuché la palabra 'Derrame Cerebral' y me di cuenta de que estaban hablando de mí. 
                            Después de cinco días estuve fuera del hospital: podía pararme, pero no caminar. 
                            El seguro pagó solo una cantidad de terapias físicas. ¿AHORA QUE?
        </MainText>
        <PictureLegend>&mdash; Mike</PictureLegend>    
        
        <HeadingText>Un Nuevo Día</HeadingText>
        
        <Image source={require('../assets/newDay.png')} style={styles.imageDefault}/>
        
        <MainText style={styles.bullets}>
            {`\u2022`} Es importante levantarse de la cama y vestirse todos los días. El reposo completo en cama debilita el cuerpo. Reduce la capacidad  de bombeo de su corazón, reduce la capacidad pulmonar, altera la presión arterial y aumenta la posibilidad de contraer neumonía. 
        </MainText>
        <MainText style={styles.bullets}>  
            {`\u2022`} Haga estiramientos suaves en la cama para aliviar la rigidez. Muévase de lado a lado. 
        </MainText>
        <MainText style={styles.bullets}>  
            {`\u2022`} Antes de moverse tome su tiempo, evite cambios rápidos para evitar marearse. 
        </MainText>
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,

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


export default NewDayScreen;