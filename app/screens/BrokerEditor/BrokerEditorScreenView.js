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


const BrokerEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectBroker,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>
        <ScrollView>
          <View style={s.root}>            
            <Picker
              selectedValue={props.type}
              style={s.selector}
              onValueChange={props.onSelectType}>
              <Picker.Item label="Individual" value="individual" />
              <Picker.Item label="Company" value="company" />
            </Picker>
            <Input
              isValid
              placeholder="Broker name"
              value={name}
              onChangeText={setName}
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Phone No"
              value={props.phone}
              onChangeText={props.setPhone}
              containerStyle={s.inputContainer}
              keyboardType='numeric'
            />
            <Input
              isValid
              placeholder="Email"
              value={props.email}
              onChangeText={props.setEmail}
              containerStyle={s.inputContainer}
              suffix='Optional'
            />
            <Input
              isValid
              placeholder="Address"
              value={props.address}
              onChangeText={props.setAddress}
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="GSTIN"
              value={props.gst}
              onChangeText={props.setGst}
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

BrokerEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
    <HeaderTitle title={getParam('broker')(navigation) ? 'Edit Broker' : 'New Broker'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

BrokerEditor.propTypes = {
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
  gst: T.string,
  setGst: T.func,
  address: T.string,
  setAddress: T.func,
  email: T.string,
  setEmail: T.func,
  phone: T.string,
  setPhone: T.func,
};

export default BrokerEditor;
