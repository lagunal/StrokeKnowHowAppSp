
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Linking, Image, Dimensions
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';

import ImageContainer from '../components/UI/ImageContainer';
import PictureLegend from '../components/UI/PictureLegend';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";


const familyImage = require('../assets/family.png');
const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
const medicationsImage = require('../assets/medications.png');
const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');
const skinImage = require('../assets/skin-care1.png');
const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage2 = require('../assets/skin-care2.png');
const brainImage = require('../assets/brain-body.png'); 
const strokeLine = require('../assets/helpline-logo.png');
const bioImage = require('../assets/bio.jpg');
const weeklyScheduleIcon = require('../assets/FormularioHorarioSemanal.jpg');
const helpNeededIcon = require('../assets/FormularioAyudaNecesaria.png');
const medicationIcon = require('../assets/FormularioMedicacion.jpg');
const physicalIcon = require('../assets/FormularioTerapiaFisica.jpg');
const emergencyIcon = require('../assets/StrokeKnowHow_Toolkit_Emergency-Spanish.jpg');

const THRESHOLD = 200;

class HomeScreen extends Component {

  constructor(props) {
      super(props);   
  }

  state = {
    videoAnimationPaused: true,
    // videoRobPaused: true,
    position: {
        start: null,
        end: null,
    },
    // positionVideoRob: {
    //     startRob: null,
    //     endRob: null,
    // }
  };

  handleVideoLayout = (e) => {
    const { height } = Dimensions.get("window");
    
    this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
  };

  // handleVideoLayoutRob = (e) => {
  //   const { height } = Dimensions.get("window");
    
  //   if (height > 600) {
  //       this.state.positionVideoRob.startRob = 11300 + height - THRESHOLD;
  //       this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
  //   } else {
  //       this.state.positionVideoRob.startRob = 9800 + height - THRESHOLD;
  //       this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
  //   }
  // };

  handleScroll = (e) => {
    
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.videoAnimationPaused;
    //const pausedRob = this.state.videoRobPaused;
    const { start, end } = this.state.position;
    // const { startRob, endRob } = this.state.positionVideoRob;
    // console.log('scroll ' + scrollPosition);
    // console.log('start ' + this.state.positionVideoRob.startRob);
    // console.log('end ' + this.state.positionVideoRob.endRob);

    //Video animation
    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ videoAnimationPaused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ videoAnimationPaused: true });
    }
    //Video Rob
    // if (scrollPosition > startRob && scrollPosition < endRob && pausedRob) {
    //     this.setState({ videoRobPaused: false });
    // } else if (scrollPosition < startRob || scrollPosition > endRob && !pausedRob) {
    //     this.setState({ videoRobPaused: true });
    // }
   // console.log(this.state.videoAnimationPaused);
  };  

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

  handleMedication = () => {
    this.props.navigator.push({
      screen: "strokeAppSp.MedicationsToolkitScreen",
    });
  }

  handlePhysical = () => {
    this.props.navigator.push({
      screen: "strokeAppSp.PhysicalToolkitScreen",
    });
  }

  handleEmergency = () => {
    this.props.navigator.push({
      screen: "strokeAppSp.EmergencyToolkitScreen",
    });
  }

//   handleFullScreen = () => {
//     this.player.seek(0);
//   }
//   handleFullScreenAnimation = () => {
//     this.player2.seek(0);
//   }

  playVideo = () => {
    this.player.presentFullscreenPlayer();
  }

  playVideoAnimation = () => {
    this.player2.presentFullscreenPlayer();
  }

//   handleOnLoadAnimation = () => {
//     this.player2.seek(2);
//     const paused = this.state.videoAnimationPaused;
//     this.setState({ paused: true });

//   };
//   handleOnLoadRob = () => {
//     this.player.seek(1);
//     const paused = this.state.videoRobPaused;
//     this.setState({ paused: true });

//   };

  render() {
    //const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <StatusBar
              barStyle="light-content"
          />  
          <ScrollView
          scrollEventThrottle={16} 
          onScroll={this.handleScroll}
          minimumZoomScale={1}
          maximumZoomScale={2}
          >
{/*************** New Day Screen  ********************************/}
                <View>
                        
                        <StatusBar
                            barStyle="light-content"
                        />    

                        <Image source={require('../assets/home.png')} style={styles.imageDefault}/>  

                        <MainText style={{marginBottom: 0}}>    
                            Yo era un escritor deportivo de un periódico importante, 
                            padecí un derrame cerebral en un metro de Nueva York durante la hora pico. 
                            En la ambulancia, escuché la palabra 'Derrame Cerebral' y me di cuenta de que estaban hablando de mí. 
                            Después de cinco días estuve fuera del hospital: podía pararme, pero no caminar. 
                            El seguro pagó solo una cantidad de terapias físicas. ¿AHORA QUE?
                        </MainText>
                        <PictureLegend style={{marginRight: wp('10%') }}>&mdash; Mike</PictureLegend>    
                        
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

                </View>

 {/*************** Moving Safely Screen  ********************************/}
                      <View>
                              <TouchableOpacity onPress={this.playVideoAnimation}>
                                  <View style={{padding: 20}}>                                                  
                                      <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>Toca el video para abrir el reproductor pantalla completa &rarr;</SubHeadingText></MainText>
                                      <Video
                                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                                        ref={(ref) => {
                                          this.player2 = ref
                                        }}       
                                        style={{height: 300}}                             
                                        rate={1}
                                        paused={this.state.videoAnimationPaused}
                                        onLayout={this.handleVideoLayout}
                                       // volume={1}
                                       // muted={false}
                                       // onLoad={this.handleOnLoadAnimation}
                                       // onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                                        //playInBackground={false}
                                        //playWhenInactive={false}
                                        resizeMode='contain'
                                        repeat
                                        />
                                  </View>
                              </TouchableOpacity> 

                              <HeadingText>Los Ayudantes se Protegen a sí Mismos</HeadingText>
                              
                              <MainText style={styles.bullets}>  
                              {`\u2022`} Cuando mueva a alguien, mantenga sus caderas y rodillas ligeramente flexionadas. Párese cerca de la persona: demasiado lejos pone tensión en su espalda. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Párese con los pies ligeramente separados, un pie delante del otro para mantener el equilibrio, cambie su peso cuando sea necesario.
                              </MainText>
                              <HeadingText>Comparte el Cuidado</HeadingText>

                              <Image source={familyImage} style={styles.imageDefault}/>

                              <MainText style={{marginBottom: 0}}>  
                                Cuando mi esposa, Tina, tuvo un derrame cerebral, afectó a toda nuestra familia. Todos teníamos un trabajo que hacer, incluso los niños.
                              </MainText>
                              <PictureLegend >&mdash; Javier, Lima, Peru</PictureLegend>

                              
                                <HeadingText>Preguntas {`\n`} que las Familias se Hacen</HeadingText>
                              
                              <MainText style={styles.bullets}>
                                  {`\u2022`} ¿Quién se encargará del cuidado personal y de las terapias? ¿Cuándo?
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} ¿Quién realizará las compras y compartirá el servicio de limpieza? ¿Cuándo?
                              </MainText>
                              <MainText style={styles.bullets}>     
                                  {`\u2022`} ¿Quién conducirá a las citas con el doctor y a las terapias?
                              </MainText>        
                    </View>

{/*************** Weekly Plan Screen  ********************************/}
                    <View>

                    <LinkToolkitWrapper 
                      text={'Comparte con la familia el Formulario de Ayuda Necesaria (haga click abajo).'}
                      source={helpNeededIcon}
                      onPress={this.handleHelpNeeded}
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

                    </View>



{/*************** Medications Screen  ********************************/}

                    <View>
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
                    </View>     



{/*************** Bladder Control Screen  ********************************/}

                    <View>

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

                    </View>        


{/*************** Blood Pressure Screen  ********************************/}

                    <View>

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

                      </View>         


{/*************** Range of motion Screen  ********************************/}

                      <View>
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

                      </View>     

{/*************** Skin Care Screen  ********************************/}

                      <View>
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
                      </View>           

{/*************** Getting Up Screen  ********************************/}

                      <View>
                            <HeadingText>Kufungisisa {`\n`}
                            Pensando demasiado/Deprimido en Zimbabue</HeadingText>

                            <Image source={kufungisisaImage} style={styles.imageDefault}/>

                            <MainText>
                            Después del derrame cerebral, la depresión me golpeó fuerte. Soy el abogado más joven en el tribunal, de repente no pude ver lo que deparaba mi futuro.  
                            </MainText>
                            <MainText>  
                            Mi esposa continuó con mi cuidado, hasta que tuvo que regresar a su trabajo para obtener nuestros ingresos. Entonces llegaron mi tío y un vecino.
                            </MainText>

                            <MainText>
                            Tres cosas me ayudaron: 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} El amor de mi esposa e hijos. 
                            </MainText>

                            <MainText style={styles.bullets}>  
                            {`\u2022`} Mi mejor amigo desde la infancia me desafió a alcanzar una mayor independencia. 
                            </MainText>

                            <MainText style={[styles.bullets, {marginBottom: 0}]}>  
                            {`\u2022`} De un grupo de atletas con discapacidades aprendí una lección importante: No permita que nadie le quite su papel en la familia y las responsabilidades que puede manejar.
                            </MainText>

                            <PictureLegend >&mdash; R.W., Zimbabwe, Africa</PictureLegend>

                            <Image source={skinImage2} style={styles.imageGetting}/>

                            <MainText style={{marginBottom: 0}}>
                            No hay forma de decir quién o qué será lo que le da la voluntad y la determinación de seguir adelante – su apertura es lo que cuenta.  
                            Podría ser su esposa o esposo, hijos, Dios, amigos de muchos años o personas con las que se encuentre con experiencias similares a las suyas.   
                            </MainText>
                            <PictureLegend >&mdash; Bill</PictureLegend>

                            <HeadingText>Levantar el ánimo {`\n`} Cuando se Siente Deprimido</HeadingText>
                            <MainText>
                                Consejos de personas que han estado allí:
                            </MainText>

                            <MainText>
                            {`\u2022`} El estrés proviene de lo que nos decimos a nosotros mismos. Sustituir el "diálogo interno" negativo por uno positivo.
                            </MainText>

                            <MainText>
                            {`\u2022`} Mantente rodeado de personas que te hacen sentir bien contigo mismo. Reúnase en un club de derrame cerebral o un grupo de afasia. Busque una familia que ha experimentado un derrame cerebral, esto puede marcar la diferencia.
                            </MainText>

                            <MainText>
                            {`\u2022`} Tristeza, impaciencia, pérdida, amor, vienen el uno con el otro. Los sentimientos son todos válidos y una reacción de lo que te ha ocurrido. 
                            </MainText>           
                      </View>           

{/*************** Brain Body Screen  ********************************/}

                      <View>
                              <HeadingText>Conexión Cerebro y Cuerpo</HeadingText>
                              
                              <Image source={brainImage} style={[styles.imageDefault, {height: hp('50%')}]}/>
                              
                              <MainText>
                              Mi doctor me habló acerca de la investigación que demuestra que después de un derrame cerebral, cuando un área del cerebro se lesiona, realizar tareas y repetirlas varias veces, ayuda a la curación. Durante seis meses, usé tanto mi mano más débil como la fuerte, lavando mi ventana de la cocina, ordenando la ropa de lavandería y puliendo la mesa. {`\n`}
                                
                              Mi objetivo era que mi mano derecha se abriera y los dedos se movieran. Me mantuve en ello, pero no vi ninguna diferencia. {`\n`}
                              Sin embargo una mañana tomé una taza de café y de repente, los dedos en mi mano derecha se abrieron lentamente. Empecé a llorar, y seguí moviendo mis dedos. 
                              </MainText>
                  
                              <PictureLegend >&mdash; Madeline, Stuttgart, Germany</PictureLegend>
                  
                              <MainText>
                              Agregue sus tareas, use ambas manos, repítalas varias veces.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Doblar, abrir y volver a doblar los artículos: servilletas de papel, ropa.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Cortar/pelar vegetales, fruta. 
                              </MainText>

                              <MainText style={styles.bullets}>
                              {`\u2022`} Pulir Cubiertos. 
                              </MainText>

                              <MainText style={styles.bullets}>
                              {`\u2022`} Colocar las latas en un estante. 
                              </MainText>

                              <MainText style={styles.bullets}>
                              {`\u2022`} Lavar los platos.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Abotonar/desabotonar la camisa. 
                              </MainText>
                  
                              <HeadingText>¿Qué es la afasia?</HeadingText>
                  
                              <MainText>
                              La afasia es una condición que hace que sea difícil decir lo que se está pensando ó comprender lo que se dice. Más de la mitad de los hombres y mujeres después de un derrame cerebral, tienen esta condición. 
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} La inteligencia no se ve afectada. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} El re-aprendizaje es continuo: hablar, leer, escribir, resolver problemas. Sigue así, hasta que recuperes lo que has perdido.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Encuentra un grupo de afasia o una familia con experiencias similares. Esto puede aumentar la confianza y fomentar las amistades.  
                              </MainText>
                        
                      </View>          


{/*************** Emergency Screen  ********************************/}

                    <View>
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
                    
                  </View>           

{/*************** Bio Screen  ********************************/}

                  <View style={{marginTop: 50}}>
                          <ImageContainer source={bioImage} orientation={'portrait'} style={[styles.image, {height: '100%'}]} />    

                          <MainText>
                          Activista por largo tiempo en el Movimiento de Derechos de Personas con Discapacidad, y autora de más de una docena de libros, Florence Weiner ha entrevistado a cientos de hombres y mujeres y sus familias afectadas por un derrame cerebral. Ella comparte sus historias aquí y en StrokeKnowHow.org; una comunidad mundial de Derrame Cerebral, basada en la creencia de que aprendemos mejor unos de otros.    
                          </MainText>

                          <MainText>
                          Cada derrame cerebral es único. Así es el camino que elegimos para encontrar el camino de vuelta. Si encuentra respuestas, motivación, inspiración y esperanza, este trabajo habrá cumplido su propósito.    
                          </MainText>
                          <MainText>Dedicado a Richard, la luz más brillante.</MainText>
                  </View>       


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

  },
  bullets: {
    marginVertical: 5,
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
  imageWeekly: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  imageGetting: {
    width: wp('90%'),
    height: 180,
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  imagePat: {
    width: wp('60%'),
    height: 300,
    marginTop: hp('2%'),
    alignSelf: 'center'
  },
});


export default HomeScreen;