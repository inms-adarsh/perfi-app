import React from 'react';
import { View, ScrollView, Text, Picker } from 'react-native';
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
            
            <View style={[s.container]}>
              <Input
                isValid
                placeholder="Actual Weight"
                label="Actual Weight"
                keyboardType='numeric'
                value={props.weight}
                onChangeText={props.setWeight}
                containerStyle={[s.inputContainer, s.inlineInput]}
              />
              <View style={s.inlineList}>
                <Text style={[s.label]}>Units</Text>
                <Picker
                  selectedValue={props.unit}
                  style={s.selector}
                  onValueChange={props.setUnit}>
                  <Picker.Item label="Tons" value="tons" />
                  <Picker.Item label="Lbs" value="lbs" />
                  <Picker.Item label="Packets" value="packets" />
                  <Picker.Item label="Pieces" value="pieces" />
                </Picker>
              </View>
            </View>
            <Input
              isValid
              placeholder="No. of Packets"
              value={props.packet}
              onChangeText={props.setPacket}
              containerStyle={s.inputContainer}
              keyboardType='numeric'
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
  packet: T.number,
  setPacket: T.func,
  unit: T.string,
  setUnit: T.func,
  weight: T.number,
  setWeight: T.func,
};

export default ItemEditor;
