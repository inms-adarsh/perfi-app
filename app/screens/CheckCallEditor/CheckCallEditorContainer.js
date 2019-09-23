import {
    compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
    withPropsOnChange,
  } from 'recompose';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { Keyboard, ToastAndroid } from 'react-native';
  import CheckCallEditor from './CheckCallEditorScreenView';
  import { getParam } from '../../utils/navHelpers';
  import { firestoreConnect } from 'react-redux-firebase'
  /*-- IMPORT SCREENS --*/
  
  const screenProp = (propName, def) => R.pathOr(def, ['checkcall', propName]); 
  const requiredProps = ['name', 'truck', 'odometer', 'activity', 'reason', 'currentLocation', 'date', 'notes',/*-- ADD PROPS --*/];
  const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));
  const isFieldsNotEmpty = R.pipe(R.props, R.none(R.isEmpty));
  const enhance = compose(
    firestoreConnect(),    
    connect((state, props) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile
    })),
    withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
    withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
    withProps(({ navigation }) => ({ checkcall: getParam('checkcall')(navigation) })),
   
    withState('name', 'setName', screenProp('name', '')),
    /*-- ADD STATE PROPS --*/
		withState('notes', 'setNotes', screenProp('notes', '')),
		withState('date', 'setDate', screenProp('date', '')),
    withState('currentLocationName', 'setCurrentLocationName', null),
    withState('isSelectedCurrentLocation', 'setSelectedCurrentLocation', false),
    withState('currentlocation', 'setCurrentLocation', null),
		withState('reason', 'setReason', screenProp('reason', '')),
		withState('activity', 'setActivity', screenProp('activity', '')),
		withState('odometer', 'setOdometer', screenProp('odometer', '')),
    withState('truckName', 'setTruckName', null),
    withState('isSelectedTruck', 'setSelectedTruck', false),
    withState('truck', 'setTruck', null),

    /*-- ADD NAV PROPS --*/
		withProps(({navigation}) => ({ selectedCurrentLocation: getParam('currentLocation')(navigation) })),
		withProps(({navigation}) => ({ selectedTruck: getParam('truck')(navigation) })),
    withProps(({ truck, currentLocation,/*-- FETCH PROPS --*/}) => ({
      /*-- ADD LOOKUP PROPS --*/
		currentLocationName: R.pathOr('Select CurrentLocation', ['name'], currentLocation),
		truckName: R.pathOr('Select Truck', ['name'], truck),
    })),    
    withHandlers({
    
      onSubmit: ({
        navigation, firestore, auth, profile, listUrl, checkcall, onClose, ...props
      }) => () => {
        Keyboard.dismiss();
        const editedProps = R.pick(['name', 'truck', 'odometer', 'activity', 'reason', 'currentLocation', 'date', 'notes',/*-- ADD PROPS --*/], props);
        const propsToSubmit = checkcall ? Object.assign(checkcall, editedProps) : editedProps;
        let promise = {};
        if( checkcall) {
          Object.assign(propsToSubmit, {
            updatedByUser: auth.uid,
            updatedByTenantId: profile.tenantId,
            updatedDate: new Date()
          });
          promise = firestore.set('tenants/'+ profile.tenantId +'/checkcalls/' + checkcall.id, propsToSubmit)
        } else {
          Object.assign(propsToSubmit, {
            createdByUser: auth.uid,
            createdByTenantId: profile.tenantId,
            createdDate: new Date()
          });
          promise = firestore.add('tenants/' + profile.tenantId + '/checkcalls', propsToSubmit)
        }

        promise.then(() => {
          ToastAndroid.show('CheckCall has been saved successfully!', ToastAndroid.BOTTOM);
        }, (e) => {
          ToastAndroid.show('Error saving checkcall! Please try again', ToastAndroid.BOTTOM);
        });
        if(listUrl) {
          navigation.navigate(listUrl);
        } else {
          navigation.goBack(null);
        }
      },
      /*-- ADD SELECT PROPS --*/
      onSelectReason: ({ setReason }) => (val) => {
        setReason(val);
      },
    
      onSelectActivity: ({ setActivity }) => (val) => {
        setActivity(val);
      },
    
      /*-- ADD FORMINPUT HANDLER --*/
      selectCurrentLocation: ({ navigation }) => () => {
        const { routeName } = navigation.state;
        navigation.navigate('CheckCallLocationsList', {
          backUrl: routeName,
          editorUrl: 'CheckCallLocationsListEditor'
        })
      },
    
      selectTruck: ({ navigation }) => () => {
        const { routeName } = navigation.state;
        navigation.navigate('CheckCallTrucksList', {
          backUrl: routeName,
          editorUrl: 'CheckCallTrucksListEditor'
        })
      },
    
    }),
    withPropsOnChange(
      requiredProps,
      props => ({ isValid: isFieldsNotEmpty(requiredProps, props) && isFieldsFilled(requiredProps, props) }),
    ),    
    lifecycle({
      componentDidMount() {
        const {
          checkcall,
          setName,
          setSelectedTruck,
          setTruck,
          setSelectedCurrentLocation,
          setCurrentLocation,
          /*-- SET FORMINPUT VALUE --*/
        } = this.props;

        if(checkcall) {
          const { name,  truck, currentLocation,/*-- FETCH PROPS --*/ } = checkcall;
          setName(name);
          setSelectedTruck(true);
          setTruck(truck);
          setSelectedCurrentLocation(true);
          setCurrentLocation(currentLocation);
          /*-- SET PROPS --*/
        }
      },
      componentDidUpdate(prevProps) {
        const {
          setSelectedTruck,
          setTruck,
          selectedTruck: newTruck,
          setSelectedCurrentLocation,
          setCurrentLocation,
          selectedCurrentLocation: newCurrentLocation,
          /*-- SET FORMINPUT UPDATED VALUE --*/
        } = this.props;
        const {
           truck: prevTruck, currentLocation: prevCurrentLocation,/*-- FETCH PREV FORMINPUT VALUE --*/
        } = prevProps;
        
        if (newTruck && newTruck !== prevTruck) {
          setSelectedTruck(true);
          setTruck(newTruck);
        }
        if (newCurrentLocation && newCurrentLocation !== prevCurrentLocation) {
          setSelectedCurrentLocation(true);
          setCurrentLocation(newCurrentLocation);
        }
        /*-- SET UPDATED VALUES --*/
      },
    }),
  );
  
  
  export default hoistStatics(enhance)(CheckCallEditor);
  