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
  FormInput,
} from '../../components';
import s from './styles';
import { dimensions } from '../../styles';


const CheckCallEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectCheckCall,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="CheckCall name"
                value={name}
                onChangeText={setName}
                containerStyle={s.inputContainer}
              />
            <FormInput
              style={s.selector}
              value={ props.truckName }
              onPress={ props.selectTruck }
              containerStyle={s.selectorContainer}
              isSelected={props.isSelectedTruck }
            />
            <Input
              isValid
              placeholder="Current Odometer"
              value={ props.odometer }
              onChangeText={ props.setOdometer }
              containerStyle={s.inputContainer}
            />
            <Picker
              selectedValue={ props.activity }
              style={s.selector}
              onValueChange={props.onSelectActivity} >
              <Picker.Item label="Individual" value="individual" />
              <Picker.Item label="Company" value="company" />
            </Picker>
            <Picker
              selectedValue={ props.reason }
              style={s.selector}
              onValueChange={props.onSelectReason} >
              <Picker.Item label="Individual" value="individual" />
              <Picker.Item label="Company" value="company" />
            </Picker>
            <FormInput
              style={s.selector}
              value={ props.currentLocationName }
              onPress={ props.selectCurrentLocation }
              containerStyle={s.selectorContainer}
              isSelected={props.isSelectedCurrentLocation }
            />
            <Input
              isValid
              placeholder="Date"
              value={ props.date }
              onChangeText={ props.setDate }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Notes"
              value={ props.notes }
              onChangeText={ props.setNotes }
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

CheckCallEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('checkcall')(navigation) ? 'Edit CheckCall' : 'New CheckCall'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

CheckCallEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	notes: T.string,
	setNotes: T.func,
	date: T.string,
	setDate: T.func,
	currentLocationName: T.string,
	selectCurrentLocation: T.func,
	reason: T.string,
	onSelectReason: T.func,
	activity: T.string,
	onSelectActivity: T.func,
	odometer: T.string,
	setOdometer: T.func,
	truckName: T.string,
	selectTruck: T.func,
};

export default CheckCallEditor;
