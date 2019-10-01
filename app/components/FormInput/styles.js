import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

export default StyleSheet.create({

  inputStyle: {
    fontSize: fontSizes.medium,
    color: colors.blue,
  },
  selectedInputStile: {
    color: colors.black,
  },
  label: {
    paddingBottom: dimensions.indent / 2,
    paddingTop: dimensions.indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '500',
  },
  leftIconStyle: {
    paddingLeft: 0,
  },
  rightIconStyle: {
    paddingRight: 5,
  },
  secondInputContainer: {
    borderColor: colors.white,
  },
  selectedSecondInputContainer: {
    borderColor: colors.white,
  },
  containerStyle: {
  }
});
