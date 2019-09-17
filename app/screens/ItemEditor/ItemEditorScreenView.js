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


const ItemEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectItem,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="Item name"
                value={name}
                onChangeText={setName}
                containerStyle={s.inputContainer}
              />
            <Input
              isValid
              placeholder="Actual Weight"
              value={ props.weight }
              onChangeText={ props.setWeight }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Unit"
              value={ props.unit }
              onChangeText={ props.setUnit }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Rate"
              value={ props.rate }
              onChangeText={ props.setRate }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="Freight"
              value={ props.freight }
              onChangeText={ props.setFreight }
              containerStyle={s.inputContainer}
            />
            <Input
              isValid
              placeholder="No. of Packets"
              value={ props.packet }
              onChangeText={ props.setPacket }
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

ItemEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('item')(navigation) ? 'Edit Item' : 'New Item'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

ItemEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
	packet: T.string,
	setPacket: T.func,
	freight: T.string,
	setFreight: T.func,
	rate: T.string,
	setRate: T.func,
	unit: T.string,
	setUnit: T.func,
	weight: T.string,
	setWeight: T.func,
};

export default ItemEditor;
