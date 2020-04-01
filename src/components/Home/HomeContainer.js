import {connect} from 'react-redux';
import Home from './Home';
import {getListsForApp, createActionAddList}  from '../../redux/listsRedux';

const mapStateToProps = (state, props) => ({
  lists: getListsForApp(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createActionAddList({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);