import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  VendorsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Vendors = ({
  vendors,
  goEditVendor,
  goAddVendor,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(vendors)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Vendors"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <VendorsList
        vendors={ vendors }
        onSelect={goEditVendor }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddVendor }
      />

    </View>
  );
};

Vendors.propTypes = {
  vendors: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditVendor: T.func,
  goAddVendor: T.func
};

export default Vendors;
