import { createActions } from 'redux-actions';
import types from './types';

export const { createAppliance, updateAppliance, deleteAppliance, selectAppliance  } = createActions(
  types.CREATE_APPLIANCE,
  types.UPDATE_APPLIANCE,
  types.DELETE_APPLIANCE,
  types.SELECT_APPLIANCE
);

