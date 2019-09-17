import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  ItemsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Items = ({
  items,
  goEditItem,
  goAddItem,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(items)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Items"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <ItemsList
        items={ items }
        onSelect={goEditItem }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddItem }
      />

    </View>
  );
};

Items.propTypes = {
  items: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditItem: T.func,
  goAddItem: T.func
};

export default Items;
