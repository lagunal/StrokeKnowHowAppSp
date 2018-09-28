import React, { Component } from 'react';


import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import BodyScroll from '../components/UI/BodyScroll';


class ContentsScreen extends Component {

        
  constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

  }


  handlePress = (screenName, screenTitle) => {
    this.props.navigator.push({
        screen: screenName,
        title: screenTitle
    });
  }
  
  render() {

    return (
      <View style={styles.container}>

        <BodyScroll>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.NewDayScreen', 'Un nuevo día')}>
                <View style={styles.item}>
                    <Icon style={styles.icon} name="ios-home" size={30} md="md-home"></Icon>    
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Un nuevo día   
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.MovingSafelyScreen','Seguridad al moverse')}>
                <View style={styles.item}> 
                    <Icon style={styles.icon} name="ios-alert" size={30} md="md-alert"></Icon>  
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Seguridad al moverse
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.WeeklyPlanScreen','Plan Semanal')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="md-calendar" size={30} md="md-calendar"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Plan Semanal
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.MedicationsScreen','Medicamentos')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-medkit" size={30} md="md-medkit"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Medicamentos
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.BladderControlScreen','Control de la vejiga')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-man" size={30} md="md-man"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Control de la vejiga
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.BloodPressureScreen','Presión Arterial')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-heart" size={30} md="md-heart"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Presión Arterial
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.RangeMotionScreen','Rango de Movimiento')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-walk" size={30} md="md-walk"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Rango de Movimiento
                        </SubHeadingText>
                    </MainText>  
                    
                </View>    
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.SkinCareScreen','Cuidado de la piel')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-finger-print" size={30} md="md-finger-print"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Cuidado de la piel
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.GettingUpScreen','Levantar el ánimo')}>
                <View style={styles.item}> 
                <Icon style={styles.icon} name="ios-happy" size={30} md="md-happy"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Levantar el ánimo
                        </SubHeadingText>
                    </MainText>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.BrainBodyScreen','Cerebro/cuerpo')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-body" size={30} md="md-body"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Cerebro/cuerpo
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handlePress('strokeAppSp.EmergencyScreen','Emergencia')}>
                <View style={styles.item}>
                <Icon style={styles.icon} name="ios-warning" size={30} md="md-warning"></Icon>
                    <MainText>
                        <SubHeadingText style={styles.title}>
                            Emergencia
                        </SubHeadingText>
                    </MainText>  
                    
                </View>
            </TouchableOpacity>

        </BodyScroll>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: '#b30000'
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  icon: {
      marginHorizontal: 10,
      color: 'white',
  }
});


export default ContentsScreen;