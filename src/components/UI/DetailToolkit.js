import React from 'react';
import { View, Text } from 'react-native';


const DetailToolkit = (props) => (
   
    <View>
        <Text>{`\u2022`} {props.instructions}</Text>
        <Text>{`\u2022`} Para reconocimiento de voz, puede usar el microfono del teclado virtual de su celular.</Text>
        <Text>{`\u2022`} Al finalizar presione el boton Guardar abajo, para salvar la información.</Text>
    </View>
);

export default DetailToolkit;

