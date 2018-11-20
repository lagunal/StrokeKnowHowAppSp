import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        } from 'react-native-responsive-screen';

import SubHeadingText from './SubHeadingText';
import ModalLogin from '../../screens/Toolkits/ModalLoginScreen';


class Message extends Component {
    
    state = {
        showModal: false
    }
    
    pressHandler = () => {
        // this.props.navigator.switchToTab({
        //     tabIndex: 3 
        // });
        this.setState((prevState) => {
            return {            
                showModal: !prevState.showModal
            }    
        });
    }
    
    render(){
            return(
                <View>
                    <ModalLogin show={this.state.showModal} 
                                setModalVisible={this.pressHandler}
                                {...this.props}
                    />
                    <TouchableOpacity onPress={this.pressHandler}>
                        <SubHeadingText style={{color: 'red', fontSize: hp('2%')}}
                        >Usted debe autenticarse para usar el formulario {'\n'}Por favor haga Click aquí 
                        </SubHeadingText>
                    </TouchableOpacity>
                </View>
            )
    }
}

export default Message;