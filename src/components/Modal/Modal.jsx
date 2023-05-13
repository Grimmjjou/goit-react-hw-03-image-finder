import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }
  clickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  clickEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={styles.overlay} onClick={this.clickBackdrop}>
        <div className={styles.modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
