import { SORT_ADMIN_COLUMNS } from  '../actions/action-creators';

const columns = (state=[], action) => {
  switch (action.type) {
    case SORT_ADMIN_COLUMNS :
      return state.map(column => {
         if(column.name === action.name&& column.selected){
           return Object.assign({}, {
            name: column.name,
            descentSort: !column.descentSort,
            selected: true
          })
        }
        else if(column.name === action.name&& !column.selected ) {
           return  Object.assign({}, {
            name: column.name,
            descentSort: column.descentSort,
            selected: true
          })
        }
        else if(column.name !== action.name) {
           return  Object.assign({}, {
            name: column.name,
            descentSort: column.descentSort,
            selected: false
          })
        }
      });
    default:
          return state;
  }
};
export default columns



