import { SORT_ADMIN_COLUMNS } from  '../actions/action-creators';

const columns = (state=[], action) => {
  switch (action.type) {
    case SORT_ADMIN_COLUMNS :
      return state.map(column => {
        return column.name === action.name ? Object.assign({}, {
          name: column.name,
          descentSort: !column.descentSort,
          selected: true
        }) : Object.assign({}, {
          name: column.name,
          descentSort: column.descentSort,
          selected: false
        })
      });
    default:
          return state;
  }
};
export  default columns


