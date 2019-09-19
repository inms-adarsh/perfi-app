import React from 'react';
import { View, ScrollView, Picker, Text, FlatList, Button as AddButton } from 'react-native';
import T from 'prop-types';
import { getParam } from '../../utils/navHelpers';
import DeleteButton from './DeleteButton';
import SaveButton from './AddButton';
import {
  Input,
  Button,
  KeyboardAvoidingView,
  Select,
  ScreenWrapper,
  HeaderTitle,
  FormInput,
  Separator,
  EmptyList,
  SegmentedControl,
  TabContainer,
} from '../../components';
import s from './styles';
import LoadItem from './Item';

const tabs = ['Customer', 'Location', 'Freight', 'Insurance'];

const LoadEditor = (props) => {
  const {
    isValid,
    onSubmit,
    setLoadNo,
    loadNo,
    addItem,
    navigation,
    items,
    onSelect,
    selectedTabIndex,
    setSelectedTabIndex,
  } = props;
  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <LoadItem
      item={item}
      onSelect={onSelect}
    />
  );
  return (
    <View style={s.root}>
      <ScreenWrapper>
        <View style={s.root}>
          <Input
            isValid
            placeholder="Load no"
            value={loadNo}
            onChangeText={setLoadNo}
            containerStyle={s.inputContainer}
            keyboardType="numeric"
          />
          <SegmentedControl
            values={tabs}
            selectedIndex={selectedTabIndex}
            onTabPress={setSelectedTabIndex}
          />

          <TabContainer
            selectedTabIndex={selectedTabIndex}
            tabIndex={0}
            topOffset={105}
          >
            <ScrollView>
              <View>
                <Text style={[s.label]}>Select Customer Type</Text>
                <Picker
                  selectedValue={props.customerType}
                  style={s.selector}
                  onValueChange={props.onSelectCustomerType}>
                  <Picker.Item label="Customer" value="customer" />
                  <Picker.Item label="Broker" value="broker" />
                  <Picker.Item label="Transportation" value="transportation" />
                </Picker>
              </View>
              {props.customerType === 'customer' && (
                <FormInput
                  style={s.selector}
                  value={props.customerName}
                  onPress={props.selectCustomer}
                  label='Customer'
                  containerStyle={s.selectorContainer}
                  isSelected={props.isSelectedCustomer}
                />
              )}
              {props.customerType === 'broker' && (
                <FormInput
                  style={s.selector}
                  label='Broker'
                  value={props.brokerName}
                  onPress={props.selectBroker}
                  containerStyle={s.selectorContainer}
                  isSelected={props.isSelectedBroker}
                />
              )}
              {props.customerType === 'transportation' && (
                <FormInput
                  style={s.selector}
                  label='Transportation'
                  value={props.transportationName}
                  onPress={props.selectTransportation}
                  containerStyle={s.selectorContainer}
                  isSelected={props.isSelectedTransportation}
                />
              )}
              <FormInput
                style={s.selector}
                label='Consignor'
                value={props.consignorName}
                onPress={props.selectConsignor}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedConsignor}
              />
              <FormInput
                style={s.selector}
                value={props.consigneeName}
                label='Consignee'
                onPress={props.selectConsignee}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedConsignee}
              />
            </ScrollView>
          </TabContainer>
          <TabContainer
            selectedTabIndex={selectedTabIndex}
            tabIndex={1}
            topOffset={105}
          >
            <ScrollView>
              <FormInput
                style={s.selector}
                label="From"
                value={props.fromLocationName}
                onPress={props.selectFromLocation}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedFromLocation}
              />
              <FormInput
                style={s.selector}
                label="To"
                value={props.toLocationName}
                onPress={props.selectToLocation}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedToLocation}
              />
              <Input
                isValid
                label='Delivery Address'
                placeholder="Delivery Address"
                value={props.deliveryAddress}
                onChangeText={props.setDeliveryAddress}
                containerStyle={s.inputContainer}
              />

              <FormInput
                style={s.selector}
                label="Select Driver"
                value={props.driverName}
                onPress={props.selectDriver}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedDriver}
              />
              <FormInput
                style={s.selector}
                label="Select Carrier"
                value={props.truckName}
                onPress={props.selectTruck}
                containerStyle={s.selectorContainer}
                isSelected={props.isSelectedTruck}
              />
            </ScrollView>
          </TabContainer>
          <TabContainer
            selectedTabIndex={selectedTabIndex}
            tabIndex={2}
            topOffset={105}
          >
            <ScrollView>
              <View style={[s.container]}>
                <View style={s.flex50}>
                  <Text style={[s.label]}>Freight Paid By</Text>
                  <Picker
                    selectedValue={props.freightBy}
                    style={s.selector}
                    onValueChange={props.onSelectFreightBy}>
                    <Picker.Item label="Consignor" value="consignor" />
                    <Picker.Item label="Consignee" value="consignee" />
                    <Picker.Item label="Broker" value="broker" />
                  </Picker>
                </View>
                <View style={s.flex50}>
                  <Text style={[s.label]}>GST Paid By</Text>
                  <Picker
                    selectedValue={props.gstBy}
                    style={s.selector}
                    onValueChange={props.onSelectGstBy}>
                    <Picker.Item label="Consignor" value="consignor" />
                    <Picker.Item label="Consignee" value="consignee" />
                    <Picker.Item label="Transporter" value="transporter" />
                  </Picker>
                </View>
              </View>
              <View>
                <Text style={[s.label]}>Add Items</Text>
                <FlatList
                  data={items}
                  renderItem={_renderItem}
                  keyExtractor={(item, index) => index}
                  ItemSeparatorComponent={Separator}
                  ListEmptyComponent={<View containerStyle={s.emptyList}><Text>No Items</Text></View>}
                  ListFooterComponent={items.length ? <View style={s.footer}><Separator /></View> : null}>
                </FlatList>
                <AddButton onPress={addItem} title="Add Item"></AddButton>
              </View>
              <Input
                isValid
                placeholder="Goods Value"
                label="Goods Value"
                keyboardType='numeric'
                value={props.goodsValue}
                onChangeText={props.setGoodsValue}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="E-Way Bill No"
                label="E-Way Bill No"
                value={props.eWayBill}
                onChangeText={props.setEWayBill}
                containerStyle={s.inputContainer}
                suffix="Optional"
              />
              <View style={s.container} >
                <Input
                  isValid
                  placeholder="Total Quantity"
                  label="Total Quantity"
                  keyboardType='numeric'
                  value={props.totalQuantity}
                  onChangeText={props.onChangeTotalQuantity}
                  containerStyle={[s.inputContainer, s.inlineInput]}
                />
                <View style={s.inlineList}>
                  <Text style={[s.label]}>Units</Text>
                  <Picker
                    selectedValue={props.quantityUnit}
                    style={s.selector}
                    onValueChange={props.selectQuantityUnit}>
                    <Picker.Item label="Tons" value="tons" />
                    <Picker.Item label="Lbs" value="lbs" />
                    <Picker.Item label="Packets" value="packets" />
                    <Picker.Item label="Pieces" value="pieces" />
                  </Picker>
                </View>
              </View>
              <Input
                isValid
                placeholder="Rate per unit"
                label="Rate per unit"
                keyboardType='numeric'
                value={props.ratePerUnit}
                onChangeText={props.onChangeRatePerUnit}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="Freight"
                label="Freight"
                keyboardType='numeric'
                value={props.freight}
                onChangeText={props.setFreight}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="Hamali"
                label="Hamali"
                keyboardType='numeric'
                value={props.hamali}
                onChangeText={props.setHamali}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="Haltage"
                label="Haltage"
                keyboardType='numeric'
                value={props.haltage}
                onChangeText={props.setHaltage}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="Other Charges"
                label="Other Charges"
                keyboardType='numeric'
                value={props.otherCharges}
                onChangeText={props.setOtherCharges}
                containerStyle={s.inputContainer}
                suffix="₹"

              />
              <View style={[s.container]}>
                <Input
                  isValid
                  placeholder="Total Freight Without GST"
                  label="Total Freight Without GST"
                  keyboardType='numeric'
                  value={props.valueWithoutGst}
                  onChangeText={props.setValueWithoutGst}
                  containerStyle={[s.inputContainer, s.inlineInput]}
                  suffix="₹"
                />
                <Input
                  isValid
                  placeholder="GST"
                  label="GST"
                  keyboardType='numeric'
                  value={props.gst}
                  onChangeText={props.setGst}
                  containerStyle={[s.inputContainer, s.inlineList]}
                  suffix="%"
                />
              </View>
              <Input
                isValid
                placeholder="Total Freight"
                label="Total Freight"
                keyboardType='numeric'
                value={props.totalFreight}
                onChangeText={props.setTotalFreight}
                containerStyle={s.inputContainer}
                suffix="₹"
              />

              <Input
                isValid
                placeholder="Advance Payment"
                label="Advance Payment"
                value={props.advancePaid}
                keyboardType="numeric"
                onChangeText={props.setAdvancePaid}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
              <Input
                isValid
                placeholder="To Pay"
                label="To Pay"
                value={props.toPay}
                keyboardType="numeric"
                onChangeText={props.setToPay}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
            </ScrollView>
          </TabContainer>
          <TabContainer
            selectedTabIndex={selectedTabIndex}
            tabIndex={3}
            topOffset={105}
          >
            <View>
              <Input
                isValid
                placeholder="Insurance Company"
                label="Insurance Company"
                value={props.insuranceCompany}
                onChangeText={props.setInsuranceCompany}
                containerStyle={s.inputContainer}
              />
              <Input
                isValid
                placeholder="Insurance Amount"
                label="Insurance Amount"
                value={props.insuredAmount}
                keyboardType="numeric"
                onChangeText={props.setInsuredAmount}
                containerStyle={s.inputContainer}
                suffix="₹"
              />
            </View>
          </TabContainer>

          {/*// -- ADD INPUT -- */}

        </View>
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

    </View >
  );
};

LoadEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
    <HeaderTitle title={getParam('load')(navigation) ? 'Edit Load' : 'New Load'} />,
  headerRight: (
    <View style={[s.saveButton]}>
      <AddButton
        navigation={navigation}
        onPress={navigation.getParam('onSubmit')}
        title='Save'
      />
      <DeleteButton navigation={navigation} />
    </View>
  ),
});

LoadEditor.propTypes = {
  loadNo: T.number,
  onSubmit: T.func,
  isValid: T.bool,
  setLoadNo: T.func,
  togglePicker: T.func,
  isPickerVisible: T.bool,
  navigation: T.object,
  addItem: T.func,
  items: T.array,
  onSelect: T.func,
  // -- ADD PROPS --
  toPay: T.number,
  setToPay: T.func,
  advancePaid: T.number,
  setAdvancePaid: T.func,
  truckName: T.string,
  selectTruck: T.func,
  driverName: T.string,
  selectDriver: T.func,
  insuredAmount: T.number,
  setInsuredAmount: T.func,
  insuranceCompany: T.string,
  setInsuranceCompany: T.func,
  gst: T.number,
  setGst: T.func,
  totalFreight: T.number,
  setTotalFreight: T.func,
  otherCharges: T.number,
  setOtherCharges: T.func,
  haltage: T.number,
  setHaltage: T.func,
  hamali: T.number,
  setHamali: T.func,
  freight: T.number,
  setFreight: T.func,
  ratePerUnit: T.number,
  setRatePerUnit: T.func,
  quantityUnit: T.string,
  onSelectQuantityUnit: T.func,
  totalQuantity: T.number,
  setTotalQuantity: T.func,
  eWayBill: T.string,
  setEWayBill: T.func,
  goodsValue: T.number,
  setGoodsValue: T.func,
  toLocationName: T.string,
  selectToLocation: T.func,
  fromLocationName: T.string,
  selectFromLocation: T.func,
  freightBy: T.string,
  onSelectFreightBy: T.func,
  gstBy: T.string,
  onSelectGstBy: T.func,
  transportationName: T.string,
  selectTransportation: T.func,
  customerType: T.string,
  onSelectCustomerType: T.func,
  deliveryAddress: T.string,
  setDeliveryAddress: T.func,
  consigneeName: T.string,
  selectConsignee: T.func,
  consignorName: T.string,
  selectConsignor: T.func,
  brokerName: T.string,
  selectBroker: T.func,
  customerName: T.string,
  selectCustomer: T.func,
  customerName: T.string,
  selectCustomer: T.func,
};

export default LoadEditor;
