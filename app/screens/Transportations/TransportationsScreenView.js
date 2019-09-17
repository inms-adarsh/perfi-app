import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  TransportationsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Transportations = ({
  transportations,
  goEditTransportation,
  goAddTransportation,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(transportations)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Transportations"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <TransportationsList
        transportations={ transportations }
        onSelect={goEditTransportation }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddTransportation }
      />

    </View>
  );
};

Transportations.propTypes = {
  transportations: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditTransportation: T.func,
  goAddTransportation: T.func
};

export default Transportations;
