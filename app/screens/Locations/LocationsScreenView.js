import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  LocationsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Locations = ({
  locations,
  goEditLocation,
  goAddLocation,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(locations)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Locations"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <LocationsList
        locations={ locations }
        onSelect={goEditLocation }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddLocation }
      />

    </View>
  );
};

Locations.propTypes = {
  locations: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditLocation: T.func,
  goAddLocation: T.func
};

export default Locations;
