import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello World!</h2>
        <List title={['THINGS TO DO ', <sup>soon!</sup>]}>
          <p>I'm planning on doing all these things sooner, rather than later!</p>
        </List>
        <List image={"/src/images/space.png"}></List>
      </main>
    )
  }
}

export default App;