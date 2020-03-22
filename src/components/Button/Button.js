import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

class Button extends React.Component {

  static propTypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
  }

  static defaultProps = {
    variant: '',
  }

  activateConfirm() {
    const str = this.props.variant;

    if (str.search('confirm') != -1) {
      if (window.confirm("Do you really want to cancel?")) { 
        this.props.onClick();
     }
    } else {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button onClick={this.activateConfirm.bind(this)} className={styles.component + this.props.variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>{this.props.children}</button>
    )
  }
  
}

export default Button;