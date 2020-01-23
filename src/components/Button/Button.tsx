import * as React from 'react';
import classNames from 'classnames';
import './Button.css';

export interface Props {
  type?: 'button' | 'submit' | 'reset',
  style?: 'primary' | 'secondary' | 'tertiary',
  children?: any,
  classes?: string,
  disabled?: boolean,
  onClick: any;
};

export class Button extends React.Component<Props> {
  static defaultProps: Props = {
    type: 'button',
    disabled: false,
    onClick: () => {}
  };

  render() {
    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        className={
          classNames(
            'btn',
            { 
              [`${this.props.classes}`] : this.props.classes,
              [`btn--${this.props.style}`] : this.props.style
            }
          )
        }
      >
        {this.props.children}
      </button>
    );
  }
};

export default Button;
