import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import SubHeadingText from "../components/UI/SubHeadingText";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import ImageContainer from "../components/UI/ImageContainer";

const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
const weeklyScheduleIcon = require('../assets/FormularioHorarioSemanal.jpg');
const helpNeededIcon = require('../assets/FormularioAyudaNecesaria.jpg');

class WeeklyPlanScreen extends Component {
  constructor(props) {
    super(props);
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }


  handleHelpNeeded = () => {
      this.props.navigator.push({
        screen: "strokeAppSp.HelpNeededToolkitScreen",
      });
  }
  handleSchedule = () => {
    this.props.navigator.push({
      screen: "strokeAppSp.ScheduleToolkitScreen",
    });
  }

  render() {
 
        return (
          <View style={styles.container}>
            <ScrollView>

                <LinkToolkitWrapper 
                  text={'Comparte con la familia el Formulario de Ayuda Necesaria (haga click abajo).'}
                  source={helpNeededIcon}
                  onPress={this.props.pressHelp ? this.props.pressHelp : this.handleHelpNeeded}
                />
                
                
                <HeadingText>Hablemos de Seguridad</HeadingText>
                

                <Image source={safetyImage} style={styles.imagePat}/>

               <MainText>
                        Pat se convirtió en usuaria de silla de ruedas después de un accidente automovilístico. Su esposo, Bill hizo su hogar más seguro y accesible. 
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Para ensanchar la abertura de la puerta para la silla de ruedas de Pat, se eliminó la moldura.    
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Se bajó la altura de los interruptores de luz, dispensadores de papel higiénico y toalleros, para ser alcanzados fácilmente.
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} Un inodoro elevado facilita las transferencias. Una barra de agarre al lado del inodoro garantiza transferencias más seguras.
                    </MainText>
                    <MainText style={styles.bullets}>      
                        {`\u2022`} El botiquín con espejo también se bajó. 
                    </MainText>
                    <MainText>
                        Las caídas son la causa #1 de las lesiones en el hogar. Los pisos mojados del  baño generan lesiones en el hogar. Millones de personas regresan a los hospitales un mes después del alta.  
                    </MainText>


                    <HeadingText>Un Plan Semanal</HeadingText>
                

                <Image source={familyPlanImage} style={styles.imageWeekly}/>
                
                <MainText>
                        La nieta de Rachel le muestra cómo organizar un horario semanal. Tel Aviv, Israel.  
                </MainText>

                 
                 <SubHeadingText>Beneficios de un Horario Semanal</SubHeadingText>

                <MainText style={styles.bullets}>      
                    {`\u2022`} Haciendo un seguimiento del tiempo se organiza cada día Dale prioridad a lo que necesitas llevar a cabo y asígnale un tiempo
                </MainText>
                <MainText style={styles.bullets}>  
                    {`\u2022`} Ten tiempos estimulantes, con intermedios de tiempos tranquilos, como: sentarse, tomar una siesta, simplemente relajarte.     
                </MainText>

               <LinkToolkitWrapper 
                      text={'Comparte con la familia el Formulario de Horario Semanal. (haga click abajo).'}
                      source={weeklyScheduleIcon}
                      onPress={this.handleSchedule}
                />

              <MainText style={styles.bullets}>
              {`\u2022`} Después de un derrame cerebral, cada familia pone atención al cuidado, los gastos médicos y de vida que son necesarios y cómo cada uno ayudará.   
              </MainText>
              <MainText style={styles.bullets}> 
              {`\u2022`} Pídale a un fisioterapeuta que evalúe la capacidad de moverse, hablar, comprender y manejar el cuidado personal. 
              </MainText>
              <MainText style={styles.bullets}>
              {`\u2022`} Un psicólogo puede evaluar los afectos emocionales y las formas en que la familia puede hacer frente a los cambios.
              </MainText>


              <HeadingText>
              Limpieza Personal
              </HeadingText>
            

              <MainText style={styles.bullets}> 
              {`\u2022`} Para prevenir infecciones, proteger la piel y por comodidad, el ser querido necesita ser lavado o bañado todos los días, con agua tibia y jabón. Secar, luego dar masaje con una loción  calmante. 
              </MainText>

              <MainText style={styles.bullets}>  
              {`\u2022`} Todos los miembros de la familia y los ayudantes, deben lavarse las manos con frecuencia; después de usar el baño, y antes de comer.
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
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    imageWeekly: {
      width: 300,
      height: 200,
      alignSelf: 'center'
    },
    imagePat: {
      width: wp('60%'),
      height: 300,
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default WeeklyPlanScreen;