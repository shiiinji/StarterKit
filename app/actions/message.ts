import {ActionsUnion, createAction} from 'typesafe-actions';
import {ActionTypes} from 'constants@app';

export const actions = {
  handleMessageOpen: createAction(ActionTypes.OPEN_MESSAGETE_SNACBAR, (message: string) => ({
    message,
    type: ActionTypes.OPEN_MESSAGETE_SNACBAR,
  })),
  handleMessageClose: createAction(ActionTypes.CLOSE_MESSAGETE_SNACBAR, (message?: string) => ({
    message,
    type: ActionTypes.CLOSE_MESSAGETE_SNACBAR,
  })),
};

export type IMessageAction = ActionsUnion<typeof actions>;
