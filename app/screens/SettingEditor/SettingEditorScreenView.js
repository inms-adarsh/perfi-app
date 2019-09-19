import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
import {
  Input,
  Button,
  KeyboardAvoidingView,
  Select,
  ScreenWrapper,
  HeaderTitle,  
  // -- ADD IMPORT FORMINPUT --
} from '../../components';
import s from './styles';
import { dimensions } from '../../styles';


const SettingEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectSetting,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Setting name"
                value={name}
                onChangeText={setName}
                containerStyle={s.inputContainer}
              />
            <Input
              isValid
              placeholder="Phone"
              value={ props.phone }
              onChangeText={ props.setPhone }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Address"
              value={ props.address }
              onChangeText={ props.setAddress }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="PAN No"
              value={ props.pan }
              onChangeText={ props.setPan }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Email"
              value={ props.email }
              onChangeText={ props.setEmail }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="GSTIN"
              value={ props.gst }
              onChangeText={ props.setGst }
              containerStyle={s.inputContainer}
            />
            {/*// -- ADD INPUT -- */}
           

          </View>
        </ScrollView>
      </ScreenWrapper>

      <KeyboardAvoidingView withHeader>
        {isValid &&
        <Button
          borderless
          secondaryOpacity
          title="Save"
          onPress={onSubmit}
        />
        }
      </KeyboardAvoidingView>

    </View>
  );
};

SettingEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('setting')(navigation) ? 'Edit Setting' : 'New Setting'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

SettingEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	gst: T.string,
	setGst: T.func,
	email: T.string,
	setEmail: T.func,
	pan: T.string,
	setPan: T.func,
	address: T.string,
	setAddress: T.func,
	phone: T.string,
	setPhone: T.func,
};

export default SettingEditor;