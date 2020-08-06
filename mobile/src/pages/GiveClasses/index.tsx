import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return( 
    <View style= {styles.container}>
        <ImageBackground 
        resizeMode="contain" 
        source ={GiveClassesBgImage}
         style ={styles.content}>
             <Text style= {styles.title}>Do you want to be a Proffy?</Text>
             <Text style= {styles.description}>To get started, you need to sign up as professor in our web platform</Text>
        </ImageBackground>

        <RectButton onPress = {handleNavigateBack} style={styles.okButton}>
            <Text style= {styles.okButtonText}>OK</Text>

        </RectButton>
    </View>
    );
}

export default GiveClasses;