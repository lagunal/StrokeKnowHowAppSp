import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage = require('../assets/skin-care2.png');

class GettingUpScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {

        return (
          <View style={styles.container}>
            <ScrollView>

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

                            <Image source={skinImage} style={styles.imageGetting}/>

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
    imageGetting: {
      width: wp('90%'),
      height: 180,
      alignSelf: 'center',
      marginTop: hp('5%'),
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center' 
    },
  });

  

export default GettingUpScreen;