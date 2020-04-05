import React from 'react';
import styles from '../Card/Card.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
    }
    render() {
      const {cards} = this.props;
      return (
        <Container>
          <section className={styles.component}>
            <div className={styles.cards}>
              {cards.map(cardsData => (
                <Card key={cardsData.id} {...cardsData}/>
              ))}
            </div>
          </section>
        </Container>
      );
    }
}

export default SearchResults;