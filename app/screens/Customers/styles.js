import { StyleSheet } from 'react-native';
import { dimensions, colors, } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    flex: 1,
    backgroundColor: colors.white,
  },
  searchContainer: {
    alignItems: 'center',
    borderRadius: 4,
  },
  selectors: {
    marginTop: dimensions.indent,
    paddingHorizontal: dimensions.indent,
  },
  emptyList: {
    paddingTop: dimensions.indent * 1.5,
  },
});

export default styles;
