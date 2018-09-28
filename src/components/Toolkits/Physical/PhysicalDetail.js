import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import DetailToolkit from '../../UI/DetailToolkit';
import Button from '../../UI/Button';
import BodyScroll from "../../UI/BodyScroll";
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class PhysicalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: this.props.item.activity,
        }
        this.handlePress = this.handlePress.bind(this);
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    // onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    //     if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
    //       if (event.id == 'save') { // this is the same id field from the static navigatorButtons definition
    handlePress() {
            var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.activity : data[key];
                }
            }
            let jsonData = JSON.stringify(data);
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'physical');
            this.props.onPress();//calls the onPress event from parent                
    }
    //       }
    //     }
    // }

    render(){

        return(
            <BodyScroll>
            <View style={{flex: 1}}>    
                    <DetailToolkit 
                        instructions={'Escriba la actividad física'}
                    />
            
                    <MainText><SubHeadingText>Actividad</SubHeadingText>  </MainText>
                    <TextInput
                            multiline = {true}
                            numberOfLines = {4} 
                            value={this.state.activity} 
                            style={[styles.inputStyleToolkit, {height: hp('20%')}]}
                            onChangeText={activity => this.setState({ activity } )} />
                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                    Guardar
                    </Button>
                    
            </View>
            </BodyScroll>
        )
    }

}

export default PhysicalDetail;

