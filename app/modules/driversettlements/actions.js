import { createActions } from 'redux-actions';
import types from './types';

export const { createDriverSettlement, updateDriverSettlement, deleteDriverSettlement, selectDriverSettlement  } = createActions(
  types.CREATE_DRIVERSETTLEMENT,
  types.UPDATE_DRIVERSETTLEMENT,
  types.DELETE_DRIVERSETTLEMENT,
  types.SELECT_DRIVERSETTLEMENT
);

