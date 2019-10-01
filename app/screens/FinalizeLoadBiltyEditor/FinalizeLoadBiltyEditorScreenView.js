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


const FinalizeLoadBiltyEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setName,
    name,
    onSelectFinalizeLoadBilty,
    navigation,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>      
        <ScrollView>
          <View style={s.root}>
              <Input
                isValid
                placeholder="FinalizeLoadBilty name"
                value={name}
                onChangeText={setName}
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

FinalizeLoadBiltyEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('finalizeloadbilty')(navigation) ? 'Edit FinalizeLoadBilty' : 'New FinalizeLoadBilty'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

FinalizeLoadBiltyEditor.propTypes = {
  name: T.string,
  onSubmit: T.func,
  isValid: T.bool,
  setName: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
};

export default FinalizeLoadBiltyEditor;
