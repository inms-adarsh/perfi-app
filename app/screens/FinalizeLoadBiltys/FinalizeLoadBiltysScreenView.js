import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  FinalizeLoadBiltysList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const FinalizeLoadBiltys = ({
  finalizeloadbiltys,
  goEditFinalizeLoadBilty,
  goAddFinalizeLoadBilty,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(finalizeloadbiltys)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search FinalizeLoadBiltys"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <FinalizeLoadBiltysList
        finalizeloadbiltys={ finalizeloadbiltys }
        onSelect={goEditFinalizeLoadBilty }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddFinalizeLoadBilty }
      />

    </View>
  );
};

FinalizeLoadBiltys.propTypes = {
  finalizeloadbiltys: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditFinalizeLoadBilty: T.func,
  goAddFinalizeLoadBilty: T.func
};

export default FinalizeLoadBiltys;
