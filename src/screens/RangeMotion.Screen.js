import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import Link from "../components/UI/Link";

class RangeMotionScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {

        return (
          <View style={styles.container}>
            <ScrollView>

                <HeadingText>Rango de Movimiento</HeadingText>
                
                <MainText>
                    Los ejercicios de rango de movimiento pueden mantener las articulaciones que se mueven libre y plenamente. Los ejercicios los puede hacer por usted mismo o con la ayuda de alguien.  
                </MainText>
                <MainText style={styles.bullets}>
                {`\u2022`} Haga los ejercicios con movimiento lento y suave. Un ayudante sostiene firmemente la articulación ejercitada con una mano, y con la otra crea o guía el movimiento. Los ayudantes paran el ejercicio cuando una articulación no se mueve libremente o hay molestias. 
                </MainText>  
                <MainText style={styles.bullets}>
                {`\u2022`} Mueva y estire varias veces al día, los músculos del brazo y pierna debilitados, para evitar contracturas y acortamiento de los músculos alrededor de las articulaciones, lo cual puede causar bandas apretadas y dolorosas.
                </MainText>          

                <HeadingText>Posicionamiento del Cuerpo</HeadingText>
                <MainText>
                    En todo momento, ya sea acostado, sentado o caminando, un buen posicionamiento del cuerpo es esencial para la solidez del cuerpo y evitar contracturas. 
                </MainText>
                <MainText style={styles.bullets}>
                {`\u2022`} La posición de la cabeza afecta el tono muscular del tronco, los brazos y las piernas. Si se gira hacia un lado, interfiere con el equilibrio y la capacidad de moverse. 
                </MainText>  
                <MainText style={styles.bullets}>
                {`\u2022`} El peso debe ser distribuido uniformemente. Use una almohada para apuntalar el lado caído. 
                </MainText>   
                <MainText style={styles.bullets}>
                {`\u2022`} Para sostener la articulación del hombro en su lugar, sostenga el antebrazo con una almohada. Haga que su hombro y brazo se estiren hacia adelante.
                </MainText>
                <MainText style={styles.bullets}>
                {`\u2022`} Levante la muñeca más débil con la mano sana para llevar el brazo adelante. Mantenga la muñeca extendida, los dedos rectos como sea posible. 
                </MainText>   
                
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
  });

  
export default RangeMotionScreen;