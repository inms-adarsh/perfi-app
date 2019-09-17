import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { pure } from 'recompose';
import TouchableItem from '../../components';
import s from './styles';


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
        </TouchableItem>
    );

Item.propTypes = {
    item: T.object,
    onSelect: T.func,

};

export default pure(Item);

