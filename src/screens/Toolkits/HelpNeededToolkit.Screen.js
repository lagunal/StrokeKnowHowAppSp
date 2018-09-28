import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage,
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import HeaderToolkit from '../../components/UI/HeaderToolkit';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";
import HelpNeededRow from "../../components/Toolkits/HelpNeeded/HelpNeededRow";

import HelpNeededDetail from "../../components/Toolkits/HelpNeeded/HelpNeededDetail"

import jsonData from '../../assets/json/helpNeededToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class HelpNeededToolkit extends Component {
    
    constructor(props){
      super(props);
      this.state = { 
        isLoading: true,
        data: [],
        currentItem: null,
        user: [],
      }
    
    };

    
    //get data from rest API
    async componentDidMount() {
      //get the id from logged user
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
      try {
          const data = await ajax.getToolkit(this.state.user.id, 'helpNeeded');
          const dataValue = data.value;
          var dataToolkit = [];
          if (dataValue === null) {//if toolkit is new (no data from fetch)
             dataToolkit = jsonData; //assign "empty" json to data for toolkit
          } else {
            dataToolkit = dataValue; //assign existing data from toolkit
          }
          this.setState({ 
            isLoading: false, 
            data: dataToolkit,
          });
      } catch(error) {
        console.log(error);
      }
    
    }

    //function to navigate to the detail information
    setCurrentItem = (item, keyId) => {
        this.setState({
              currentItem: {
                medication: item.medication,
                monday: (item.monday) ? item.monday : false,
                tuesday: (item.tuesday) ? item.tuesday : false,
                wednesday: (item.wednesday) ? item.wednesday : false,
                thursday: (item.thursday) ? item.thursday : false,
                friday: (item.friday) ? item.friday : false,   
                saturday: (item.saturday) ? item.saturday : false,  
                sunday: (item.sunday) ? item.sunday : false,                           
              },
              keyId: keyId,
        });
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        });
    }

    //loop for rendering the medicines row of the toolkits using RowRender component
    renderHelpers(times) {
        const helpers = [];
        let background = '';
        for (let i=1; i <= times; i++) {
            background = (i%2 == 0) ? '#bad2ef' : 'white';
            helpers.push(<HelpNeededRow 
                            medication={this.state.data['helper' + i]} 
                            monday={this.state.data['monday' + i]} 
                            tuesday={this.state.data['tuesday' + i]} 
                            wednesday={this.state.data['wednesday' + i]} 
                            thursday={this.state.data['thursday' + i]} 
                            friday={this.state.data['friday' + i]} 
                            saturday={this.state.data['saturday' + i]} 
                            sunday={this.state.data['sunday' + i]} 

                            keyId={['helper' + i ,
                                    'monday' + i,
                                    'tuesday' + i,
                                    'wednesday' + i,
                                    'thursday' + i,
                                    'friday' + i,
                                    'saturday' + i,
                                    'sunday' + i
                                    ]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={background}
                            backgroundColorMedication={'#bad2ef'}
                            />);
        }
        return helpers;
    }
    
  

    render() {

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator size='large' />
            </View>
          )
        }

        if(this.state.currentItem){
          return(
            <View style={{flex: 1, padding: 20}}>
               <HelpNeededDetail item={this.state.currentItem} 
                                  keyId={this.state.keyId}
                                  data={this.state.data} 
                                  onPress={this.saveData}
                                  userId={this.state.user.id} 
                                  token={this.state.user.token}
                                  //navigator={this.props.navigator}
                                 />
            </View>
          )
        }

        return (
            <View style={styles.container}>
            <BodyScroll>
              <View style={{flex: 1}}>
                
                  <HeaderToolkit 
                    title='FORMULARIO INTERACTIVO AYUDA NECESARIA'
                    instructions="Presione una fila para ingresar o modificar información."
                  />

                  <View style={styles.containerGrid}> 
  
                    <View style={[styles.cell, {flex: 2}]}>
                      <Text style={styles.titleCol}>Ayuda Necesaria</Text>
                    </View>
                    <View style={styles.cell}> 
                      <Text style={styles.titleCol}>Lun.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Mar.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Mie.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Jue.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Vie.</Text>
                    </View>
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Sab.</Text>
                    </View> 
                    <View style={styles.cell}>
                      <Text style={styles.titleCol}>Dom.</Text>
                    </View>
  
                  </View>
  
                  {this.renderHelpers(18)}
  
              </View>
  
            </BodyScroll>
            </View>          
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    logoImage: {
      width: '100%',
    },
    containerGrid: {
      //backgroundColor: '#1749FF',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    titleCol: {
      color: 'white',
      fontSize: hp('2%'),
      alignSelf: 'center'
    },

    cell: {
      //flex: 1,
      backgroundColor: '#000099',
      //margin: 1,
      //borderColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      height: hp('6%'),
      width: wp('9.5%'),
    },

});

  

export default HelpNeededToolkit;