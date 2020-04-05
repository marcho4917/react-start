import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import {getCardsForSearch} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () => dispatch(createAction_changeSearchString(props.match.params.searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);