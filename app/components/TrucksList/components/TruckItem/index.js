import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { pure } from 'recompose';
import RoundIcon from '../../../RoundIcon';
import TouchableItem from '../../../TouchableItem';
import s from './styles';

import { colors } from '../../../../styles';


const Item = ({
  item,
  onSelect,
}) => (
  <TouchableItem
    style={s.container}
    onPress={() => onSelect(item)}
  >
    <View style={s.icon}>
      <RoundIcon
        name="face"
        border={s.border}
        backgroundColor={colors.white}
        tintColor={colors.greyDarker}
      />
    </View>
    <View style={s.mainContentContainer}>
      <Text style={s.title}>{item.carrierNo}</Text>
    </View>
  </TouchableItem>
);

Item.propTypes = {
  item: T.object,
  onSelect: T.func,

};

export default pure(Item);

