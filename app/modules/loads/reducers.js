import { handleActions } from 'redux-actions';
import types from './types';
import { defaultLoads } from '../../constants/loads';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createLoad = ({ name, customer, broker, consignor, consignee, deliveryAddress, customerType, transportation, carrier, gstBy, freightBy, fromLocation, toLocation, goodsValue, eWayBill, totalQuantity, quantityUnit, ratePerUnit, freight, hamali, haltage, otherCharges, totalFreight, gst, insuranceCompany, insuredAmount, driver, truck, advancePaid, toPay, date,/*-- ADD PROPS --*/ }) => ({ name, customer, broker, consignor, consignee, deliveryAddress, customerType, transportation, carrier, gstBy, freightBy, fromLocation, toLocation, goodsValue, eWayBill, totalQuantity, quantityUnit, ratePerUnit, freight, hamali, haltage, otherCharges, totalFreight, gst, insuranceCompany, insuredAmount, driver, truck, advancePaid, toPay, date,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultLoads);

const loadsReducer = handleActions({
  [types.CREATE_LOAD]: (state, { payload }) => insert(state, createLoad(payload)),
  [types.UPDATE_LOAD]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_LOAD]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_LOAD]: (state, { payload }) => {
    return { ...state,
      currentLoad: payload
    }
  },
}, initialState);

export default loadsReducer;
