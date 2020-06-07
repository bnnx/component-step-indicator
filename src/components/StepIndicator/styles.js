import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  stepsView: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('9%'),
    marginBottom: 5,
  },
  checkButton: {
    height: 24,
    width: 24,
    borderRadius: 100/2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  onPageButton: {
    backgroundColor: '#FF9057',
    height: 24,
    width: 24,
    borderRadius: 100/2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  onPageButtonText: {
    color: '#FFF',
    fontFamily: 'GothamRounded-Bold'
  },
  nextPageButton: {
    height: 24,
    width: 24,
    borderRadius: 100/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF9057',
    marginHorizontal: 10
  },
  nextPageButtonText: {
    color: '#FF9057',
    fontFamily: 'GothamRounded-Bold'
  }
});