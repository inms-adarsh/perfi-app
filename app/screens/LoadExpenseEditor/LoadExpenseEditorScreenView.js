import React from 'react';
import { View, ScrollView } from 'react-native';
import T from 'prop-types';
import DeleteButton from './DeleteButton';
import { getParam } from '../../utils/navHelpers';
import { dimensions } from '../../styles';
// import dateFormat from '../../constants/dateFormat';
import s from './styles';
import {
  Input,
  Button,
  KeyboardAvoidingView,
  DatePicker,
  ScreenWrapper,
  HeaderTitle,
  Select,
  FormInput,
  CategoriesList,
  Value,
} from '../../components';


const LoadExpenseEditor = (props) => {
  const {
    isValid,
    onSubmit,
    icon,
    date,
    value,
    note,
    setDate,
    accounts,
    account,
    isIncome,
    categoryName,
    categoryIcon,
    onUpdateNote,
    onToggleModal,
    isVisibleModal,
    onChangeAccount,
    incomeCategories,
    onChangeCategory,
    isReadyForSubmit,
    expenseCategories,
    isSelectedCategory,
  } = props;

  return (
    <View style={s.root}>
      <ScreenWrapper>
        <ScrollView>
          <View style={s.root}>
            <Select
              isAccount
              selectOption={account}
              options={accounts}
              containerStyle={s.selectorContainer}
              style={s.selector}
              defaultValue="Account"
              selectorsWidth={dimensions.containerWidth}
              onSelect={onChangeAccount}
              textStyle={s.selectTextStyle}
              optionHeight={dimensions.verticalIndent * 2.8}
            />
            <FormInput
              style={s.selector}
              containerStyle={s.selectorContainer}
              isSelected={isSelectedCategory}
              value={categoryName}
              icon={categoryIcon}
              onPress={onToggleModal}
            />
            <DatePicker
              isSelected
              placeholder="Initial date"
              onSelectDate={val => setDate(val)}
              defaultValue={date}
              // format={dateFormat.newAccountDateFormat}
              date={date}
            />
            <Input
              isValid
              placeholder="Note"
              value={note}
              onChangeText={onUpdateNote}
              containerStyle={s.noteContainer}
              iconRight={icon}
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
      <CategoriesList
        isModal
        isVisible={isVisibleModal}
        categories={isIncome ? incomeCategories : expenseCategories}
        onSelect={onChangeCategory}
        onToggleModal={onToggleModal}
      />
    </View>
  );
};

LoadExpenseEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
    <HeaderTitle title={getParam('loadexpense')(navigation) ? 'Edit LoadExpense' : 'New LoadExpense'} />,
  headerRight: <DeleteButton navigation={navigation} />,
});

LoadExpenseEditor.propTypes = {
  date: T.any,
  onSubmit: T.func,
  icon: T.object,
  setDate: T.func,
  value: T.number,
  onUpdateNote: T.func,
  note: T.string,
  accounts: T.array,
  account: T.object,
  onChangeAccount: T.func,
  expenseCategories: T.array,
  incomeCategories: T.array,
  categoryName: T.string,
  categoryIcon: T.object,
  isSelectedCategory: T.bool,
  onChangeCategory: T.func,
  onToggleModal: T.func,
  isIncome: T.bool,
  isVisibleModal: T.bool,
  isReadyForSubmit: T.bool,
  navigation: T.object,
  // -- ADD PROPS --
};

export default LoadExpenseEditor;
