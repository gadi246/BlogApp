import { SORT_ADMIN_COLUMNS } from  '../actions/action-creators';

const columns = (state=[], action) => {
  switch (action.type) {
    case SORT_ADMIN_COLUMNS :
      return state.map(column => column.name === action.name ? Object.assign({}, {
        name: action.name,
        descentSort: !action.descentSort
      }) : column);
    default:
          return state;
  }
};
export  default columns


