import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';


import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const physicalIcon = require('../assets/FormularioTerapiaFisica.jpg');

class BloodPressureScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    handlePhysical = () => {
      this.props.navigator.push({
        screen: "strokeAppSp.PhysicalToolkitScreen",
      });
    }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView>

             <HeadingText>Presión Arterial</HeadingText>

              <MainText style={styles.bullets}>
                    {`\u2022`} Presión Sistólica (S), es la presión más alta durante un latido del corazón. 
                    </MainText>
                    <MainText style={styles.bullets}>  
                    {`\u2022`} Presión Diastólica (D), es la presión más baja entre los latidos del corazón.
                    </MainText>
                    <MainText style={styles.bullets}>   
                    {`\u2022`} Presión arterial normal, menos de 120 (S) y menos de 80 (D).
                    </MainText>
                    
                    <MainText style={styles.bullets}>
                    {`\u2022`} Elevado entre 120-129 (S) y menos de 80 (D).
                    </MainText>
                    <MainText style={styles.bullets}>  
                    {`\u2022`} Presión arterial alta. Hipertensión Estado 1, 130-139 (S) o 80-89 (D).
                    </MainText>
                    <MainText style={styles.bullets}>  
                    {`\u2022`} Presión arterial alta. Hipertensión Estado 2, 140 o superior (S) o 90 o superior (S).
                    </MainText>
                    <MainText style={styles.bullets}>  
                    {`\u2022`} Crisis de hipertensión: consulte a su médico inmediatamente, a más de 180 (S) o más de 120 (D).
                </MainText>

              <HeadingText>Prueba de Azúcar en la Sangre </HeadingText>

              <MainText style={styles.bullets}>
              {`\u2022`} La prueba de glucosa en sangre se usa para la diabetes. Los resultados se utilizan para regular los medicamentos y la dieta.   
              </MainText>
              <MainText style={styles.bullets}>  
              {`\u2022`} ¿Cuándo hacer la prueba? Números a reportar.  
              </MainText>


              <HeadingText>Preguntas para Fisioterapeutas</HeadingText>

              <MainText style={styles.bullets}>
              {`\u2022`} ¿Cómo continuar la terapia física?  
              </MainText>
              <MainText style={styles.bullets}>  
              {`\u2022`} ¿Qué ejercicios hacer? ¿Cómo? ¿Con qué frecuencia?
              </MainText>
              <MainText style={styles.bullets}>  
              {`\u2022`} ¿Por cuánto tiempo? 
              </MainText>
              <MainText style={styles.bullets}>  
              {`\u2022`} ¿Beneficios? ¿Propósito?
              </MainText>

              <LinkToolkitWrapper 
                text={'Comparte con la familia el Formulario de Terapia Física. (haga click abajo).'}
                source={physicalIcon}
                onPress={this.handlePhysical}
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
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    
  });

  

export default BloodPressureScreen;