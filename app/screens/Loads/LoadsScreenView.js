import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  LoadsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Loads = ({
  loads,
  goEditLoad,
  goAddLoad,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(loads)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Loads"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <LoadsList
        loads={ loads }
        onSelect={goEditLoad }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddLoad }
      />

    </View>
  );
};

Loads.propTypes = {
  loads: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditLoad: T.func,
  goAddLoad: T.func
};

export default Loads;
