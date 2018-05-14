import {IMessageAction} from 'actions@app/message';
import {ActionTypes} from 'constants@app';
import {IMessageReducer} from 'model@app/message';

export const initialState: IMessageReducer = {
  open: false,
  message: '',
};

const message = (state: IMessageReducer = initialState, action: IMessageAction) => {
  switch (action.type) {
    case ActionTypes.OPEN_MESSAGETE_SNACBAR: {
      return {
        ...state,
        open: true,
        message: action.message,
      };
    }

    case ActionTypes.CLOSE_MESSAGETE_SNACBAR: {
      return {
        ...state,
        open: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default message;
