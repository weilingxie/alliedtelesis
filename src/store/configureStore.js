import {createStore, combineReducers} from 'redux';
import newsListReducers from '../reducers/news';

export default () => {
    const store = createStore(
      combineReducers({
        newsList: newsListReducers
      })
    );
  
    return store;
  };

