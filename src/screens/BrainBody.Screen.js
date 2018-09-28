import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";
import HeadingText from '../components/UI/HeadingText';
import SubHeadingText from '../components/UI/SubHeadingText';

const brainImage = require('../assets/brain-body.png');
const THRESHOLD = 200;

class BrainBodyScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoRobPaused: true,
            position: {
                start: null,
                end: null,
            }
        }

    }

    // handleFullScreen = () => {
    //     this.player.seek(0);
    // }

    // playVideo = () => {
    //     this.player.presentFullscreenPlayer();
    // }

    // handleOnLoadRob = () => {
    //     this.player.seek(1);
    //     const paused = this.state.videoRobPaused;
    //     this.setState({ paused: true });
    
    // };
    // handleVideoLayout = (e) => {
    //     const { height } = Dimensions.get("window");
    //     //console.log('layout ' + e.nativeEvent.layout.y);
    //     this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    //     this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
    //   };
  
    //   handleScroll = (e) => {
      
    //     const scrollPosition = e.nativeEvent.contentOffset.y;
    //     const paused = this.state.videoRobPaused;
  
    //     const { start, end } = this.state.position;
  
  
    //     //Video animation
    //     if (scrollPosition > start && scrollPosition < end && paused) {
    //       this.setState({ videoRobPaused: false });
    //     } else if (
    //       (scrollPosition > end || scrollPosition < start) && !paused
    //     ) {
    //       this.setState({ videoRobPaused: true });
    //     }
    
    //     //console.log(this.state.videoRobPaused);
    // };  

    render() {
        return (
          <View style={styles.container}>
            <ScrollView>
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

  

export default BrainBodyScreen;