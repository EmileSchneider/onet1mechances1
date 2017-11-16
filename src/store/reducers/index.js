import file from '../../watches.json';

console.log(file.Items);

const initialState = file;

export const buildList = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_LIST':
      return state;
    default:
      return state;
  }
}
