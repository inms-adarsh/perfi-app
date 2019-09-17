import {
  compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Keyboard, ToastAndroid, } from 'react-native';
import LoadEditor from './LoadEditorScreenView';
import { getParam } from '../../utils/navHelpers';
import { firestoreConnect } from 'react-redux-firebase'
/*-- IMPORT SCREENS --*/

const screenProp = (propName, def) => R.pathOr(def, ['load', propName]);
const requiredProps = ['loadNo', 'consignor', 'consignee', 'deliveryAddress', 'customerType', 'gstBy', 'freightBy', 'fromLocation', 'toLocation', 'goodsValue', 'eWayBill', 'totalQuantity', 'quantityUnit', 'ratePerUnit', 'freight', 'hamali', 'haltage', 'otherCharges', 'totalFreight', 'gst', 'insuranceCompany', 'insuredAmount', 'driver', 'truck', 'advancePaid', 'toPay',/*-- ADD PROPS --*/];
const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));

const enhance = compose(
  firestoreConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    currentLoadNumber: state.firebase.currentLoadNumber || 1
  })),
  firestoreConnect((props) => [{ collection: 'tenants', doc: props.profile.tenantId, subcollections: [{ collection: 'currentLoadNumber' }], storeAs: 'currentLoadNumber' }]),
  withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
  withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
  withProps(({ navigation }) => ({ load: getParam('load')(navigation) })),


  withState('items', 'setItems', screenProp('items', [])),
  withState('loadNo', 'setLoadNo', screenProp('currentLoadNumber', 1)),
  /*-- ADD STATE PROPS --*/
		withState('toPay', 'setToPay', screenProp('toPay', 0)),
		withState('advancePaid', 'setAdvancePaid', screenProp('advancePaid', 0)),
  withState('truckName', 'setTruckName', null),
  withState('isSelectedTruck', 'setSelectedTruck', false),
  withState('truck', 'setTruck', null),
  withState('driverName', 'setDriverName', null),
  withState('isSelectedDriver', 'setSelectedDriver', false),
  withState('driver', 'setDriver', null),
  withState('insuredAmount', 'setInsuredAmount', screenProp('insuredAmount', '')),
  withState('insuranceCompany', 'setInsuranceCompany', screenProp('insuranceCompany', '')),
  withState('gst', 'setGst', screenProp('gst', '')),
  withState('totalFreight', 'setTotalFreight', screenProp('totalFreight', '')),
  withState('otherCharges', 'setOtherCharges', screenProp('otherCharges', '')),
  withState('haltage', 'setHaltage', screenProp('haltage', '')),
  withState('hamali', 'setHamali', screenProp('hamali', '')),
  withState('freight', 'setFreight', screenProp('freight', '')),
  withState('ratePerUnit', 'setRatePerUnit', screenProp('ratePerUnit', '')),
  withState('quantityUnit', 'setQuantityUnit', screenProp('quantityUnit', '')),
  withState('totalQuantity', 'setTotalQuantity', screenProp('totalQuantity', '')),
  withState('eWayBill', 'setEWayBill', screenProp('eWayBill', '')),
  withState('goodsValue', 'setGoodsValue', screenProp('goodsValue', '')),
  withState('toLocationName', 'setToLocationName', null),
  withState('isSelectedToLocation', 'setSelectedToLocation', false),
  withState('tolocation', 'setToLocation', null),

  withState('fromLocationName', 'setFromLocationName', null),
  withState('isSelectedFromLocation', 'setSelectedFromLocation', false),
  withState('fromlocation', 'setFromLocation', null),

  withState('freightBy', 'setFreightBy', screenProp('freightBy', '')),

  withState('gstBy', 'setGstBy', screenProp('gstBy', '')),

  withState('transportationName', 'setTransportationName', null),
  withState('isSelectedTransportation', 'setSelectedTransportation', false),
  withState('transportation', 'setTransportation', null),

  withState('customerType', 'setCustomerType', screenProp('customerType', 'customer')),
  withState('deliveryAddress', 'setDeliveryAddress', screenProp('deliveryAddress', '')),

  withState('consigneeName', 'setConsigneeName', null),
  withState('isSelectedConsignee', 'setSelectedConsignee', false),
  withState('consignee', 'setConsignee', null),

  withState('consignorName', 'setConsignorName', null),
  withState('isSelectedConsignor', 'setSelectedConsignor', false),
  withState('consignor', 'setConsignor', null),

  withState('brokerName', 'setBrokerName', null),
  withState('isSelectedBroker', 'setSelectedBroker', false),
  withState('broker', 'setBroker', null),

  withState('customerName', 'setCustomerName', null),
  withState('isSelectedCustomer', 'setSelectedCustomer', false),
  withState('customer', 'setCustomer', null),
  withState('selectedTabIndex', 'setSelectedTabIndex', 0),
  withState('valueWithoutGst', 'setValueWithoutGst', 0),
  /*-- ADD NAV PROPS --*/
  withProps(({ navigation }) => ({ selectedTruck: getParam('truck')(navigation) })),
  withProps(({ navigation }) => ({ selectedDriver: getParam('driver')(navigation) })),
  withProps(({ navigation }) => ({ selectedToLocation: getParam('toLocation')(navigation) })),
  withProps(({ navigation }) => ({ selectedFromLocation: getParam('fromLocation')(navigation) })),
  withProps(({ navigation }) => ({ selectedTransportation: getParam('transportation')(navigation) })),
  withProps(({ navigation }) => ({ selectedConsignee: getParam('consignee')(navigation) })),
  withProps(({ navigation }) => ({ selectedConsignor: getParam('consignor')(navigation) })),
  withProps(({ navigation }) => ({ selectedBroker: getParam('broker')(navigation) })),
  withProps(({ navigation }) => ({ selectedCustomer: getParam('customer')(navigation) })),
  withProps(({ navigation }) => ({ item: getParam('item')(navigation) })),
  withProps(({ load, currentLoadNumber, customer, broker, consignor, consignee, transportation, fromLocation, toLocation, driver, truck,/*-- FETCH PROPS --*/ }) => ({
    /*-- ADD LOOKUP PROPS --*/
    truckName: R.pathOr('Select Truck', ['name'], truck),
    driverName: R.pathOr('Select Driver', ['name'], driver),
    toLocationName: R.pathOr('Select To Location', ['city'], toLocation),
    fromLocationName: R.pathOr('Select From Location', ['city'], fromLocation),
    transportationName: R.pathOr('Select Transportation', ['name'], transportation),
    consigneeName: R.pathOr('Select Consignee', ['name'], consignee),
    consignorName: R.pathOr('Select Consignor', ['name'], consignor),
    brokerName: R.pathOr('Select Broker', ['name'], broker),
    customerName: R.pathOr('Select Customer', ['name'], customer),
    currentLoadNumber: R.pathOr(currentLoadNumber, ['loadNo'], load)
  })),
  withPropsOnChange(['item'], ({ item, items }) => ({
    items: item ? [...items, item] : [],
  })),
  // withProps(props => ({
  //   items: props.items? R.concat(props.items, props.item): [],
  // })),

  withHandlers({

    onSubmit: ({
      navigation, firestore, auth, profile, listUrl, load, onClose, ...props
    }) => () => {
      Keyboard.dismiss();
      const editedProps = R.pick(['loadNo', 'customer', 'broker', 'consignor', 'consignee', 'deliveryAddress', 'customerType', 'transportation', 'gstBy', 'freightBy', 'fromLocation', 'toLocation', 'goodsValue', 'eWayBill', 'totalQuantity', 'quantityUnit', 'ratePerUnit', 'freight', 'hamali', 'haltage', 'otherCharges', 'totalFreight', 'gst', 'insuranceCompany', 'insuredAmount', 'driver', 'truck', 'advancePaid', 'toPay',/*-- ADD PROPS --*/], props);
      const propsToSubmit = load ? Object.assign(load, editedProps) : editedProps;
      let promise = {};
      if (load) {
        Object.assign(propsToSubmit, {
          updatedByUser: auth.uid,
          updatedByTenantId: profile.tenantId,
          updatedDate: new Date()
        });
        promise = firestore.set('tenants/' + profile.tenantId + '/loads/' + load.id, propsToSubmit)
      } else {
        Object.assign(propsToSubmit, {
          createdByUser: auth.uid,
          createdByTenantId: profile.tenantId,
          createdDate: new Date()
        });
        promise = firestore.add('tenants/' + profile.tenantId + '/loads', propsToSubmit)
      }

      promise.then(() => {
        ToastAndroid.show('Load has been saved successfully!', ToastAndroid.BOTTOM);
      }, (e) => {
        ToastAndroid.show('Error saving load! Please try again', ToastAndroid.BOTTOM);
      });
      if (listUrl) {
        navigation.navigate(listUrl);
      } else {
        navigation.goBack(null);
      }
    },
    /*-- ADD SELECT PROPS --*/
    onSelectQuantityUnit: ({ setQuantityUnit }) => (val) => {
      setQuantityUnit(val);
    },

    onSelectFreightBy: ({ setFreightBy }) => (val) => {
      setFreightBy(val);
    },

    onSelectGstBy: ({ setGstBy }) => (val) => {
      setGstBy(val);
    },

    onSelectCustomerType: ({ setCustomerType }) => (val) => {
      setCustomerType(val);
    },

    /*-- ADD FORMINPUT HANDLER --*/
    selectTruck: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadTrucksList', {
        backUrl: routeName,
        editorUrl: 'LoadTrucksListEditor'
      })
    },

    selectDriver: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadDriversList', {
        backUrl: routeName,
        editorUrl: 'LoadDriversListEditor'
      })
    },

    selectToLocation: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadLocationsList', {
        backUrl: routeName,
        editorUrl: 'LoadLocationsListEditor',
        returnParam: 'toLocation'
      })
    },

    selectFromLocation: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadLocationsList', {
        backUrl: routeName,
        editorUrl: 'LoadLocationsListEditor',
        returnParam: 'fromLocation'
      })
    },

    selectTransportation: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadTransportationsList', {
        backUrl: routeName,
        editorUrl: 'LoadTransportationsListEditor'
      })
    },

    selectConsignee: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadCustomersList', {
        backUrl: routeName,
        editorUrl: 'LoadCustomersListEditor',
        returnParam: 'consignee'
      })
    },

    selectConsignor: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadCustomersList', {
        backUrl: routeName,
        editorUrl: 'LoadCustomersListEditor',
        returnParam: 'consignor'
      })
    },

    selectBroker: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadBrokersList', {
        backUrl: routeName,
        editorUrl: 'LoadBrokersListEditor'
      })
    },

    selectCustomer: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadCustomersList', {
        backUrl: routeName,
        editorUrl: 'LoadCustomersListEditor',
        returnParam: 'customer'
      })
    },

    addItem: ({ navigation }) => () => {
      const { routeName } = navigation.state;
      navigation.navigate('LoadItemAdd', {
        backUrl: routeName
      })
    },

    onChangeSetTotalQuantity: ({setTotalQuantity }) => (val) => {
      setTotalQuantity(val);
      calculateFreight();
    },

    onChangeRatePerUnit: ({ setRatePerUnit}) => (val) => {
      setRatePerUnit(val);
      calculateFreight();
    },

    onChangeGst: ({setGst}) => (val) => {
      setGst(val);
      calculateFreight();
    },

    calculateFreight: () => () => {

    }
  }),
  withPropsOnChange(
    requiredProps,
    props => ({ isValid: !!props.loadNo && props.loadNo.length > 0 && isFieldsFilled(requiredProps, props) }),
  ),
  withPropsOnChange(
    ['totalQuantity', 'gst', 'ratePerUnit', 'freight', 'hamali', 'haltage', 'otherCharges' , 'valueWithoutGst', 'advancePaid'],
    props => ({ 
      freight: (props.totalQuantity || 0) * (props.ratePerUnit || 0),
      valueWithoutGst: (props.freight || 0) +  (props.hamali || 0) + (props.haltage || 0) + (props.otherCharges || 0),
      totalFreight: (props.valueWithoutGst || 0 ) + ((props.valueWithoutGst || 0)*(props.gst || 0) * 0.01),
      toPay: ((props.totalFreight) - (props.advancePaid || 0))
    }),
  ),
  lifecycle({
    componentDidMount() {
      const {
        navigation,
        onSubmit,
        load,
        setLoadNo,
        setSelectedCustomer,
        setCustomer,
        setSelectedBroker,
        setBroker,
        setSelectedConsignor,
        setConsignor,
        setSelectedConsignee,
        setConsignee,
        setSelectedTransportation,
        setTransportation,
        setSelectedFromLocation,
        setFromLocation,
        setSelectedToLocation,
        setToLocation,
        setItems,
        setSelectedDriver,
        setDriver,
        setSelectedTruck,
        setTruck,
        /*-- SET FORMINPUT VALUE --*/
      } = this.props;

      if (load) {
        const { loadNo, customer, broker, consignor, consignee, transportation, fromLocation, toLocation, items, driver, truck,/*-- FETCH PROPS --*/ } = load;
        setLoadNo(loadNo);
        setSelectedCustomer(true);
        setCustomer(customer);
        setSelectedBroker(true);
        setBroker(broker);
        setSelectedConsignor(true);
        setConsignor(consignor);
        setSelectedConsignee(true);
        setConsignee(consignee);
        setSelectedTransportation(true);
        setTransportation(transportation);
        setSelectedFromLocation(true);
        setFromLocation(fromLocation);
        setSelectedToLocation(true);
        setToLocation(toLocation);
        setItems(items);
        setSelectedDriver(true);
        setDriver(driver);
        setSelectedTruck(true);
        setTruck(truck);
        /*-- SET PROPS --*/
      }
      navigation.setParams({ onSubmit: onSubmit });
    },
    componentDidUpdate(prevProps) {
      const {
        setSelectedCustomer,
        setCustomer,
        selectedCustomer: newCustomer,
        setSelectedBroker,
        setBroker,
        selectedBroker: newBroker,
        setSelectedConsignor,
        setConsignor,
        selectedConsignor: newConsignor,
        setSelectedConsignee,
        setConsignee,
        selectedConsignee: newConsignee,
        setSelectedTransportation,
        setTransportation,
        selectedTransportation: newTransportation,
        setDeliveryAddress,
        setSelectedFromLocation,
        setFromLocation,
        selectedFromLocation: newFromLocation,
        setSelectedToLocation,
        setToLocation,
        selectedToLocation: newToLocation,
        items,
        setItems,
        setSelectedDriver,
        setDriver,
        selectedDriver: newDriver,
        setSelectedTruck,
        setTruck,
        selectedTruck: newTruck,
        /*-- SET FORMINPUT UPDATED VALUE --*/
      } = this.props;
      const {
        items: prevItems, customer: prevCustomer, broker: prevBroker, consignor: prevConsignor, consignee: prevConsignee, transportation: prevTransportation, fromLocation: prevFromLocation, toLocation: prevToLocation, driver: prevDriver, truck: prevTruck,/*-- FETCH PREV FORMINPUT VALUE --*/
      } = prevProps;


      if (newCustomer && newCustomer !== prevCustomer) {
        setSelectedCustomer(true);
        setCustomer(newCustomer);
      }
      if (newBroker && newBroker !== prevBroker) {
        setSelectedBroker(true);
        setBroker(newBroker);
      }
      if (newConsignor && newConsignor !== prevConsignor) {
        setSelectedConsignor(true);
        setConsignor(newConsignor);
      }
      if (newConsignee && newConsignee !== prevConsignee) {
        const { address } = newConsignee;
        setSelectedConsignee(true);
        setConsignee(newConsignee);
        setDeliveryAddress(address);
      }
      if (newTransportation && newTransportation !== prevTransportation) {
        setSelectedTransportation(true);
        setTransportation(newTransportation);
      }
      if (newFromLocation && newFromLocation !== prevFromLocation) {
        setSelectedFromLocation(true);
        setFromLocation(newFromLocation);
      }
      if (newToLocation && newToLocation !== prevToLocation) {
        setSelectedToLocation(true);
        setToLocation(newToLocation);
      }
      if (items && items !== prevItems) {
        setItems(items);
      }
      if (newDriver && newDriver !== prevDriver) {
        setSelectedDriver(true);
        setDriver(newDriver);
      }
      if (newTruck && newTruck !== prevTruck) {
        setSelectedTruck(true);
        setTruck(newTruck);
      }
      /*-- SET UPDATED VALUES --*/
    },
  }),
);


export default hoistStatics(enhance)(LoadEditor);
