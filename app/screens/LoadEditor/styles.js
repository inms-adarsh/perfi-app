import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '../../styles';


const { indent, verticalIndent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  selectTextStyle: {
    fontSize: fontSizes.medium,
  },
  selector: {
    alignItems: 'center',
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalIndent,
  },
  saveButton: {
    flexDirection: 'row',
    paddingHorizontal: indent
  },
  inlineInput: {
    flex: 0.7
  },
  inlineList: {
    flex: 0.3
  },
  flex50: {
    flex: 0.5
  },
  inputContainer: {
    marginBottom: dimensions.verticalIndent
  },
  label: {
    paddingTop: verticalIndent / 2,
    fontSize: fontSizes.verySmall - 1,
    color: colors.greyDarker,
  },
  selectorContainer: {
    marginBottom: dimensions.verticalIndent,
  },
  secondContainer: {
    alignItems: 'center',
    marginRight: indent,
    paddingTop: fontSizes.verySmall,
  },
  label: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700',
  },
  mainContentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

export default styles;
