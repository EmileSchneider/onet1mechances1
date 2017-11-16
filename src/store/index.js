import { createStore } from 'redux';

import { buildList } from './reducers';

let store = createStore(buildList)

export default store;
