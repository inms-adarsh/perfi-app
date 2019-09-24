import React from 'react';
import T from 'prop-types';
import ActionButton from 'react-native-action-button';
import {
  LoadExpensesList,
  Input,
  Loading as Loader
} from '../../components';
import s from './styles';
import { colors } from '../../styles';
import { View } from 'react-native';
import { isLoaded } from 'react-redux-firebase'


const LoadExpenses = ({
  loadexpenses,
  goEditLoadExpense,
  goAddLoadExpense,  
  search,
  searchTerm 
}) => {
  if (!isLoaded(loadexpenses)) {
    return <View style={s.emptyList}><Loader/></View>
  }
  return (
    <View style={s.container}>
      
      <View  style={s.selectors}>
        <Input placeholder="Search LoadExpenses"
          onChangeText={search}
          value={searchTerm}
          containerStyle={s.searchContainer}/>
      </View>
      <LoadExpensesList
        loadexpenses={ loadexpenses }
        onSelect={goEditLoadExpense }
      />

      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+"
        onPress={goAddLoadExpense }
      />

    </View>
  );
};

LoadExpenses.propTypes = {
  loadexpenses: T.array,
  search: T.func,
  searchTerm: T.string,
  goEditLoadExpense: T.func,
  goAddLoadExpense: T.func
};

export default LoadExpenses;
