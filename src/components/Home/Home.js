import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
import { settings, pageContents } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';
import Container from '../Container/Container';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  static defaultProps = {
    title: pageContents.title,
    subtitle: pageContents.subtitle,
  }

  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        <section className={styles.component}>
          {lists.map((listData, index) => (
            <List key={index} {...listData} /> ))}
          <div className={styles.creator}>
            <Container><Creator text={settings.defaultText} action={addList} /></Container>
          </div>
        </section>
      </main>
      
    );
  }
}

export default Home;