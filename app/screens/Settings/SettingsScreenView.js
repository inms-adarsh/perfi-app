import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  SettingsList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const Settings = ({
  settings,
  goEditSetting,
  goAddSetting,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(settings)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search Settings"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <SettingsList
        settings={ settings }
        onSelect={goEditSetting }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddSetting }
      />

    </View>
  );
};

Settings.propTypes = {
  settings: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditSetting: T.func,
  goAddSetting: T.func
};

export default Settings;
