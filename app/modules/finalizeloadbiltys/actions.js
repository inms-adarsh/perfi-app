import { createActions } from 'redux-actions';
import types from './types';

export const { createFinalizeLoadBilty, updateFinalizeLoadBilty, deleteFinalizeLoadBilty, selectFinalizeLoadBilty  } = createActions(
  types.CREATE_FINALIZELOADBILTY,
  types.UPDATE_FINALIZELOADBILTY,
  types.DELETE_FINALIZELOADBILTY,
  types.SELECT_FINALIZELOADBILTY
);

