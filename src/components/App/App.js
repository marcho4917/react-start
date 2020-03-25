import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    listData: [listData],
  }

  addList(title) {
    this.setState (state => (
      {
        listData: [
          ...state.listData,
          {
            image: '',
            descritpion: '',
            title,
          },
        ],
      }
    ));

  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <section className={styles.component}>
          {this.state.listData.map((listData, index) => (
            <List key={index} {...listData} /> ))}
          <div className={styles.creator}>
            <Creator text={settings.defaultText} action={title => this.addList(title)} />
          </div>
        </section>
      </main>
      
    );
  }
}

export default App;

