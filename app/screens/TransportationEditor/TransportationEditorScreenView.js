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


const TransportationEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectTransportation,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Transportation name"
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

TransportationEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('transportation')(navigation) ? 'Edit Transportation' : 'New Transportation'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

TransportationEditor.propTypes = {
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
	address: T.string,
	setAddress: T.func,
	email: T.string,
	setEmail: T.func,
	phone: T.string,
	setPhone: T.func,
};

export default TransportationEditor;
