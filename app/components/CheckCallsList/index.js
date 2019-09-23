import React from 'react';
import T from 'prop-types';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text';
import Separator from '../Separator'
import { CheckCallItem } from './components';
import { EmptyList } from '../../components';
import s from './styles';


const CheckCallsList = ({
  checkcalls,
  isVisible,
  onToggleModal,
  onSelect,
  isModal,
}) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <CheckCallItem
      item={item}
      onSelect={onSelect}
    />
  );
  return isModal ?

    <View>
      <View style={s.calendarIcon}>
        <TouchableOpacity onPress={onToggleModal} />
      </View>

      <Modal
        style={s.modal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={isVisible}
        onBackdropPress={onToggleModal}
      >
        <View style={s.container}>
          <View>
            <Text style={s.headerText}>Choose checkcall</Text>
            <Separator />
          </View>
          <FlatList
            data={ checkcalls }
            renderItem={_renderItem}
            keyExtractor={_keyExtractor}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={ checkcalls.length ? <Separator /> : null}
          />
        </View>
      </Modal>
    </View>

    :

    <View style={s.listContainer}>
      <Separator />
      <FlatList
        data={ checkcalls }
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={Separator}        
        ListEmptyComponent={<EmptyList text="No CheckCalls" containerStyle={s.emptyList} />}
        ListFooterComponent={ checkcalls.length ? <View style={s.footer}><Separator /></View> : null}
      />
    </View>;
};

CheckCallsList.propTypes = {
  isModal: T.bool,
  isVisible: T.bool,
  onToggleModal: T.func,
  onSelect: T.func,
  checkcalls: T.array,

};

export default CheckCallsList;
