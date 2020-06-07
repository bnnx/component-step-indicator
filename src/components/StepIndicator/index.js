import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { styles } from './styles';

export default function StepIndicator({
  totalSteps,
  currentStep,
  color,
  checkedColor,
  size,
  fontFamily,
  fontSize,
  currentTextColor,
  borderWidthNext
}) {

  function RenderStepIndicator(props){
    const total = props.total;
    const current = props.current;
    let count = props.count;

    while (count <= total) {
      return (
        count < current 
          ? (
            <View style={styles.button}>
              <Icon name="check-circle" size={size + wp(1)} color={checkedColor} style={{alignSelf: 'center'}} />
            </View>
            )
          : count == current
              ? (
                <View style={[styles.button, { backgroundColor: color, width: size, height: size, borderRadius: size/2 }]}>
                  <Text style={{ color: currentTextColor, fontSize: fontSize, fontFamily: fontFamily }}>{count}</Text>
                </View>
                )
              : (
                <View style={[styles.button, { borderWidth: borderWidthNext, borderColor: color, width: size, height: size, borderRadius: size/2 }]}>
                  <Text style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}>{count}</Text>
                </View>
                )
      );
    }
  }

  return (
    <View style={styles.stepsView}>
      {[ ...Array(totalSteps)].map((step, i) => {
        let count = i + 1;
        return <RenderStepIndicator key={i} count={count} total={totalSteps} current={currentStep}/>
      })}
    </View>
  );
}

StepIndicator.prototype = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  color: PropTypes.string,
  checkedColor: PropTypes.string,
  size: PropTypes.number,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  currentTextColor: PropTypes.string,
  borderWidthNext: PropTypes.number,
};

StepIndicator.defaultProps = {
  color: '#FF9057',
  checkedColor: '#70BF60',
  size: wp(5.8),
  fontSize: wp(3.4),
  currentTextColor: '#FFF',
  borderWidthNext: wp(0.5)
};


