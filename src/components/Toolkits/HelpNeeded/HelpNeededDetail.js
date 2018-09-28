import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import DetailToolkit from '../../UI/DetailToolkit';
import BodyScroll from "../../UI/BodyScroll";
import styles from "../../../styles/styles";
import ajax from '../../../ajax/ajax';

class ToolkitItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            helper: this.props.item.medication,
            monday: this.props.item.monday,
            tuesday: this.props.item.tuesday,
            wednesday: this.props.item.wednesday,
            thursday: this.props.item.thursday,
            friday: this.props.item.friday,
            saturday: this.props.item.saturday,
            sunday: this.props.item.sunday,
        }
        this.handleSwitchMonday = this.handleSwitchMonday.bind(this);
        this.handleSwitchTuesday = this.handleSwitchTuesday.bind(this);
        this.handleSwitchWednesday= this.handleSwitchWednesday.bind(this);
        this.handleSwitchThursday = this.handleSwitchThursday.bind(this);
        this.handleSwitchFriday = this.handleSwitchFriday.bind(this);
        this.handleSwitchSaturday = this.handleSwitchSaturday.bind(this);
        this.handleSwitchSunday = this.handleSwitchSunday.bind(this);
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
                        data[key] = (key === this.props.keyId[0]) ? this.state.helper : data[key];
                        data[key] = (key === this.props.keyId[1]) ? this.state.monday : data[key];
                        data[key] = (key === this.props.keyId[2]) ? this.state.tuesday : data[key];
                        data[key] = (key === this.props.keyId[3]) ? this.state.wednesday : data[key];
                        data[key] = (key === this.props.keyId[4]) ? this.state.thursday : data[key];
                        data[key] = (key === this.props.keyId[5]) ? this.state.friday : data[key];
                        data[key] = (key === this.props.keyId[6]) ? this.state.saturday : data[key];
                        data[key] = (key === this.props.keyId[7]) ? this.state.sunday : data[key];
                    }
                }

            let jsonData = JSON.stringify(data);
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'HelpNeeded');
            this.props.onPress();//calls the onPress event from parent 
    }

    //       }
    //     }
    // }

 

    handleSwitchMonday() {
        this.setState(prevState => ({
            monday: !prevState.monday
        }));
    }
    handleSwitchTuesday(){
        this.setState(prevState => ({
            tuesday: !prevState.tuesday
        }));
    }
    handleSwitchWednesday() {
        this.setState(prevState => ({
            wednesday: !prevState.wednesday 
        }));
    }
    handleSwitchThursday() {
        this.setState(prevState => ({
            thursday: !prevState.thursday 
        }));
    }
    handleSwitchFriday() {
        this.setState(prevState => ({
            friday: !prevState.friday 
        }));
    }
    handleSwitchSaturday() {
        this.setState(prevState => ({
            saturday: !prevState.saturday 
        }));
    }
    handleSwitchSunday() {
        this.setState(prevState => ({
            sunday: !prevState.sunday 
        }));
    }

    render(){
            const { item } = this.props;
            return(
            <BodyScroll>
               
                <DetailToolkit 
                    instructions={'Escriba la ayuda necesaria y seleccione los dias.'}
                />

                <View style={{flex: 1}}>    
                                    
                    <MainText><SubHeadingText>Ayuda</SubHeadingText>  </MainText>
                    <TextInput value={this.state.helper} 
                            style={styles.inputStyleToolkit}
                            onChangeText={helper => this.setState({ helper } )} />
                    
                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Lunes</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchMonday}
                            value={this.state.monday}
                        />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Martes</SubHeadingText>  </MainText>
                    <Switch 
                            onValueChange={this.handleSwitchTuesday}
                            value={this.state.tuesday}
                    />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Miércoles</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchWednesday}
                            value={this.state.wednesday}
                        />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Jueves</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchThursday}
                            value={this.state.thursday}                  
                        />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Viernes</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchFriday}
                            value={this.state.friday}
                        />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Sábado</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchSaturday}
                            value={this.state.saturday}
                        />
                    </View>

                    <View style={styleComponent.dayContainer}> 
                        <MainText><SubHeadingText>Domingo</SubHeadingText>  </MainText>
                        <Switch 
                            onValueChange={this.handleSwitchSunday}
                            value={this.state.sunday}
                        />
                    </View>

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

export default ToolkitItemDetail;

