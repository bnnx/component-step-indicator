import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import StepIndicator from '../../components/StepIndicator';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Step Indicator</Text>
      <StepIndicator totalSteps={5} currentStep={3}/>
    </View>
  )
}