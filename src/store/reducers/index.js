import file from '../../watches.json';

const initialState = file;

export const buildList = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_LIST':
      return state;
    default:
      return state;
  }
}

export const setNewItem = (state = initialState, action) => {
  switch (action.try) {
    case 'SET_NAME':
      return Object.assign({}, state, {
        newItem: {
          src: action.data
        }
      })
    case 'SET_FILE':
      return Object.assign({}, state, {
        newItem: {
          file: action.data
        }
      })
    case 'SET_PRICE':
      return Object.assign({}, state, {
        newItem: {
          price: action.data
        }
      })
    case 'SET_DESCR':
      return Object.assign({}, state, {
        newItem: {
          description: action.data
        }
      })
    case 'SET_DELIV':
      return Object.assign({}, state, {
        newItem: {
          deliverytime: action.data
        }
      })
    default:
  }
}
