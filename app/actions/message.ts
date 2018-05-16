import {ActionsUnion, createAction} from 'typesafe-actions';
import {ActionTypes} from 'constants@app';

export const actions = {
  handleMessageOpen: createAction(ActionTypes.OPEN_MESSAGETE_SNACBAR, (resolve): any => {
    return (amount: number) => resolve(amount);
  }),
  handleMessageClose: createAction(ActionTypes.CLOSE_MESSAGETE_SNACBAR, (): any => {

  }),
};

export type IMessageAction = ActionsUnion<typeof actions>;
