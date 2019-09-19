import React from 'react';
import T from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { pure } from 'recompose';
import { TouchableItem, RoundIcon } from '../../components';
import { dimensions, colors, fontSizes,fontWeights, scalingUtils } from '../../styles';


const s = StyleSheet.create({
    container: {
        height: scalingUtils.verticalScale(62),
        backgroundColor: colors.white,
        flexDirection: 'row',
    },
    mainContentContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    icon: {
        padding: dimensions.indent,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },


    border: {
        borderWidth: 1,
        borderColor: colors.greyDarker,
    },
})

const Item = ({
    item,
    onDelete,
}) => (
        <View
            style={s.container}
        >
            <View style={s.mainContentContainer}>
                <Text>Item name: {item.name}</Text>
                <Text>Weight: {item.weight} {item.unit}</Text>
            </View>
            <View style={s.icon}>
                <TouchableItem
                    onPress={() => onDelete(item)}>
                    <RoundIcon
                        name='delete'
                        border={s.border}
                        backgroundColor={colors.white}
                        tintColor={colors.greyDarker}
                    />
                </TouchableItem>
            </View>
        </View>
    );

Item.propTypes = {
    item: T.object,
    onDelete: T.func,

};

export default pure(Item);

