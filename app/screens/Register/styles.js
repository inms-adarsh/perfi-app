
import { StyleSheet } from 'react-native';

import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const { indent, verticalIndent } = dimensions;
const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingHorizontal: dimensions.indent,
    },
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: dimensions.indent,
        paddingVertical: dimensions.indent,
    },

    selectTextStyle: {
        fontSize: fontSizes.medium,
        paddingHorizontal: dimensions.indent,
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: dimensions.indent,
        paddingVertical: dimensions.indent,
        backgroundColor: colors.white,
    },
    title: {
        color: colors.greyDarker,
        fontSize: fontSizes.xmedium,
        fontWeight: fontWeights.bold,
        paddingBottom: dimensions.indent,
        alignSelf: 'center',
    },
    listStyle: {
        backgroundColor: colors.white,
        alignSelf: 'center',
    },
    pickedItemStyle: {
        color: colors.defaultPrimary,
        backgroundColor: colors.lightGray,
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalIndent,
    },

    label: {
        paddingTop: verticalIndent / 2,
        fontSize: fontSizes.verySmall - 1,
        color: colors.greyDarker,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    secondContainer: {
        alignItems: 'center',
        marginRight: indent,
        paddingTop: fontSizes.verySmall,
    },
    headerRight: {
        color: colors.red,
    }

});

export default styles;