import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  DriverSettlementsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const DriverSettlements = ({
  driversettlements,
  goEditDriverSettlement,
  goAddDriverSettlement,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(driversettlements)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search DriverSettlements"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <DriverSettlementsList
        driversettlements={ driversettlements }
        onSelect={goEditDriverSettlement }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddDriverSettlement }
      />

    </View>
  );
};

DriverSettlements.propTypes = {
  driversettlements: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditDriverSettlement: T.func,
  goAddDriverSettlement: T.func
};

export default DriverSettlements;
