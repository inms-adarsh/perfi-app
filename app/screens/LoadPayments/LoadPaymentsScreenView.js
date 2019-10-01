import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  LoadPaymentsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const LoadPayments = ({
  loadpayments,
  goEditLoadPayment,
  goAddLoadPayment,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(loadpayments)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search LoadPayments"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <LoadPaymentsList
        loadpayments={ loadpayments }
        onSelect={goEditLoadPayment }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddLoadPayment }
      />

    </View>
  );
};

LoadPayments.propTypes = {
  loadpayments: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditLoadPayment: T.func,
  goAddLoadPayment: T.func
};

export default LoadPayments;
