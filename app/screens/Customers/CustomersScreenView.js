import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  CustomersList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Customers = ({
  customers,
  goEditCustomer,
  goAddCustomer,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(customers)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Customers"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <CustomersList
        customers={ customers }
        onSelect={goEditCustomer }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddCustomer }
      />

    </View>
  );
};

Customers.propTypes = {
  customers: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditCustomer: T.func,
  goAddCustomer: T.func
};

export default Customers;
