import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
      {
        if(props.image != null) {
          <img className={styles.image} src={props.image}></img>
        } else {
          return null;
        }
      }
  </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string,
}

export default Hero;


if (isLoggedIn) {
  button = <LogoutButton onClick={this.handleLogoutClick} />;
} else {
  button = <LoginButton onClick={this.handleLoginClick} />;
}