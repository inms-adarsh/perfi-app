import React from 'react';
import { View, ScrollView, Picker } from 'react-native';
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


const DriverEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectDriver,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Driver name"
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
              suffix='Optional'
            />
            <Picker
              selectedValue={ props.type }
              style={s.selector}
              onValueChange={props.onSelectType} >
              <Picker.Item label="Employee" value="Employee" />
              <Picker.Item label="Contractor" value="Contractor" />
            </Picker>
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

DriverEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('driver')(navigation) ? 'Edit Driver' : 'New Driver'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

DriverEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	type: T.string,
	onSelectType: T.func,
	address: T.string,
	setAddress: T.func,
	phone: T.string,
	setPhone: T.func,
};

export default DriverEditor;
