import React from 'react';
import {TextFieldProps} from 'material-ui';

declare module 'redux-form-material-ui' {
  export import TextField = __ReduxMaterialUI.TextField;
}

declare namespace __ReduxMaterialUI {
  export class TextField extends React.Component<TextFieldProps> {
    blur(): void;

    focus(): void;

    select(): void;

    getValue(): string;

    // getInputNode(): HTMLInputElement;
  }
}
