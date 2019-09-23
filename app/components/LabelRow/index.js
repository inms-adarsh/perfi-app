import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { fontSizes, dimensions, colors, fontWeights } from '../../styles';
import { Text } from '../../components';

const styles = StyleSheet.create({
    leftText: {
        fontSize: fontSizes.small,
        fontWeight: '700'
    },
    rightText: {
        fontSize: fontSizes.small,
    },
    textContainer: {
        paddingBottom: dimensions.halfIndent,
        flexDirection: 'row',
    },
    withoutPaddingBottom: {
        paddingBottom: 0,
    },
    withoutPadding: {
        padding: 0,
    },
    rightContainer: {
        flexDirection: 'row',
    },
    date: {
        color: colors.greyDarker,
        fontWeight: fontWeights.extraBold,

    },
});

const LabelRow = ({ style, leftText, rightText }) => (
    <View style={[styles.textContainer, style]}>
        <Text style={styles.leftText}>{leftText}: </Text>
        {rightText ?
            <View style={styles.rightContainer}>
                <Text
                    style={styles.rightText}
                >{rightText}</Text>
            </View>
            :
            null
        }

    </View>
);

LabelRow.propTypes = {
    style: ViewPropTypes.style,
    leftText: T.string,
    rightText: T.string,
};

export default LabelRow;
