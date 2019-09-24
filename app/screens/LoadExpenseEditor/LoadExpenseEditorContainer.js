import {
  compose, withHandlers, withState, withProps, lifecycle, hoistStatics,
  withPropsOnChange,
} from 'recompose';
import R from 'ramda';
import { connect } from 'react-redux';
import { Keyboard, ToastAndroid } from 'react-native';
import LoadExpenseEditor from './LoadExpenseEditorScreenView';
import { getParam } from '../../utils/navHelpers';
import { firestoreConnect } from 'react-redux-firebase'

import { getAccounts } from '../../modules/accounts/selectors';
import { transactionsOperations } from '../../modules/transactions';
import { getExpenseCategory, getIncomeCategory } from '../../modules/categories/selectors';
import { colors } from '../../styles';
import types from '../../modules/navigator/types';
/*-- IMPORT SCREENS --*/

const screenProp = (propName, def) => R.pathOr(def, ['loadexpense', propName]);
const requiredProps = ['name',/*-- ADD PROPS --*/];
const isFieldsFilled = R.pipe(R.props, R.none(R.isNil));
const isFieldsNotEmpty = R.pipe(R.props, R.none(R.isEmpty));
const mapStateToProps = (state, { navigation }) => ({
  accounts: getAccounts(state),
  accountsById: state.accounts.byId,
  categoriesById: state.categories.byId,
  expenseCategories: getExpenseCategory(state.categories),
  incomeCategories: getIncomeCategory(state.categories),
  transaction: R.pathOr(null, ['transactions', 'byId', getParam('id')(navigation)], state),
});

const enhance = compose(
  firestoreConnect(),
  connect(mapStateToProps, transactionsOperations),
  withProps(({ navigation }) => ({ backUrl: getParam('backUrl')(navigation) })),
  withProps(({ navigation }) => ({ listUrl: getParam('listUrl')(navigation) })),
  withProps(({ navigation }) => ({ loadexpense: getParam('loadexpense')(navigation) })),

  withState('date', 'setDate', new Date()),
  withState('value', 'setValue', 0),
  withState('isIncome', 'setIsIncome', true),
  withState('isVisibleModal', 'setVisibleModal', false),

  withState('account', 'setAccount', null),
  withState('category', 'setCategory', null),
  withState('isSelectedCategory', 'setSelectedCategory', false),
  withState('note', 'setNote', ''),
  /*-- ADD STATE PROPS --*/

  /*-- ADD NAV PROPS --*/
  withProps(({/*-- FETCH PROPS --*/ }) => ({
    /*-- ADD LOOKUP PROPS --*/
  })),
  withHandlers({

    onSubmit: ({
      navigation, firestore, auth, profile, listUrl, loadexpense, onClose, ...props
    }) => () => {
      Keyboard.dismiss();
      const editedProps = R.pick(['name',/*-- ADD PROPS --*/], props);
      const propsToSubmit = loadexpense ? Object.assign(loadexpense, editedProps) : editedProps;
      let promise = {};
      if (loadexpense) {
        Object.assign(propsToSubmit, {
          updatedByUser: auth.uid,
          updatedByTenantId: profile.tenantId,
          updatedDate: new Date()
        });
        promise = firestore.set('tenants/' + profile.tenantId + '/loadexpenses/' + loadexpense.id, propsToSubmit)
      } else {
        Object.assign(propsToSubmit, {
          createdByUser: auth.uid,
          createdByTenantId: profile.tenantId,
          createdDate: new Date()
        });
        promise = firestore.add('tenants/' + profile.tenantId + '/loadexpenses', propsToSubmit)
      }

      promise.then(() => {
        ToastAndroid.show('Expense has been saved successfully!', ToastAndroid.BOTTOM);
      }, (e) => {
        ToastAndroid.show('Error saving expense! Please try again', ToastAndroid.BOTTOM);
      });
      if (listUrl) {
        navigation.navigate(listUrl);
      } else {
        navigation.goBack(null);
      }
    },
    /*-- ADD SELECT PROPS --*/
    /*-- ADD FORMINPUT HANDLER --*/
  }),
  withPropsOnChange(
    requiredProps,
    props => ({ isValid: isFieldsNotEmpty(requiredProps, props) && isFieldsFilled(requiredProps, props) }),
  ),
  withHandlers({
    onChangeCategory: ({ setCategory, onToggleModal, setSelectedCategory }) => (category) => {
      onToggleModal();
      setCategory(category);
      setSelectedCategory(true);
    },
  }),
  lifecycle({
    componentDidMount() {
      const {
        navigation,
        setValue,
        setDate,
        setAccount,
        setCategory,
        setNote,
        transaction,
        accountsById,
        categoriesById,
        setSelectedCategory,
        setIsIncome,
        loadexpense
        /*-- SET FORMINPUT VALUE --*/
      } = this.props;

      setValue(Number(getParam('value')(navigation)));
      setIsIncome(getParam('isIncome')(navigation));

      if (loadexpense) {
        const { date, account, category, note /*-- FETCH PROPS --*/ } = loadexpense;
        setDate(new Date(date));
        setAccount(accountsById[account]);
        setCategory(categoriesById[category]);
        setSelectedCategory(true);
        setNote(note || '');
        /*-- SET PROPS --*/
      }
    },
    componentDidUpdate(prevProps) {
      const {
        /*-- SET FORMINPUT UPDATED VALUE --*/
      } = this.props;
      const {
        /*-- FETCH PREV FORMINPUT VALUE --*/
      } = prevProps;

      /*-- SET UPDATED VALUES --*/
    },
  }),
);


export default hoistStatics(enhance)(LoadExpenseEditor);
