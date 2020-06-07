import * as React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export default function StepIndicator({
  totalSteps,
  currentStep,
  //color,
  //style
}) {

  function RenderStepIndicator(props){
    const total = props.total;
    const current = props.current;
    let count = props.count;

    // 'while' no lugar de 'for' já que não é possível usar o increment do mesmo aqui dentro

    while (count <= total) {
      return (
        count < current 
          ? (
            <View style={styles.checkButton}>
              <Icon name="check-circle" size={28} color='#70BF60' style={{alignSelf: 'center'}} />
            </View>
            )
          : count == current
              ? (
                <View style={styles.onPageButton}>
                  <Text style={styles.onPageButtonText}>{count}</Text>
                </View>
                )
              : (
                <View style={[styles.nextPageButton]}>
                  <Text style={styles.nextPageButtonText}>{count}</Text>
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

// validação das props
StepIndicator.prototype = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  //style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), //style OU é um objeto OU um array com vários objetos
  //color: PropTypes.string.isRequired,
};

StepIndicator.prototype = {
  // declaro o que não é obrigatório
  //color: '',
  //style: {},
};


