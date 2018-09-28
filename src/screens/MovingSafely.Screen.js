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
import HeadingText from '../components/UI/HeadingText';
import SubHeadingText from '../components/UI/SubHeadingText';
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


const familyImage = require('../assets/family.png');
const THRESHOLD = 200;

class MovingSafelyScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          videoAnimationPaused: false,
          position: {
            start: null,
            end: null,
          }
        }
        
    }
        
    playVideo = () => {
      this.player.presentFullscreenPlayer();
    }
 
    handleVideoLayout = (e) => {
      const { height } = Dimensions.get("window");
      this.state.position.start = e.nativeEvent.layout.y - height + THRESHOLD;
      this.state.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height - THRESHOLD;
    };

    handleScroll = (e) => {
    
      const scrollPosition = e.nativeEvent.contentOffset.y;
      const paused = this.state.videoAnimationPaused;

      const { start, end } = this.state.position;
  
      //Video animation
      if (scrollPosition > start && scrollPosition < end && paused) {
        this.setState({ videoAnimationPaused: false });
      } else if (
        (scrollPosition > end || scrollPosition < start) && !paused
      ) {
        this.setState({ videoAnimationPaused: true });
      }
  
    };  

    render() {
        return (
          <View style={styles.container}>
            <ScrollView
              scrollEventThrottle={16} 
              onScroll={this.handleScroll}
            >
                    <TouchableOpacity onPress={this.playVideo}>
                        <View style={{padding: 20}}>
                            <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>Toca el video para abrir el reproductor pantalla completa &rarr;</SubHeadingText></MainText>
                            <Video
                              source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                              ref={(ref) => {
                                this.player = ref
                              }}       
                              style={{height: 300}}                             
                              rate={1}
                              paused={this.state.videoAnimationPaused}
                              onLayout={this.handleVideoLayout}
                              //onLoad={this.handleOnLoadAnimation}
                              //onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                              volume={1}
                              muted={false}
                              playInBackground={false}
                              playWhenInactive={false}
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
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center' 
    },
  });

  

export default MovingSafelyScreen;