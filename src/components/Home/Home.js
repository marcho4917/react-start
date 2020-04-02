import React from 'react';
import styles from './Home.scss';
import { settings, pageContents } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import ListLink from '../ListLink/ListLink';

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
        <section className={styles.component}>
          {lists.map((listData, index) => (
            <ListLink key={index} {...listData} /> ))}
          <div className={styles.creator}>
            <Container><Creator text={settings.defaultText} action={addList} /></Container>
          </div>
        </section>
      </main>
      
    );
  }
}

export default Home;