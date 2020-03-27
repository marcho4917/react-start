import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import {listData} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <section className={styles.component}>
          {lists.map((listData, index) => (
            <List key={index} {...listData} /> ))}
          {/*<div className={styles.creator}>
            <Creator text={settings.defaultText} action={title => this.addList(title)} />
          </div>*/}
        </section>
      </main>
      
    );
  }
}

export default App;