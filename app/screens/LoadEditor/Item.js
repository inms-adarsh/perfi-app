import React from 'react';
import T from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { pure } from 'recompose';
import { TouchableItem, RoundIcon } from '../../components';
import { dimensions, colors, fontSizes, scalingUtils } from '../../styles';


const s = StyleSheet.create({
    container: {
        height: scalingUtils.verticalScale(62),
        backgroundColor: colors.white,
        flexDirection: 'row',
    },
    mainContentContainer: {
        justifyContent: 'flex-start',
        flex: 1
    },

    icon: {
        padding: dimensions.indent,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    title: {
        color: colors.greyVeryDarker,
        fontSize: fontSizes.small,
        // fontWeight: fontWeights.extraBold,
    },

    border: {
        borderWidth: 1,
        borderColor: colors.greyDarker,
    },
})

const Item = ({
    item,
    onSelect,
}) => (
        <TouchableItem
            style={s.container}
            onPress={() => onSelect(item)}
        >
            <View style={s.mainContentContainer}>
                <Text style={s.title}>{item.name}</Text>
            </View>
            <View style={s.icon}>
                <RoundIcon
                    name='delete'
                    border={s.border}
                    backgroundColor={colors.white}
                    tintColor={colors.greyDarker}
                />
            </View>
        </TouchableItem>
    );

Item.propTypes = {
    item: T.object,
    onSelect: T.func,

};

export default pure(Item);

