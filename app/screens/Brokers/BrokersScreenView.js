import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  BrokersList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Brokers = ({
  brokers,
  goEditBroker,
  goAddBroker,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(brokers)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Brokers"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <BrokersList
        brokers={ brokers }
        onSelect={goEditBroker }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddBroker }
      />

    </View>
  );
};

Brokers.propTypes = {
  brokers: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditBroker: T.func,
  goAddBroker: T.func
};

export default Brokers;
