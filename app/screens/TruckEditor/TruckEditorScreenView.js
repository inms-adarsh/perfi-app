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


const TruckEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setCarrierNo,
    carrierNo,
    onSelectTruck,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Carrier No."
                value={carrierNo}
                onChangeText={setCarrierNo}
                containerStyle={s.inputContainer}
              />
            <Input
              isValid
              placeholder="Capacity"
              value={ props.capacity }
              onChangeText={ props.setCapacity }
              containerStyle={s.inputContainer}
            />
            <Picker
              selectedValue={ props.unit }
              style={s.selector}
              onValueChange={props.onSelectUnit }>
              <Picker.Item label="Individual" value="individual" />
              <Picker.Item label="Company" value="company" />
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

TruckEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('truck')(navigation) ? 'Edit Truck' : 'New Truck'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

TruckEditor.propTypes = {
  carrierNo: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setCarrierNo: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	unit: T.string,
	onSelectUnit: T.func,
	capacity: T.string,
	setCapacity: T.func,
};

export default TruckEditor;
