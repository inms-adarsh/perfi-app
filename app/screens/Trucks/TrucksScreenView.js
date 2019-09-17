import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  TrucksList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Trucks = ({
  trucks,
  goEditTruck,
  goAddTruck,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(trucks)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Trucks"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <TrucksList
        trucks={ trucks }
        onSelect={goEditTruck }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddTruck }
      />

    </View>
  );
};

Trucks.propTypes = {
  trucks: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditTruck: T.func,
  goAddTruck: T.func
};

export default Trucks;
