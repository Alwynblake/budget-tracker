import { createStore } from 'redux';
import mainReducer from './reducer/main-reducer';
import {composeWithDevTools} from "redux-devtools-extension";

// import sectionReducer from './reducer/section-reducer';

export default () => {
  // create Store and assign a listener to it that will connect to the DevTools function that connects to chrome
  return createStore(mainReducer, composeWithDevTools());
};
// const store = createStore(sectionReducer);
// export default store