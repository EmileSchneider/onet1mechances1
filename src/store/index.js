import { createStore } from 'redux';

import { addWatch } from './reducers';

let store = createStore(addWatch)

export default store;
