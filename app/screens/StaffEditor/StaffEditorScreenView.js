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


const StaffEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectStaff,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Staff name"
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
              placeholder="Email"
              value={ props.email }
              onChangeText={ props.setEmail }
              containerStyle={s.inputContainer}
              suffix="Optional"
            />
            <Input
              isValid
              placeholder="Address"
              value={ props.address }
              onChangeText={ props.setAddress }
              containerStyle={s.inputContainer}
              suffix="Optional"
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

StaffEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('staff')(navigation) ? 'Edit Staff' : 'New Staff'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

StaffEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	address: T.string,
	setAddress: T.func,
	email: T.string,
	setEmail: T.func,
	phone: T.string,
	setPhone: T.func,
};

export default StaffEditor;
