import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  DriversList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Drivers = ({
  drivers,
  goEditDriver,
  goAddDriver,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(drivers)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Drivers"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <DriversList
        drivers={ drivers }
        onSelect={goEditDriver }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddDriver }
      />

    </View>
  );
};

Drivers.propTypes = {
  drivers: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditDriver: T.func,
  goAddDriver: T.func
};

export default Drivers;
