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


const LocationEditor = (props) => {
  const {
    isValid,
    onSubmit,
    onSelectLocation,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
            <Input
              isValid
              placeholder="City"
              value={ props.city }
              onChangeText={ props.setCity }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="State"
              value={ props.state }
              onChangeText={ props.setState }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Address"
              value={ props.address }
              suffix="Optional"
              onChangeText={ props.setAddress }
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

LocationEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('location')(navigation) ? 'Edit Location' : 'New Location'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

LocationEditor.propTypes = {
  onSubmit: T.func,
  isValid: T.bool,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	address: T.string,
	setAddress: T.func,
	state: T.string,
	setState: T.func,
	city: T.string,
	setCity: T.func,
};

export default LocationEditor;
