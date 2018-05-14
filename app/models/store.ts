import {FormReducer} from 'redux-form';
import {IMessageReducer} from 'model@app/message';

export interface IStore {
  form: FormReducer;
  message: IMessageReducer;
}
