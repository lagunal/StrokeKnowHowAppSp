import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import BodyScroll from "../../UI/BodyScroll";
import Button from '../../UI/Button';
import DetailToolkit from '../../UI/DetailToolkit';
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class ScheduleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.item.time,
            activity: this.props.item.activity,
        }
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.handlePress = this.handlePress.bind(this);
    }

    // onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    //     if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
    //       if (event.id == 'save') { // this is the same id field from the static navigatorButtons definition        

    //       }
    //     }
    // }
    handlePress() {
        var data = this.props.data;
        for (var key in data){
            if (data.hasOwnProperty(key)) {
                data[key] = (key === this.props.keyId[0]) ? this.state.time : data[key];
                data[key] = (key === this.props.keyId[1]) ? this.state.activity : data[key];
            }
        }
        let jsonData = JSON.stringify(data);
        ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'schedule');
        this.props.onPress();//calls the onPress event from parent                
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (selectedDate) => {
      this.setState({
       time: selectedDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      });
      this._hideDateTimePicker();
    };

    
    render(){

        return(
            <BodyScroll>
            <View style={{flex: 1}}>    
                
                <DetailToolkit 
                    instructions={'Escriba la actividad y seleccione la hora.'}
                />

                    <MainText><SubHeadingText>Actividad</SubHeadingText>  </MainText>
                    <TextInput
                            multiline = {true}
                            numberOfLines = {4} 
                            value={this.state.activity} 
                            style={[styles.inputStyleToolkit, {height: hp('20%')}]}
                            onChangeText={activity => this.setState({ activity } )} 
                            underlineColorAndroid={'transparent'} />
                    
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                            <View style={styleComponent.dayContainer}> 
                                <MainText><SubHeadingText>Hora</SubHeadingText>  </MainText>
                                <MainText>{this.state.time} </MainText>
                            </View>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode='time'
                        titleIOS={'Selecc Hora'}
                        //minuteInterval={30}
                        //date={new Date()}
                    />

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                    Guardar
                    </Button>
           
            </View>
            </BodyScroll>
        )
    }

}

const styleComponent = StyleSheet.create({
    dayContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        
    },
 
});

export default ScheduleDetail;

