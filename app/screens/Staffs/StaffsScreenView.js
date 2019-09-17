import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  StaffsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Staffs = ({
  staffs,
  goEditStaff,
  goAddStaff,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(staffs)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Staffs"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <StaffsList
        staffs={ staffs }
        onSelect={goEditStaff }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddStaff }
      />

    </View>
  );
};

Staffs.propTypes = {
  staffs: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditStaff: T.func,
  goAddStaff: T.func
};

export default Staffs;
