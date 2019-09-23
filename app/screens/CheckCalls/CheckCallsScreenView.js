import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  CheckCallsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const CheckCalls = ({
  checkcalls,
  goEditCheckCall,
  goAddCheckCall,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(checkcalls)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search CheckCalls"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <CheckCallsList
        checkcalls={ checkcalls }
        onSelect={goEditCheckCall }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddCheckCall }
      />

    </View>
  );
};

CheckCalls.propTypes = {
  checkcalls: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditCheckCall: T.func,
  goAddCheckCall: T.func
};

export default CheckCalls;
